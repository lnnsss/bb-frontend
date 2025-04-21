import React from 'react';
import s from "../styles.module.css";
import {observer} from "mobx-react-lite";
import {useStores} from "../../../stores/root-store-context.js";

const FormGroup = observer(({type = "text", name, text}) => {
    const {
        registration: { formData, updateField }
    } = useStores()
    const handleChange = (e) => {
        updateField(name, e.target.value);
    }

    return (
        <div className={s.form__group}>
            <label htmlFor={name}>{text}:</label>
            <input type={type} id={name} name={name} value={formData[name]} onChange={handleChange} required/>
        </div>
    );
});

export default FormGroup;
