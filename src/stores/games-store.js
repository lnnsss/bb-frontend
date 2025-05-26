import { makeAutoObservable } from "mobx";

class GamesStore {
    games = [];
    deletedGames = [];

    ticketsMap = {};

    constructor() {
        makeAutoObservable(this);
    }

    addGame = (newGame) => {
        this.games = [...this.games, newGame];
        if (this.ticketsMap[newGame.id] === undefined) {
            this.ticketsMap[newGame.id] = 100;
        }
    };

    setGames = (newGames) => {
        this.games = newGames;
        newGames.forEach(game => {
            if (this.ticketsMap[game.id] === undefined) {
                this.ticketsMap[game.id] = 100;
            }
        });
    };

    setDeletedGames = (newGames) => {
        this.deletedGames = newGames;
    };

    decrementTickets = (id) => {
        if (this.ticketsMap[id] > 0) {
            this.ticketsMap[id] -= 1;
        }
    };

    getTicketsLeft = (id) => {
        return this.ticketsMap[id] ?? 0;
    };
}

export default new GamesStore();
