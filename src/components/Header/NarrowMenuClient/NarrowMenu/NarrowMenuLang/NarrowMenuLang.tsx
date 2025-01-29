import style from './NarrowMenuLang.module.scss';

const NarrowMenuLang = () => {
  return (
    <div className={style.NarrowMenuLang}>
      <button
        className={`${style.NarrowMenuLang_btn} ${style.fr} ${style.active}`}
      >
        FR
      </button>
      <button className={`${style.NarrowMenuLang_btn} ${style.en}`}>EN</button>
    </div>
  );
};

export default NarrowMenuLang;
