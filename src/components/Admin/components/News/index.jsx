import React, { useEffect } from 'react';
import s from "./styles.module.css";
import { useStores } from "../../../../stores/root-store-context";
import NewsCard from "./components/Card.jsx";
import Header from "./components/Header";
import axios from "axios";
import { apiNewsURL } from "../../../../configs/constants";
import { observer } from "mobx-react-lite";

const News = observer(() => {
    const {
        news: { news, setNews }
    } = useStores();

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(apiNewsURL);
                setNews(response.data.content);
            } catch (err) {
                console.error(err);
            }
        };
        fetchNews();
    }, []);

    return (
        <section className={s.news}>
            <div className={`__container ${s.news__container}`}>
                <Header />

                <div className={s.news__grid}>
                    {news && news.length > 0 ? (
                        news.map(item => <NewsCard key={item.id} {...item} />)
                    ) : (
                        <p className={s.news__empty}>Новости загружаются или отсутствуют.</p>
                    )}
                </div>
            </div>
        </section>
    );
});

export default News;