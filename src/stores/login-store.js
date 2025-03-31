import {makeAutoObservable} from "mobx";

class LoginStore {
    formData = {
        email: '',
        password: '',
    };

    constructor() {
        makeAutoObservable(this);
    }

    updateField = (field, value) => {
        this.formData = { ...this.formData, [field]: value };
    }
}

export default new LoginStore();