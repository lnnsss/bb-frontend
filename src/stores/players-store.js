import { makeAutoObservable } from "mobx";

class PlayersStore {
    players = [
        {
            id: 0,
            name: "Данил",
            lastName: "Попов",
            number: "00",
            birthday: "18.01.2007",
            country: "Россия",
            position: "Легкий форвард",
            hight: 178,
            weight: 66,
            imageUrl: "https://img.infobasket.su/photo/318469.jpg"
        },
        {
            id: 1,
            name: "Раиль",
            lastName: "Сабиров",
            number: "6",
            birthday: "26.09.2004",
            country: "Россия",
            position: "Легкий форвард",
            hight: 170,
            weight: 55,
            imageUrl: "https://img.infobasket.su/photo/396271.jpg"
        },
        {
            id: 2,
            name: "Илья",
            lastName: "Сергеев",
            number: "8",
            birthday: "09.08.2007",
            country: "Россия",
            position: "Тяжелый форвард",
            hight: 192,
            weight: 76,
            imageUrl: "https://img.infobasket.su/photo/317459.jpg"
        },
        {
            id: 3,
            name: "Артур",
            lastName: "Хохрим",
            number: "9",
            birthday: "04.06.2005",
            country: "Россия",
            position: "Разыгрывающий",
            hight: 180,
            weight: 73,
            imageUrl: "https://files.infobasket.su/Pictures/244841.jpg"
        },
        {
            id: 4,
            name: "Никита",
            lastName: "Денисов",
            number: "10",
            birthday: "04.12.2004",
            country: "Россия",
            position: "Центровой",
            hight: 195,
            weight: 91,
            imageUrl: "https://files.infobasket.su/Pictures/244847.jpg"
        },
        {
            id: 5,
            name: "Евгений",
            lastName: "Семенов",
            number: "12",
            birthday: "16.05.2005",
            country: "Россия",
            position: "Разыгрывающий",
            hight: 175,
            weight: 63,
            imageUrl: "https://files.infobasket.su/Pictures/261332.jpg"
        },
        {
            id: 6,
            name: "Ярослав",
            lastName: "Щербаков",
            number: "15",
            birthday: "05.07.2006",
            country: "Россия",
            position: "Атакующий защитник",
            hight: 182,
            weight: 65,
            imageUrl: "https://files.infobasket.su/Pictures/255511.jpg"
        },
        {
            id: 7,
            name: "Данила",
            lastName: "Петров",
            number: "17",
            birthday: "02.02.2005",
            country: "Россия",
            position: "Легкий форвард",
            hight: 182,
            weight: 75,
            imageUrl: "https://files.infobasket.su/Pictures/264467.jpg"
        },
        {
            id: 8,
            name: "Амир",
            lastName: "Гарифуллин",
            number: "25",
            birthday: "25.08.2006",
            country: "Россия",
            position: "Легкий форвард",
            hight: 188,
            weight: 73,
            imageUrl: "https://img.infobasket.su/photo/317725.jpg"
        },
        {
            id: 9,
            name: "Руслан",
            lastName: "Абдуллаев",
            number: "34",
            birthday: "23.07.2007",
            country: "Россия",
            position: "Тяжелый форвард",
            hight: 195,
            weight: 87,
            imageUrl: "https://img.infobasket.su/photo/319477.jpg"
        },
        {
            id: 10,
            name: "Ильназ",
            lastName: "Сайфутдинов",
            number: "69",
            birthday: "22.10.2006",
            country: "Россия",
            position: "Атакующий защитник",
            hight: 180,
            weight: 72,
            imageUrl: "https://files.infobasket.su/Pictures/244834.jpg"
        },
        {
            id: 11,
            name: "Роман",
            lastName: "Нестеров",
            number: "71",
            birthday: "08.10.2006",
            country: "Россия",
            position: "Центровой",
            hight: 200,
            weight: 87,
            imageUrl: "https://img.infobasket.su/photo/317480.jpg"
        },
        {
            id: 12,
            name: "Никита",
            lastName: "Степанов",
            number: "77",
            birthday: "30.05.2006",
            country: "Россия",
            position: "Разыгрывающий",
            hight: 175,
            weight: 60,
            imageUrl: "https://files.infobasket.su/Pictures/257758.jpg"
        }
    ];

    constructor() {
        makeAutoObservable(this);
    }

    addPlayer = (newPlayer) => {
        this.players = [...this.players, newPlayer];
    }
}

export default new PlayersStore();