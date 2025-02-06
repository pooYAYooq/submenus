import { FaTimes } from 'react-icons/fa';
import sublinks from '../../data';
import { useGlobalContext } from '../../context';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={
        isSidebarOpen
          ? `${styles.sidebar} ${styles.showSidebar}`
          : styles.sidebar
      }
    >
      <div className={styles.sidebarContainer}>
        <button className={styles.closeBtn} onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className={styles.sidebarLinks}>
          {sublinks.map((item) => {
            const { pageId, page, links } = item;
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className={styles.sidebarSublinks}>
                  {links.map((link) => {
                    const { id, label, icon, url } = link;
                    return (
                      <a href={url} key={id}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
