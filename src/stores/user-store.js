import { makeAutoObservable } from "mobx";

class UserStore {
    id = '1'
    name = 'Иван';
    lastName = 'Петров';
    email = 'ivan.petrov@example.com';

    constructor() {
        makeAutoObservable(this);
    }

    setId = (newId) => {
        this.id = newId;
    }
    setName = (newName) => {
        this.name = newName;
    }
    setLastName = (newLastName) => {
        this.lastName = newLastName;
    }
    setEmail = (newEmail) => {
        this.email = newEmail;
    }
}

export default new UserStore();