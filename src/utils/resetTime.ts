import { setHours, setMinutes, setSeconds, setMilliseconds } from 'date-fns';

export const resetTime = (date: Date) => {
  return setMilliseconds(setSeconds(setMinutes(setHours(date, 0), 0), 0), 0);
};
