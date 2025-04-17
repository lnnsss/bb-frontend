import { makeAutoObservable } from "mobx";

class GamesStore {
    games = []

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

export default new GamesStore();