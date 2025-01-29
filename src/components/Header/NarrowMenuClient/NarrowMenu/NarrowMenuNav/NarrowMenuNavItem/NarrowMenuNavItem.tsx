import Link from 'next/link';

import styles from './NarrowMenuNavItem.module.scss';

const NarrowMenuNavItem = ({
  href,
  content
}: {
  href: string;
  content: string;
}) => {
  return (
    <li className={styles.NarrowMenuNavItem}>
      <Link href={href} className={styles.NarrowMenuNavItem_link}>
        {content}
      </Link>
    </li>
  );
};

export default NarrowMenuNavItem;
