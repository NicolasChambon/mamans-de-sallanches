'use client';

import { SelectedDayProvider } from '@/contexts/SelectedDayContext';
import DatePicker from './DatePicker/DatePicker';
import EventList from './EventList/EventList';

const Events = () => {
  return (
    <SelectedDayProvider>
      <DatePicker />
      <EventList />
    </SelectedDayProvider>
  );
};

export default Events;
