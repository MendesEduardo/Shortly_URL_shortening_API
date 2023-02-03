import React from 'react'
import Data from "../../json/db.json";
import MapCard from './MapCard/MapCard';
import styles from "./Cards.module.scss";

function Cards() {
    return (
        <section className={styles.bg}>
            <article className={styles.cardsText}>
                <h2>Advanced Statistics</h2>
                <p>
                    Track how your links are performing across the web with our
                    advanced statistics dashboard.
                </p>
            </article>
            <article className={styles.cards}>
                <div className={styles.cardsDiv1}>
                    {Data.map(card => <MapCard
                        key={card.id}
                        info={card.info}
                        title={card.title}
                        image={card.image}
                    />)}
                </div>
            </article>
        </section>
    )
}

export default Cards