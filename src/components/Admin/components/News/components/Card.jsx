// NewsCard.jsx
import React from 'react';
import s from "../styles.module.css";
import { observer } from 'mobx-react-lite';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useStores} from "../../../../../stores/root-store-context.js";
import {apiNewsURL} from "../../../../../configs/constants.js";

const NewsCard = observer(({ id, title, text }) => {
    const {
        news: { newsItems, setNewsItems }
    } = useStores();

    const handleDelete = async () => {
        try {
            await axios.delete(`${apiNewsURL}/${id}`);
            setNewsItems(newsItems.filter(item => item.id !== id));
        } catch(err) {
            console.error('Ошибка при удалении новости:', err);
        }
    };

    return (
        <article className={s.newsCard}>
            <div className={s.newsCard__content}>
                <h3 className={s.newsCard__title}>{title}</h3>
                <p className={s.newsCard__text}>{text}</p>

                <div className={s.newsCard__actions}>
                    <Link
                        to={`/admin/news/edit/${id}`}
                        className={`${s.newsCard__btn} ${s.editBtn}`}>
                        Редактировать
                    </Link>
                    <button
                        onClick={handleDelete}
                        className={`${s.newsCard__btn} ${s.delBtn}`}>
                        Удалить
                    </button>
                </div>
            </div>
        </article>
    );
});

export default NewsCard;