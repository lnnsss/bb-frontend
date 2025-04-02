import { makeAutoObservable } from "mobx";

class UsersStore {
    users = [
        {
            "id": 1,
            "name": "Иван",
            "lastName": "Петров",
            "mail": "ivan.petrov@example.com"
        },
        {
            "id": 2,
            "name": "Анна",
            "lastName": "Сидорова",
            "mail": "anna.sidorova@test.org"
        },
        {
            "id": 3,
            "name": "Сергей",
            "lastName": "Иванов",
            "mail": "sergey.i@mail.ru"
        },
        {
            "id": 4,
            "name": "Елена",
            "lastName": "Кузнецова",
            "mail": "elena.kuznetsova@gmail.com"
        },
        {
            "id": 5,
            "name": "Дмитрий",
            "lastName": "Смирнов",
            "mail": "d.smirnov88@yandex.ru"
        },
        {
            "id": 6,
            "name": "Ольга",
            "lastName": "Васильева",
            "mail": "vasilyeva.o@example.net"
        },
        {
            "id": 7,
            "name": "Alex",
            "lastName": "Johnson",
            "mail": "alex.j@sample.com"
        }
    ];

    constructor() {
        makeAutoObservable(this);
    }
}

export default new UsersStore();