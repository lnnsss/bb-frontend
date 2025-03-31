import React from 'react';
import s from "../styles.module.css";

const BGBlock = () => {
    return (
        <div className={s.bgBlock}>
            <video
                className={s.bgBlock__video}
                src="/bg.mp4"
                autoPlay
                loop
                muted
            />
            <div className={s.bgBlock__overlay}></div>
            <div className={s.bgBlock__content}>
                <h1>Баскетбольная команда АПТ</h1>
            </div>
        </div>
    );
};

export default BGBlock;