import { useEffect, useState } from 'react';
import styles from './LinkAdd.module.scss';

const getLocalStorage = () => {
    let links = localStorage.getItem("links")

    if (links) {
        return JSON.parse(localStorage.getItem("links"))
    } else {
        return []
    } 
}

function LinkAdd() {
    const [text, setText] = useState("")
    const [links, setLinks] = useState(getLocalStorage())
    const [buttonText, setButtonText] = useState("Copy")


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert("Please add")
        } else {
            const shortenLink = async () => {
                const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
                const data = await res.json()
                console.log(data.result)
                setLinks(data.result)
                setText("")
            }

            shortenLink()
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(links.full_short_link)
        setButtonText("Copied!")
    }

    useEffect(() => {
        localStorage.setItem("links", JSON.stringify(links))
    }, [links])



    return (
        <section className={styles.LinkAdd}>
            <form onSubmit={handleSubmit} className={styles.LinkAdd__form}>
                <input
                    type="url"
                    id="nome"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder='Shorten a link here...'
                />

                <button type='submit' onClick={handleSubmit}>Shorten It!</button>
            </form>

            <article className={styles.LinkAdd__copyLink}>
                <h5>{links.original_link}</h5>
                <a href={links.full_short_link}>{links.full_short_link}</a>
                <button onClick={handleCopy}>{buttonText}</button>
            </article>
        </section>
    )
};

export default LinkAdd;