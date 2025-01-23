import HeaderMenuNavItem from './HeaderMenuNavItem/HeaderMenuNavItem';

import style from './HeaderMenuNav.module.scss';

const HeaderMenuNav = () => {
  return (
    <nav className={style.HeaderMenuNav}>
      <ul className={style.HeaderMenuNav_list}>
        <HeaderMenuNavItem href="/" content="Présentation" />
        <HeaderMenuNavItem href="/" content="Évènements" />
        <HeaderMenuNavItem href="/" content="Activités" />
        <HeaderMenuNavItem href="/" content="Contact" />
        <HeaderMenuNavItem href="/news" content="Actualités" />
      </ul>
    </nav>
  );
};

export default HeaderMenuNav;
