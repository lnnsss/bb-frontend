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
import newsStore from "./news-store.js";
import ticketStore from "./ticket-store.js";
import modalStore from "./modal-store.js";

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
    news = newsStore
    ticket = ticketStore
    modal = modalStore
}

export default RootStore;