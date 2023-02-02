import styles from './Introduction.module.scss';
import Button01 from '../Button01';
import illustrationWorking from './illustration-working.svg';

function Introduction() {
    return (
        <section className={styles.introduction}>
            <img
                className={styles.imageIntroduction}
                src={illustrationWorking}
                alt='Illustration working'
            />
            <article className={styles.textIntroduction}>
                <h1>More than just shorter links</h1>
                <p>
                    Build your brand’s recognition and get detailed insights
                    on how your links are performing.
                </p>
                <Button01>Get Started</Button01>
            </article>
        </section>
    )
};

export default Introduction;