const padTimePart = (value) => String(value).padStart(2, '0');

export const formatHours = (date) => padTimePart(date.getHours());

export const formatMinutes = (date) => padTimePart(date.getMinutes());

export const formatSeconds = (date) => padTimePart(date.getSeconds());

export const formatTime = (date) =>
  `${formatHours(date)}:${formatMinutes(date)}:${formatSeconds(date)}`;
