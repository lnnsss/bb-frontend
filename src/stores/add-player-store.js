import {makeAutoObservable} from 'mobx';

class AddPlayerStore {
    name = '';
    lastName = '';
    number = '';
    position = '';
    birthday = '';
    country = '';
    height = '';
    weight = '';
    imageUrl = '';

    constructor() {
        makeAutoObservable(this);
    }

    setName = (value) => {
        this.name = value;
    }

    setLastName = (value) => {
        this.lastName = value;
    }

    setNumber = (value) => {
        this.number = value;
    }

    setPosition = (value) => {
        this.position = value;
    }

    setBirthday = (value) => {
        this.birthday = value;
    }

    setCountry = (value) => {
        this.country = value;
    }

    setHeight = (value) => {
        this.height = value;
    }

    setWeight = (value) => {
        this.weight = value;
    }

    setImageUrl = (value) => {
        this.imageUrl = value;
    }

    resetForm = () => {
        this.name = '';
        this.lastName = '';
        this.number = '';
        this.position = '';
        this.birthday = '';
        this.country = '';
        this.height = '';
        this.weight = '';
        this.imageUrl = '';
    }
}

export default new AddPlayerStore();