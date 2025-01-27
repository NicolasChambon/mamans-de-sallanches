import NarrowMenuNav from './NarrowMenuNav/NarrowMenuNav';
import NarrowMenuLang from './NarrowMenuLang/NarrowMenuLang';

import style from './NarrowMenu.module.scss';

const NarrowMenu = () => {
  return (
    <div className={style.NarrowMenu}>
      <NarrowMenuNav />
      <NarrowMenuLang />
    </div>
  );
};

export default NarrowMenu;
