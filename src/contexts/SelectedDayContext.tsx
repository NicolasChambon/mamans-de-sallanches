import { createContext, useState } from 'react';

import { resetTime } from '../utils/resetTime';

export const SelectedDayContext = createContext<{
  selectedDay: Date;
  setSelectedDay: (date: Date) => void;
} | null>(null);

export const SelectedDayProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [selectedDay, setSelectedDay] = useState(resetTime(new Date()));

  return (
    <SelectedDayContext.Provider value={{ selectedDay, setSelectedDay }}>
      {children}
    </SelectedDayContext.Provider>
  );
};
