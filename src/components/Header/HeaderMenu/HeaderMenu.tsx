import MenuNav from './HeaderMenuNav/HeaderMenuNav';
import MenuLang from './HeaderMenuLang/HeaderMenuLang';

import style from './HeaderMenu.module.scss';

const HeaderMenu = () => {
  return (
    <div className={style.HeaderMenu}>
      <MenuNav />
      <MenuLang />
    </div>
  );
};

export default HeaderMenu;
