import Button01 from '../Button01';
import styles from './Menu.module.scss';

function NavBar() {
  return (
    <ul className={styles.linkMenu}>
      <li>
        <a href="#features">Features</a>
      </li>
      <li>
        <a href="#pricing">Pricing</a>
      </li>
      <li>
        <a href="#resources">Resources</a>
      </li>
    <div className={styles.bar}></div>
      <div className={styles.login}>
        <a href="#login">Login</a>
        <Button01>Sign Up</Button01>
      </div>
 
    </ul>
  )
};

export default NavBar;