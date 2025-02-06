import { useGlobalContext } from '../../context';
import sublinks from '../../data';
import styles from './Submenu.module.scss';
import clsx from 'clsx';

const Submenu = () => {
  const { pageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  // console.log('currentPage:', currentPage?.page);
  // console.log('currentPage?.links?.length:', currentPage?.links?.length > 3);

  return (
    <div
      className={clsx(styles.submenu, { [styles.showSubmenu]: currentPage })}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className={styles.submenuLinks}
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 2 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a href={url} key={id}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;
