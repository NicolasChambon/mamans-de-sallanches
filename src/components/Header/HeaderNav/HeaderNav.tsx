import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './HeaderNav.module.scss';

const HeaderNav = () => {
  const { locale } = useRouter();
  return (
    <nav className={styles.HeaderNav}>
      <ul className={styles.HeaderNav_list}>
        <li className={styles.HeaderNav_list_item}>
          <Link href="/" className={styles.HeaderNav_list_item_link}>
            Présentation
            {locale === 'fr' ? 'Présentation' : 'Presentation'}
          </Link>
        </li>
        <li className={styles.HeaderNav_list_item}>
          <Link href="/" className={styles.HeaderNav_list_item_link}>
            Évènements
          </Link>
        </li>
        <li className={styles.HeaderNav_list_item}>
          <Link href="/" className={styles.HeaderNav_list_item_link}>
            Activités
          </Link>
        </li>
        <li className={styles.HeaderNav_list_item}>
          <Link href="/" className={styles.HeaderNav_list_item_link}>
            Contact
          </Link>
        </li>
        <li className={styles.HeaderNav_list_item}>
          <Link className={styles.HeaderNav_list_item_link} href="/news">
            Actualités
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
