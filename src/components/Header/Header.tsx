import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';
import HeaderLang from './HeaderLang/HeaderLang';
import MenuBtn from './MenuBtn/MenuBtn';
import HeaderMenu from './HeaderMenu/HeaderMenu';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Header_container}>
        <HeaderLogo />

        {/* Disappears below 640px */}
        <HeaderNav />
        <HeaderLang />

        {/* Appears below 640px */}
        <MenuBtn />

        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;
