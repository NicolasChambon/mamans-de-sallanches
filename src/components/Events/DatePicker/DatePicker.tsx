'use client';

import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

import styles from './DatePicker.module.scss';

const DatePicker = () => {
  return (
    <div className={styles.DatePicker}>
      <p className={styles.DatePicker_period}>1 septembre - 7 septembre</p>

      <div className={styles.DatePicker_table}>
        <button className={styles.DatePicker_table_btn}>
          <IoIosArrowBack />
        </button>

        <div className={styles.DatePicker_table_week}>
          <div className={styles.DatePicker_table_week_header}>
            <p className={styles.DatePicker_table_week_header_item}>Lun.</p>
            <p className={styles.DatePicker_table_week_header_item}>Mar.</p>
            <p className={styles.DatePicker_table_week_header_item}>Mer.</p>
            <p className={styles.DatePicker_table_week_header_item}>Jeu.</p>
            <p className={styles.DatePicker_table_week_header_item}>Ven.</p>
            <p className={styles.DatePicker_table_week_header_item}>Sam.</p>
            <p className={styles.DatePicker_table_week_header_item}>Dim.</p>
          </div>

          <div className={styles.DatePicker_table_week_days}>
            <button className={styles.DatePicker_table_week_days_item}>
              1
            </button>
            <button className={styles.DatePicker_table_week_days_item}>
              2
            </button>
            <button className={styles.DatePicker_table_week_days_item}>
              3
            </button>
            <button className={styles.DatePicker_table_week_days_item}>
              4
            </button>
            <button className={styles.DatePicker_table_week_days_item}>
              5
            </button>
            <button className={styles.DatePicker_table_week_days_item}>
              6
            </button>
            <button className={styles.DatePicker_table_week_days_item}>
              7
            </button>
          </div>
        </div>

        <button className={styles.DatePicker_table_btn}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default DatePicker;
