import React from 'react';
import s from "../styles.module.css";
import { observer } from 'mobx-react-lite';
import axios from 'axios';
import {apiNewsURL} from "../../../configs/constants.js";
import {useStores} from "../../../stores/root-store-context.js";

const NewsCard = observer(({ title, text }) => {
    const {
        news: { news, setNews, deletedNews, setDeletedNews }
    } = useStores();

    const handleSubmit = async () => {
        try {
            await axios.post(apiNewsURL, { title, text });

            const filteredNews = deletedNews.filter(
                item => !(item.title === title && item.text === text)
            );

            setNews([...news, {title, text}]);
            setDeletedNews(filteredNews);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <article className={s.newsCard}>
            <div className={s.newsCard__content}>
                <h3 className={s.newsCard__title}>{title}</h3>
                <p className={s.newsCard__text}>{text}</p>

                <div className={s.newsCard__actions}>
                    <button
                        onClick={handleSubmit}
                        className={`${s.newsCard__btn} ${s.delBtn}`}>
                        Восстановить
                    </button>
                </div>
            </div>
        </article>
    );
});

export default NewsCard;
