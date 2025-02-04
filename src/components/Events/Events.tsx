import EventsClient from './EventsClient/EventsClient';

import styles from './Events.module.scss';

const Events = () => {
  return (
    <section className={styles.Events}>
      <h1 className={styles.Events_title}>Événements</h1>
      <EventsClient />
    </section>
  );
};

export default Events;
