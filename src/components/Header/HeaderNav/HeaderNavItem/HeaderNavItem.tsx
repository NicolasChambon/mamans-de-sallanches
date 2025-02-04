import Link from 'next/link';

import styles from './HeaderNavItem.module.scss';
import ActivitiesItemClient from './ActivitiesItemClient/ActivitiesItemClient';

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
      {content === 'Activités' && <ActivitiesItemClient />}
    </li>
  );
};

export default HeaderNavItem;
