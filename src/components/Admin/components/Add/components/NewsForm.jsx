import React from 'react';
import axios from 'axios';
import s from "../styles.module.css";
import FormGroup from "./FormGroup.jsx";
import { useStores } from "../../../../../stores/root-store-context.js";
import { observer } from "mobx-react-lite";
import {apiNewsURL} from "../../../../../configs/constants.js";
import { useNavigate } from 'react-router-dom';

const NewsForm = observer(() => {
    const {
        news: {
            title,
            text,
            setTitle,
            setText,
            resetForm,
            setNews,
            news: existingNews
        }
    } = useStores();

    const navigate = useNavigate();

    const handleSubmit = async () => {
        const newsData = {
            title,
            text
        };

        try {
            await axios.post(apiNewsURL, newsData);
            setNews([...existingNews, newsData]);
            resetForm();
            navigate("/admin/news");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <FormGroup
                title="title"
                text="Заголовок"
                value={title}
                changeValue={setTitle}
            />
            <FormGroup
                type="textarea"
                title="text"
                text="Текст новости"
                value={text}
                changeValue={setText}
            />
            <button type="button" className={s.submitButton} onClick={handleSubmit}>
                Добавить новость
            </button>
        </>
    );
});

export default NewsForm;