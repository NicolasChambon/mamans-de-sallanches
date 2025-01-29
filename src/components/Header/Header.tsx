import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';
import LangSwitcher from './LangSwitcher/LangSwitcher';
import NarrowMenuClient from './NarrowMenuClient/NarrowMenuClient';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Header_container}>
        <HeaderLogo />

        {/* Disappears below 640px */}
        <HeaderNav />
        <LangSwitcher />

        {/* Client side interactions for the narrow menu */}
        <NarrowMenuClient />
      </div>
    </header>
  );
};

export default Header;
