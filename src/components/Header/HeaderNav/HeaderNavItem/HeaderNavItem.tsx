import Link from 'next/link';

import styles from './HeaderNavItem.module.scss';

const HeaderNavItem = ({
  href,
  content
}: {
  href: string;
  content: string;
}) => {
  return (
    <li className={styles.HeaderNavItem}>
      <Link href={href} className={styles.HeaderNavItem_link}>
        {content}
      </Link>
    </li>
  );
};

export default HeaderNavItem;
