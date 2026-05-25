import { createTickScheduler } from './tick.js';
import { formatTime } from './time.js';

const createClockMarkup = (appTitle) => `
  <section class="clock" aria-labelledby="clock-title">
    <p class="eyebrow">${appTitle}</p>
    <h1 id="clock-title">Current time</h1>
    <time class="clock__readout" data-clock-readout aria-live="polite"></time>
  </section>
`;

export const renderTime = (readout, date) => {
  const time = formatTime(date);
  readout.textContent = time;
  readout.dateTime = time;
};

export const bootstrapClockView = ({
  root,
  appTitle,
  now = () => new Date(),
  schedulerFactory = createTickScheduler,
}) => {
  root.innerHTML = createClockMarkup(appTitle);

  const readout = root.querySelector('[data-clock-readout]');
  const updateReadout = (date = now()) => renderTime(readout, date);
  const scheduler = schedulerFactory(updateReadout);

  updateReadout();
  scheduler.start();

  return {
    stop: scheduler.stop,
    update: updateReadout,
  };
};
