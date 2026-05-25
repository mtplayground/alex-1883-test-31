const SECOND_MS = 1000;

export const millisecondsUntilNextSecond = (timestamp = Date.now()) => {
  const remainder = timestamp % SECOND_MS;
  return remainder === 0 ? SECOND_MS : SECOND_MS - remainder;
};

export const createTickScheduler = (
  callback,
  {
    now = () => Date.now(),
    setTimer = setTimeout,
    clearTimer = clearTimeout,
  } = {},
) => {
  let isRunning = false;
  let timerId = null;

  const scheduleNextTick = () => {
    timerId = setTimer(runTick, millisecondsUntilNextSecond(now()));
  };

  const runTick = () => {
    if (!isRunning) {
      return;
    }

    timerId = null;
    callback(new Date(now()));

    if (isRunning) {
      scheduleNextTick();
    }
  };

  return {
    start() {
      if (isRunning) {
        return;
      }

      isRunning = true;
      scheduleNextTick();
    },

    stop() {
      isRunning = false;

      if (timerId !== null) {
        clearTimer(timerId);
        timerId = null;
      }
    },
  };
};

export default createTickScheduler;
