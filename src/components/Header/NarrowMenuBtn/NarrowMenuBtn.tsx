'use client';

import { useState } from 'react';

// Icons
import { IoMenu } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

import styles from './NarrowMenuBtn.module.scss';

const NarrowMenuBtn = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <button
      className={styles.NarrowMenuBtn}
      onClick={(e) => {
        e.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
      }}
    >
      {isMenuOpen ? <RxCross2 /> : <IoMenu />}
    </button>
  );
};

export default NarrowMenuBtn;
