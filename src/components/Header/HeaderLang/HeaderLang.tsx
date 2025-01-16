'use client';

import { useRouter } from 'next/router';

import styles from './HeaderLang.module.scss';

const HeaderLang = () => {
  const router = useRouter();
  const { locale, asPath } = router;

  const changeLang = (lang: string) => {
    router.push(asPath, asPath, { locale: lang });
  };

  return (
    <div className={styles.HeaderLang}>
      <button
        className={`${styles.HeaderLang_btn} ${styles.fr} ${locale === 'fr' ? styles.active : ''}`}
        onClick={() => changeLang('fr')}
        disabled={locale === 'fr'}
      >
        FR
      </button>
      <button
        className={`${styles.HeaderLang_btn} ${styles.en} ${locale === 'en' ? styles.active : ''}`}
        onClick={() => changeLang('en')}
        disabled={locale === 'en'}
      >
        EN
      </button>
    </div>
  );
};

export default HeaderLang;
