import styles from './MapCard.module.scss';

function MapCard(props) {
    return (
        <article className={styles.mapCards}>
            <div key={props.id}>
                <div className={styles.mapCards__image}>
                    <img 
                        src={props.image}
                        alt={props.title}
                    />
                </div>
                <h4 className={styles.mapCards__title}>
                    {props.title}
                </h4>
                <p className={styles.mapCards__paragraph}>
                    {props.info}
                </p>
            </div>
        </article>
    )
};

export default MapCard;