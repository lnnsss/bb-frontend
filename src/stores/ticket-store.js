import { makeAutoObservable } from "mobx";

class TicketStore {
    games = [
        {
            id: 1,
            opponent: 'Лицей №2',
            dateTime: '2024-10-15T19:00:00',
            venue: 'АПТ',
            imageUrl: 'https://reg.infobasket.su/Widget/GetTeamLogo/28642?compId=88649'
        },
        {
            id: 2,
            opponent: 'БК Шильна',
            dateTime: '2024-10-22T20:00:00',
            venue: 'АПТ',
            imageUrl: 'https://reg.infobasket.su/Widget/GetTeamLogo/28678?compId=88649'
        }
    ]

    constructor() {
        makeAutoObservable(this);
    }

    addGame = (newGame) => {
        this.games = [...this.games, newGame];
    }
    setGames = (newGames) => {
        this.games = newGames
    }
}

export default new TicketStore();