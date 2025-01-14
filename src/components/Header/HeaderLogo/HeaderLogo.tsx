import Link from 'next/link';
import Image from 'next/image';

import MainLogo from '@/assets/logos/logo-mamans-de-sallanches.svg';

import styles from './HeaderLogo.module.scss';

const HeaderLogo = () => {
  return (
    <Link className={styles.headerLogo} href="/">
      <Image
        className={styles.headerLogo_img}
        src={MainLogo}
        alt="Logo Mamans de Sallanches"
      />
      <p className={styles.headerLogo_text}>Mamans de Sallanches</p>
    </Link>
  );
};

export default HeaderLogo;
