import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';
import HeaderLang from './HeaderLang/HeaderLang';
import MenuBtn from './MenuBtn/MenuBtn';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <HeaderLogo />

        {/* Disappears below 640px TODO*/}
        <HeaderNav />
        <HeaderLang />

        {/* Appears below 600px TODO*/}
        <MenuBtn />

        {/* {<HeaderMenu />} */}
      </div>
    </header>
  );
};

export default Header;
