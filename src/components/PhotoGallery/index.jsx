import React from 'react';
import s from "./styles.module.css";

const photos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg"];

const PhotoGallery = () => {
    return (
        <div className={s.gallery}>
            {photos.map((photo, index) => (
                <div
                    key={index}
                    className={s.photoItem}
                    aria-label={`Gallery image ${index + 1}`}
                >
                    <img
                        src={`/gallery/${photo}`}
                        alt={`Gallery image ${index + 1}`}
                        className={s.galleryImage}
                        loading="lazy"
                    />
                </div>
            ))}
        </div>
    );
};

export default PhotoGallery;