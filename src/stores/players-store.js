import { makeAutoObservable } from "mobx";

class PlayersStore {
    players = [];

    constructor() {
        makeAutoObservable(this);
    }

    addPlayer = (newPlayer) => {
        this.players = [...this.players, newPlayer];
    }
    setPlayers = (newPlayers) => {
        this.players = newPlayers
    }
}

export default new PlayersStore();