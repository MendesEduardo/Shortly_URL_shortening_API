import styles from './Footer.module.scss';
import Logo from "./logo.svg";
import iconFacebook from "./icon-facebook.svg";
import iconInstagram from "./icon-instagram.svg";
import iconPinterest from "./icon-pinterest.svg";
import iconTwitter from "./icon-twitter.svg";

function Footer() {
    return (
        <footer className={styles.footer}>
            <img
                className={styles.footer__logo}
                src={Logo}
                alt="Logo"
            />

            <ul>
                <li>Features</li>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
            </ul>

            <ul>
                <li>Resources</li>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
            </ul>

            <ul>
                <li>Company</li>
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>

            <ul>
                <img src={iconFacebook} alt="Facebook" />
                <img src={iconTwitter} alt="Facebook" />
                <img src={iconPinterest} alt="Facebook" />
                <img src={iconInstagram} alt="Facebook" />
            </ul>

        </footer>
    )
};

export default Footer;