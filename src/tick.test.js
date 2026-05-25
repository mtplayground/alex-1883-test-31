import { afterEach, describe, expect, it, vi } from 'vitest';
import { createTickScheduler, millisecondsUntilNextSecond } from './tick.js';

describe('tick scheduler', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('calculates the delay to the next whole second', () => {
    expect(millisecondsUntilNextSecond(1_234)).toBe(766);
    expect(millisecondsUntilNextSecond(2_000)).toBe(1_000);
  });

  it('starts on the next whole second and continues once per second', async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2024, 0, 1, 0, 0, 0, 250));

    const callback = vi.fn();
    const scheduler = createTickScheduler(callback);

    scheduler.start();

    await vi.advanceTimersByTimeAsync(749);
    expect(callback).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(1);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback.mock.calls[0][0]).toEqual(
      new Date(2024, 0, 1, 0, 0, 1, 0),
    );

    await vi.advanceTimersByTimeAsync(1_000);
    expect(callback).toHaveBeenCalledTimes(2);

    scheduler.stop();
  });

  it('does not schedule duplicate timers when start is called repeatedly', async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2024, 0, 1, 0, 0, 0, 500));

    const callback = vi.fn();
    const scheduler = createTickScheduler(callback);

    scheduler.start();
    scheduler.start();

    await vi.advanceTimersByTimeAsync(500);
    expect(callback).toHaveBeenCalledTimes(1);

    scheduler.stop();
  });

  it('stops a pending tick', async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2024, 0, 1, 0, 0, 0, 500));

    const callback = vi.fn();
    const scheduler = createTickScheduler(callback);

    scheduler.start();
    scheduler.stop();

    await vi.advanceTimersByTimeAsync(1_000);
    expect(callback).not.toHaveBeenCalled();
  });
});
