import tokenStore from "./token-store.js";
import headerStore from "./header-store.js";
import registrationStore from "./registration-store.js";
import loginStore from "./login-store.js";
import playersStore from "./players-store.js";
import gamesStore from "./games-store.js";
import usersStore from "./users-store.js";
import userStore from "./user-store.js";
import addPlayerStore from "./add-player-store.js";
import addGameStore from "./add-game-store.js";
import accountStore from "./account-store.js";

class RootStore {
    token = tokenStore
    header = headerStore
    registration = registrationStore
    login = loginStore
    players = playersStore
    games = gamesStore
    users = usersStore
    user = userStore
    addPlayer = addPlayerStore
    addGame = addGameStore
    account = accountStore
}

export default RootStore;