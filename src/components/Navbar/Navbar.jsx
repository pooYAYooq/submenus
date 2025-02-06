import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../../context';
import styles from './Navbar.module.scss';
import clsx from 'clsx';

import NavLinks from './NavLinks';

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains(styles.navLink)) {
      setPageId(null);
    }
  };
  return (
    <nav className={styles.nav} onMouseOver={handleSubmenu}>
      <div className={styles.navCenter}>
        <h3>
          <a href="#" className={styles.logo}>
            strapi
          </a>
        </h3>
        <button className={styles.toggleBtn} onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};
export default Navbar;
