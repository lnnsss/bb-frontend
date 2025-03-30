import tokenStore from "./token-store.js";
import headerStore from "./header-store.js";

class RootStore {
    token = tokenStore
    header = headerStore
}

export default RootStore;