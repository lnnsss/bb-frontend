import { makeAutoObservable } from "mobx";

class UserStore {
    id = '1'
    name = 'Иван';
    lastName = 'Петров';
    mail = 'ivan.petrov@example.com';

    constructor() {
        makeAutoObservable(this);
    }
}

export default new UserStore();