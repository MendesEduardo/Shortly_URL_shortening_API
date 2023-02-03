import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from 'react';
import styles from "./LinkItem.module.scss";


function LinkItem({ shortUrl, url }) {
    const [buttonText, setButtonText] = useState("Copy");

    const handleCopy = () => {
        setButtonText("Copied!");
    };

    return (
        <ul className={styles.link}>
            <h1>
                {url}
            </h1>
            <hr />
            <div className={styles.linkcopy}>
                <li key={shortUrl}>
                  {shortUrl}
                </li>
                <CopyToClipboard text={shortUrl} onCopy={handleCopy}>
                    <button
                        className={` ${buttonText === "Copied!" ? "bg-[#232127]" : "" }`}
                    >
                        {buttonText}
                    </button>
                </CopyToClipboard>
            </div>
        </ul>
    );
};

export default LinkItem;