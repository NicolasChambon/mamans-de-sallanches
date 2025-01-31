import Event from './Event/Event';

import styles from './EventList.module.scss';

const EventList = () => {
  return (
    <div className={styles.EventList}>
      <h2 className={styles.EventList_title}>Activités du mardi 11 février</h2>
      <ul className={styles.EventList_list}>
        <Event
          timeStart="10:00"
          duration="1h"
          title="Café des parents"
          leader="Andrea et Mélissa"
          type="Convivialité"
          numberOfParticipants="3"
          availablePlaces="8"
          link="#"
        />
        <Event
          timeStart="11:00"
          duration="1h30"
          title="Atelier aptonomie"
          leader="Gertrude"
          type="Atelier"
          numberOfParticipants="6"
          availablePlaces="10"
          link="#"
        />
        <Event
          timeStart="12:30"
          duration="1h30"
          title="Conférence mois d'or"
          leader="Pimprenelle"
          type="Conférence"
          numberOfParticipants="12"
          availablePlaces="30"
          link="#"
        />
      </ul>
    </div>
  );
};

export default EventList;
