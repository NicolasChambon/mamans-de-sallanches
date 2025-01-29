import PresentationTop from './PresentationTop/PresentationTop';
import PresentationBottom from './PresentationBottom/PresentationBottom';

import styles from './Presentation.module.scss';

const Presentation = () => {
  return (
    <section className={styles.Presentation}>
      <PresentationTop />
      <PresentationBottom />
    </section>
  );
};

export default Presentation;
