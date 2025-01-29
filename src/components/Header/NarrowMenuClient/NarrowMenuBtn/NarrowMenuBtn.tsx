'use client';

// Types
import { Dispatch, SetStateAction } from 'react';

// Icons
import { IoMenu } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

import styles from './NarrowMenuBtn.module.scss';

interface NarrowMenuBtnProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const NarrowMenuBtn = ({ isMenuOpen, setIsMenuOpen }: NarrowMenuBtnProps) => {
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
