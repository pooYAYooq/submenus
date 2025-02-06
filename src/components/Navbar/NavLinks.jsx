import { useGlobalContext } from '../../context';
import sublinks from '../../data';
import styles from './Navbar.module.scss';

const NavLinks = () => {
  const { setPageId } = useGlobalContext();
  return (
    <div className={styles.navLinks}>
      {sublinks.map((item) => {
        const { pageId, page } = item;
        return (
          <button key={pageId} className={styles.navLink} onMouseEnter={() => setPageId(pageId)}>
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default NavLinks;
