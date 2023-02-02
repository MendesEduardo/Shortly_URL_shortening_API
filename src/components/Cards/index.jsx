import React from 'react'
import Data from "../../json/db.json";
import MapCard from './MapCard/MapCard';

function Cards() {
    return (
        <section>
            <h2>Advanced Statistics</h2>
            <p>
                Track how your links are performing across the web with our
                advanced statistics dashboard.
            </p>
            <div>
                {Data.map(card => <MapCard
                    key={card.id}
                    info={card.info}
                    titulo={card.titulo}
                    image={card.image}
                />)}
            </div>
        </section>
    )
}

export default Cards