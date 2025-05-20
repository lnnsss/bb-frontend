import { makeAutoObservable } from 'mobx';

class DeletedStore {
    mode = "player";

    constructor() {
        makeAutoObservable(this);
    }

    setMode = (newMode) => {
        this.mode = newMode;
    };
}

export default new DeletedStore();