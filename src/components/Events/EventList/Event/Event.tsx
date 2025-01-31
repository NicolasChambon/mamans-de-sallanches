import Link from 'next/link';
import styles from './Event.module.scss';

interface EventProps {
  timeStart: string;
  duration: string;
  title: string;
  leader: string;
  type: string;
  numberOfParticipants: string;
  availablePlaces: string;
  link: string;
}

const Event = ({
  timeStart,
  duration,
  title,
  leader,
  type,
  numberOfParticipants,
  availablePlaces,
  link
}: EventProps) => {
  return (
    <div className={styles.Event}>
      <div className={styles.Event_time}>
        <p className={styles.Event_time_start}>{timeStart}</p>
        <p className={styles.Event_time_duration}>{duration}</p>
      </div>

      <div className={styles.Event_titleLeader}>
        <p className={styles.Event_titleLeader_title}>{title}</p>
        <p className={styles.Event_titleLeader_leader}>Animé par {leader}</p>
      </div>

      <div className={styles.Event_typeAvailability}>
        <p className={styles.Event_typeAvailability_type}>{type}</p>
        <p className={styles.Event_typeAvailability_availability}>
          {numberOfParticipants} inscrits - reste {availablePlaces} places
        </p>
      </div>

      <Link className={styles.Event_link} href={link}>
        Réserver
      </Link>
    </div>
  );
};

export default Event;
