import React from 'react';
import s from "./styles.module.css";
import { photos } from "./photos.js";
import Card from "./components/Card.jsx";

const PhotoGallery = () => {

    return (
        <div className={s.gallery}>
            <div className={s.gallery__container}>
                {photos.map((photo, index) => <Card key={index} {...photo} />)}
            </div>
        </div>
    );
};

export default PhotoGallery;