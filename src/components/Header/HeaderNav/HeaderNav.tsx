import HeaderNavItem from './HeaderNavItem/HeaderNavItem';

import styles from './HeaderNav.module.scss';

const HeaderNav = () => {
  return (
    <nav className={styles.HeaderNav}>
      <ul className={styles.HeaderNav_list}>
        <HeaderNavItem href="/" content="Présentation" />
        <HeaderNavItem href="/" content="Évènements" />
        <HeaderNavItem href="/" content="Activités" />
        <HeaderNavItem href="/" content="Contact" />
        <HeaderNavItem href="/news" content="Actualités" />
      </ul>
    </nav>
  );
};

export default HeaderNav;
