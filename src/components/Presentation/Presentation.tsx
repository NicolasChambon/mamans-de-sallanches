import PresentationTop from './PresentationTop/PresentationTop';
import PresentationBottom from './PresentationBottom/PresentationBottom';

import styles from './Presentation.module.scss';

const Presentation = () => {
  return (
    <div className={styles.Presentation}>
      <PresentationTop />
      <PresentationBottom />
    </div>
  );
};

export default Presentation;
