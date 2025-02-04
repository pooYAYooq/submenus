import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../../context';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav className={styles.nav}>
      <div className={styles.navCenter}>
        <h3 className={styles.logo}>submenu</h3>
        <button className={styles.toggleBtn} onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
