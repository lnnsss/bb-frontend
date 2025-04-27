import { makeAutoObservable } from 'mobx';

class AddGameStore {
    opponent = '';
    date = '';
    time = '';
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

    setTime = (value) => {
        this.time = value;
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
        this.time = '';
        this.venue = '';
        this.imageUrl = '';
    }
}

export default new AddGameStore();
