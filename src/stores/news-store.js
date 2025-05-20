import { makeAutoObservable } from "mobx";

class NewsStore {
    news = []
    deletedNews = []

    title = '';
    text = '';

    constructor() {
        makeAutoObservable(this);
    }

    setNews = (newNews) => {
        this.news = newNews;
    }

    setDeletedNews = (newNews) => {
        this.deletedNews = newNews;
    }

    setTitle = (value) => {
        this.title = value;
    }

    setText = (value) => {
        this.text = value;
    }

    resetForm = () => {
        this.title = '';
        this.text = '';
    }
}

export default new NewsStore();
