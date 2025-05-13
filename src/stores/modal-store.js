import { makeAutoObservable } from 'mobx';

class ModalStore {
    isOpen = false;
    text = "";

    constructor() {
        makeAutoObservable(this);
    }

    openModal = (msg) => {
        this.text = msg;
        this.isOpen = true;
    };

    close = () => {
        this.text = "";
        this.isOpen = false;
    };
}

export default new ModalStore();