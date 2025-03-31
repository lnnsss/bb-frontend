import tokenStore from "./token-store.js";
import headerStore from "./header-store.js";
import registrationStore from "./registration-store.js";
import loginStore from "./login-store.js";
import playersStore from "./players-store.js";

class RootStore {
    token = tokenStore
    header = headerStore
    registration = registrationStore
    login = loginStore
    players = playersStore
}

export default RootStore;