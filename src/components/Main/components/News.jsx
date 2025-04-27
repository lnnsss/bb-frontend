import React, {useEffect} from 'react';
import s from "../styles.module.css"
import {observer} from "mobx-react-lite";
import {useStores} from "../../../stores/root-store-context.js";
import axios from "axios";
import {apiNewsURL} from "../../../configs/constants.js";

const News = observer(() => {
    const {
        news: { news, setNews }
    } = useStores()

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(apiNewsURL)

                setNews(response.data.content);

            } catch (err) {
                console.error(err)
            }
        }
        fetchNews()
    }, [])

    return (
        <section className={s.news}>
            <div className={`__container ${s.news__container}`}>
                <h2 className={s.news__sectionTitle}>Последние новости</h2>

                <div className={s.news__list}>
                    {news.map((n) => <NewsBlock key={n.id} {...n} />)}
                </div>
            </div>
        </section>
    );
});

const NewsBlock = ({title, text}) => {
    return (
        <article className={s.news__item}>
            <h3 className={s.news__itemTitle}>{title}</h3>
            <p className={s.news__itemText}>{text}</p>
        </article>
    )
}

export default News;