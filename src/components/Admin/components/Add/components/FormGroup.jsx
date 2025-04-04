import React from 'react';
import s from "../styles.module.css";
import {observer} from "mobx-react-lite";

const FormGroup = observer(({type="text", title, text, value, changeValue, required=true}) => {
    const handleChangeValue = (e) => {
        changeValue(e.target.value);
    }

    return (
        <div className={s.formGroup}>
            <label htmlFor={title} className={s.label}>{text}:</label>
            <input type={type} value={value} id={title} name={title} onChange={handleChangeValue} className={s.input} required={required} />
        </div>
    );
});

export default FormGroup;