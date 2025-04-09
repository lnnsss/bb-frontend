import React from 'react';
import s from "../styles.module.css";

const Card = ({image, location, date}) => {

    const formatDate = (dateString) => {
        if (!dateString) return '';
        try {
            const date = new Date(dateString + 'T00:00:00');
            return date.toLocaleDateString('ru-RU', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            });
        } catch (e) {
            console.error("Error formatting date:", dateString, e);
            return dateString;
        }
    };

    return (
        <div className={s.photoItem}>
            <img
                src={`/gallery/${image}`}
                alt={`Фото из ${location}, дата: ${formatDate(date)}`}
                className={s.galleryImage}
                loading="lazy"
            />
            <div className={s.photoInfo}>
                <span className={s.location}>{location}</span>
                <span className={s.date}>{formatDate(date)}</span>
            </div>
        </div>
    );
};

export default Card;