'use client';

import { useState } from 'react';
import { resetTime } from '@/utils/resetTime';
import { format, startOfWeek, subWeeks, addWeeks, addDays } from 'date-fns';
import { fr } from 'date-fns/locale';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

import styles from './DatePicker.module.scss';

const DatePicker = () => {
  const daysHeaders = ['Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.', 'Dim.'];
  const currentWeekFirstDay = startOfWeek(new Date(), { weekStartsOn: 1 });

  const currentWeekDays = daysHeaders.map((header, index) => ({
    header: header,
    number: format(addDays(currentWeekFirstDay, index), 'd', { locale: fr }),
    date: addDays(currentWeekFirstDay, index)
  }));

  // To handle display of the required week
  const [selectedWeek, setSelectedWeek] = useState(currentWeekDays);
  // To handle display of the selected day and store its information
  const [selectedDay, setSelectedDay] = useState(resetTime(new Date()));

  // Handle week change
  const handleWeekChange = (direction: 'next' | 'previous') => {
    let selectedWeekFirstDay: Date | undefined = undefined;

    selectedWeekFirstDay =
      direction === 'previous'
        ? subWeeks(selectedWeek[0].date, 1)
        : addWeeks(selectedWeek[0].date, 1);

    const newWeekDays = daysHeaders.map((header, index) => ({
      header: header,
      number: format(addDays(selectedWeekFirstDay, index), 'd', {
        locale: fr
      }),
      date: addDays(selectedWeekFirstDay, index)
    }));

    setSelectedWeek(newWeekDays);
  };

  return (
    <div className={styles.DatePicker}>
      <p className={styles.DatePicker_period}>
        {`${format(selectedWeek[0].date, 'd MMMM', {
          locale: fr
        })}
        -
        ${format(selectedWeek[6].date, 'd MMMM', {
          locale: fr
        })}`}
      </p>

      <div className={styles.DatePicker_table}>
        <button
          className={styles.DatePicker_table_btn}
          onClick={() => handleWeekChange('previous')}
        >
          <IoIosArrowBack />
        </button>

        <div className={styles.DatePicker_table_week}>
          <div className={styles.DatePicker_table_week_header}>
            {selectedWeek.map((day) => (
              <p
                className={styles.DatePicker_table_week_header_item}
                key={day.header}
              >
                {day.header}
              </p>
            ))}
          </div>

          <div className={styles.DatePicker_table_week_days}>
            {selectedWeek.map((day) => (
              <button
                className={`${styles.DatePicker_table_week_days_item} ${
                  day.date.getTime() === selectedDay.getTime()
                    ? styles.active
                    : ''
                }`}
                key={day.number}
                onClick={() => {
                  setSelectedDay(day.date);
                }}
              >
                {day.number}
              </button>
            ))}
          </div>
        </div>

        <button
          className={styles.DatePicker_table_btn}
          onClick={() => handleWeekChange('next')}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default DatePicker;
