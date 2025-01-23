'use client';

import styles from './HeaderLang.module.scss';

const HeaderLang = () => {
  return (
    <div className={styles.HeaderLang}>
      <button
        className={`${styles.HeaderLang_btn} ${styles.fr} ${styles.active}`}
      >
        FR
      </button>
      <button
        className={`${styles.HeaderLang_btn} ${styles.en} ${styles.active}`}
      >
        EN
      </button>
    </div>
  );
};

export default HeaderLang;
