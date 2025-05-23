import React, { useState } from 'react';
import s from "../styles.module.css";
import { observer } from 'mobx-react-lite';
import axios from 'axios';
import { useStores } from "../../../../../stores/root-store-context.js";
import { apiNewsURL } from "../../../../../configs/constants.js";

const NewsCard = observer(({ id, title, text }) => {
    const {
        news: { news, setNews, deletedNews, setDeletedNews }
    } = useStores();

    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedText, setEditedText] = useState(text);

    const handleDelete = async () => {
        try {
            await axios.delete(`${apiNewsURL}/${id}`);
            setNews(news.filter(item => item.id !== id));
            setDeletedNews([...deletedNews, { title, text }]);
        } catch (err) {
            console.error('Ошибка при удалении новости:', err);
        }
    };

    const handleUpdate = async () => {
        try {
            const updatedNews = { title: editedTitle, text: editedText };
            const response = await axios.put(`${apiNewsURL}/${id}`, updatedNews);
            setNews(news.map(item => item.id === id ? response.data.content : item));
            setEditModalOpen(false);
        } catch (err) {
            console.error('Ошибка при обновлении новости:', err);
        }
    };

    return (
        <>
            <article className={s.newsCard}>
                <div className={s.newsCard__content}>
                    <h3 className={s.newsCard__title}>{title}</h3>
                    <p className={s.newsCard__text}>{text}</p>

                    <div className={s.newsCard__actions}>
                        <button onClick={() => setEditModalOpen(true)} className={`${s.newsCard__btn} ${s.editBtn}`}>
                            Редактировать
                        </button>
                        <button onClick={handleDelete} className={`${s.newsCard__btn} ${s.delBtn}`}>
                            Удалить
                        </button>
                    </div>
                </div>
            </article>

            {isEditModalOpen && (
                <div className={s.modalOverlay} onClick={() => setEditModalOpen(false)}>
                    <div className={s.modalContent} onClick={e => e.stopPropagation()}>
                        <h3 className={s.modalTitle}>Редактировать новость</h3>
                        <input
                            type="text"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            className={s.modalInput}
                            placeholder="Заголовок"
                        />
                        <textarea
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                            className={s.modalTextarea}
                            placeholder="Текст"
                        />
                        <div className={s.modalActions}>
                            <button className={s.modalSaveBtn} onClick={handleUpdate}>Сохранить</button>
                            <button className={s.modalCancelBtn} onClick={() => setEditModalOpen(false)}>Отмена</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
});

export default NewsCard;
