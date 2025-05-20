import { makeAutoObservable } from "mobx";

class PlayersStore {
    players = [];
    deletedPlayers = [];

    constructor() {
        makeAutoObservable(this);
    }

    addPlayer = (newPlayer) => {
        this.players = [...this.players, newPlayer];
    }
    setPlayers = (newPlayers) => {
        this.players = newPlayers
    }
    setDeletedPlayers = (newPlayers) => {
        this.deletedPlayers = newPlayers
    }
}

export default new PlayersStore();