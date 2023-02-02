import styles from './MapCard.module.scss';

function MapCard(props) {
    return (
        <article className={styles.cardArticles}>
            <div key={props.id}>
                <img className={styles.cardArticles__image}
                    src={props.image}
                    alt={props.title}
                />
                <h4 className={styles.cardArticles__title}>
                    {props.title}
                </h4>
                <p className={styles.cardArticles__paragraph}>
                    {props.info}
                </p>
            </div>
        </article>
    )
};

export default MapCard;