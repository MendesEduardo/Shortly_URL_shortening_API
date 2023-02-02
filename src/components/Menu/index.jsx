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
      <li>
        <a href="#login">Login</a>
      </li>
      <li>
        <Button01>Sign Up</Button01>
      </li>
    </ul>
  )
};

export default NavBar;