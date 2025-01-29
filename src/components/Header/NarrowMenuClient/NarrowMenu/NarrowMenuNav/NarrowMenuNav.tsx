import NarrowMenuNavItem from './NarrowMenuNavItem/NarrowMenuNavItem';

import style from './NarrowMenuNav.module.scss';

const NarrowMenuNav = () => {
  return (
    <nav className={style.NarrowMenuNav}>
      <ul className={style.NarrowMenuNav_list}>
        <NarrowMenuNavItem href="/" content="Présentation" />
        <NarrowMenuNavItem href="/" content="Évènements" />
        <NarrowMenuNavItem href="/" content="Activités" />
        <NarrowMenuNavItem href="/" content="Contact" />
        <NarrowMenuNavItem href="/news" content="Actualités" />
      </ul>
    </nav>
  );
};

export default NarrowMenuNav;
