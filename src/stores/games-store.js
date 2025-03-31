import { makeAutoObservable } from "mobx";

class GamesStore {
    games = [
        {
            id: 1,
            opponent: "Лицей №2",
            date: "2024-10-15 19:00",
            imageUrl: "https://reg.infobasket.su/Widget/GetTeamLogo/28642?compId=88649",
            venue: "АПТ"
        },
        {
            id: 2,
            opponent: "БК Шильна",
            date: "2024-10-22 20:00",
            imageUrl: "https://reg.infobasket.su/Widget/GetTeamLogo/28678?compId=88649",
            venue: "АПТ"
        },
        {
            id: 3,
            opponent: "Шторм Лицей-10 ДЮБЛ",
            date: "2024-11-05 19:30",
            imageUrl: "https://reg.infobasket.su/Widget/GetTeamLogo/40485?compId=88649",
            venue: "АПТ"
        },
        {
            id: 4,
            opponent: "Белая Стрела",
            date: "2024-11-12 19:00",
            imageUrl: "https://reg.infobasket.su/Widget/GetTeamLogo/40486?compId=88649",
            venue: "АПТ"
        },
        {
            id: 5,
            opponent: "БК ФОРМАТ",
            date: "2024-11-26 20:30",
            imageUrl: "https://reg.infobasket.su/Widget/GetTeamLogo/8667?compId=73582",
            venue: "АПТ"
        },
        {
            id: 6,
            opponent: "БК ЛНТ",
            date: "2024-12-03 19:00",
            imageUrl: "https://reg.infobasket.su/Widget/GetTeamLogo/19169?compId=73582",
            venue: "АПТ"
        }
    ]

    constructor() {
        makeAutoObservable(this);
    }

    addGame = (newGame) => {
        this.games = [...this.games, newGame];
    }
}

export default new GamesStore();