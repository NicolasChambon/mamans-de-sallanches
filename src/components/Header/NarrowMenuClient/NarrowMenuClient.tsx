'use client';

import { useState } from 'react';

import NarrowMenuBtn from './NarrowMenuBtn/NarrowMenuBtn';
import NarrowMenu from './NarrowMenu/NarrowMenu';

const NarrowMenuClient = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Appears below 640px */}
      <NarrowMenuBtn isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <NarrowMenu />}
    </>
  );
};

export default NarrowMenuClient;
