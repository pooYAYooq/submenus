import sublinks from '../../data';
import styles from './Navbar.module.scss';

const NavLinks = () => {
  return (
    <div className={styles.navLinks}>
      {sublinks.map((item) => {
        const { pageId, page } = item;
        return (
          <button key={pageId} className={styles.navLink}>
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default NavLinks;
