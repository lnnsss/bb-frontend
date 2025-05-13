import React from 'react';
import s from "./styles.module.css"
import {useStores} from "../../stores/root-store-context.js";
import {observer} from "mobx-react-lite";

const Modal = observer(() => {
    const {
        modal: { isOpen, close, text }
    } = useStores();

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            close();
        }
    };

    return (
        <div className={s.overlay} onClick={handleOverlayClick}>
            <div className={s.modal}>
                <p className={s.text}>{text}</p>
                <button className={s.button} onClick={close}>OK</button>
            </div>
        </div>
    );
});

export default Modal;