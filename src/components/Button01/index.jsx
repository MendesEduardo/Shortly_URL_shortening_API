import styles from './Button01.module.scss';

function Button01({ children }) {
    return (
        <button className={styles.Button01}>
            {children}
        </button>
    )
}

export default Button01;