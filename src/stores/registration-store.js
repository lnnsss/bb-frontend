import {makeAutoObservable} from "mobx";

class RegistrationStore {
    formData = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    constructor() {
        makeAutoObservable(this);
    }

    updateField = (field, value) => {
        this.formData = { ...this.formData, [field]: value };
    }
}

export default new RegistrationStore();