import {makeAutoObservable} from 'mobx';

class AddGameStore {
    opponent = '';
    date = '';
    venue = '';
    imageUrl = '';

    constructor() {
        makeAutoObservable(this);
    }

    setOpponent = (value) => {
        this.opponent = value;
    }

    setDate = (value) => {
        this.date = value;
    }

    setVenue = (value) => {
        this.venue = value;
    }

    setImageUrl = (value) => {
        this.imageUrl = value;
    }

    resetForm = () => {
        this.opponent = '';
        this.date = '';
        this.venue = '';
        this.imageUrl = '';
    }
}

export default new AddGameStore();