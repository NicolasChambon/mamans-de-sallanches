import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';
import LangSwitcher from './LangSwitcher/LangSwitcher';
import NarrowMenuBtn from './NarrowMenuBtn/NarrowMenuBtn';
import NarrowMenu from './NarrowMenu/NarrowMenu';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Header_container}>
        <HeaderLogo />

        {/* Disappears below 640px */}
        <HeaderNav />
        <LangSwitcher />

        {/* Appears below 640px */}
        <NarrowMenuBtn />

        <NarrowMenu />
      </div>
    </header>
  );
};

export default Header;
