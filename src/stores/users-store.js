import { makeAutoObservable } from "mobx";

class UsersStore {
    users = [];

    constructor() {
        makeAutoObservable(this);
    }

    setUsers = (newUsers) => {
        this.users = newUsers;
    }
}

export default new UsersStore();