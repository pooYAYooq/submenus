import { useRef } from 'react';
import { useGlobalContext } from '../../context';
import sublinks from '../../data';
import styles from './Submenu.module.scss';
import clsx from 'clsx';

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  const submenuContainer = useRef(null);

  const handleMouseLeave = (e) => {
    const submenu = submenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = e;
    // subtract 1px from left, right and bottom to account for mouse movements in slow screen refresh rate
    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
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
