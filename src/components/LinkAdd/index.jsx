import { useState } from "react";
import styles from "./LinkAdd.module.scss";
import LinkItem from "./LinkItem";

function LinkForm() {
    const [url, setUrl] = useState("");
    const [links, setLinks] = useState([]);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const regex =
            /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/;
        if (!regex.test(url)) {
            setError(true);
        } else {
            setError(false);
            const response = await fetch(
                `https://api.shrtco.de/v2/shorten?url=${url}`
            );
            const data = await response.json();

            const shortUrl = data.result.short_link;
            setLinks([...links, { shortUrl, url }]);
        }
    };

    return (
        <>
            <div className={styles.linkAdd}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="text"
                        placeholder="Shorten a link here..."
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className={`${styles.input} ${error ? styles.erro : ""}`}
                    />

                    <button type="submit">
                        Shorten it!
                    </button>
                </form>
                    {error && (
                        <p>
                            Please add a link
                        </p>
                    )}
            </div>
            {!error &&
                links.map(({ shortUrl, url }) => (
                    <LinkItem key={shortUrl} shortUrl={shortUrl} url={url} />
                ))}
        </>
    );
}

export default LinkForm;