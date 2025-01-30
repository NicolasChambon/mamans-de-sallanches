import DatePicker from './DatePicker/DatePicker';

import styles from './Events.module.scss';

const Events = () => {
  return (
    <section className={styles.Events}>
      <h1 className={styles.Events_title}>Événements</h1>
      <DatePicker />
    </section>
  );
};

export default Events;
