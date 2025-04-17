import { makeAutoObservable } from "mobx";

class UserStore {
    id = ''
    name = '';
    lastName = '';
    email = '';

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