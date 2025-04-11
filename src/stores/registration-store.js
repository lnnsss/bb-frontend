import { makeAutoObservable } from "mobx";

const initialFormData = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

class RegistrationStore {
    formData = { ...initialFormData };

    constructor() {
        makeAutoObservable(this);
    }

    updateField = (field, value) => {
        if (field in this.formData) {
            this.formData = { ...this.formData, [field]: value };
        } else {
            console.warn(`Attempted to update non-existent field: ${field}`);
        }
    }

    clearForm = () => {
        this.formData = { ...initialFormData };
    }
}

export default new RegistrationStore();