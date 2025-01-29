'use client';

import styles from './LangSwitcher.module.scss';

const LangSwitcher = () => {
  return (
    <div className={styles.LangSwitcher}>
      <button
        className={`${styles.LangSwitcher_btn} ${styles.fr} ${styles.active}`}
      >
        FR
      </button>
      <button className={`${styles.LangSwitcher_btn} ${styles.en} `}>EN</button>
    </div>
  );
};

export default LangSwitcher;
