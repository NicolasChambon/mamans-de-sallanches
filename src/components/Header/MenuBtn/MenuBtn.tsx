'use client';

import { useState } from 'react';

// Icons
import { IoMenu } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

import styles from './MenuBtn.module.scss';

const MenuBtn = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <button
      className={styles.MenuBtn}
      onClick={(e) => {
        e.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
      }}
    >
      {isMenuOpen ? <RxCross2 /> : <IoMenu />}
    </button>
  );
};

export default MenuBtn;
