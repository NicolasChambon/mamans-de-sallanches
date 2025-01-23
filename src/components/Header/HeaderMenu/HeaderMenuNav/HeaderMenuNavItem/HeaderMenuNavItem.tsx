import Link from 'next/link';

import styles from './HeaderMenuNavItem.module.scss';

const HeaderMenuNavItem = ({
  href,
  content
}: {
  href: string;
  content: string;
}) => {
  return (
    <li className={styles.HeaderMenuNavItem}>
      <Link href={href} className={styles.HeaderMenuNavItem_link}>
        {content}
      </Link>
    </li>
  );
};

export default HeaderMenuNavItem;
