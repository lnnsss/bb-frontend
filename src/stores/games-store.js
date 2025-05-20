import { makeAutoObservable } from "mobx";

class GamesStore {
    games = []
    deletedGames = []

    constructor() {
        makeAutoObservable(this);
    }

    addGame = (newGame) => {
        this.games = [...this.games, newGame];
    }
    setGames = (newGames) => {
        this.games = newGames
    }
    setDeletedGames = (newGames) => {
        this.deletedGames = newGames
    }
}

export default new GamesStore();