import { describe, expect, it } from 'vitest';
import {
  formatHours,
  formatMinutes,
  formatSeconds,
  formatTime,
} from './time.js';

describe('time formatting', () => {
  it('pads single-digit hours, minutes, and seconds', () => {
    const date = new Date(2024, 0, 1, 3, 4, 5);

    expect(formatHours(date)).toBe('03');
    expect(formatMinutes(date)).toBe('04');
    expect(formatSeconds(date)).toBe('05');
    expect(formatTime(date)).toBe('03:04:05');
  });

  it('keeps double-digit hours, minutes, and seconds unchanged', () => {
    const date = new Date(2024, 0, 1, 13, 14, 15);

    expect(formatHours(date)).toBe('13');
    expect(formatMinutes(date)).toBe('14');
    expect(formatSeconds(date)).toBe('15');
    expect(formatTime(date)).toBe('13:14:15');
  });

  it('formats midnight', () => {
    expect(formatTime(new Date(2024, 0, 1, 0, 0, 0))).toBe('00:00:00');
  });

  it('formats noon', () => {
    expect(formatTime(new Date(2024, 0, 1, 12, 0, 0))).toBe('12:00:00');
  });
});
