import {ASYNC_INCREMENT, DECREMENT, INCREMENT} from "./types";

export function rootReducer(state, actions) {
    if (actions.type === INCREMENT) {
        return state + 1
    } else if (actions.type === DECREMENT) {
        return state - 1
    } else if (actions.type === ASYNC_INCREMENT) {
        setTimeout(() => {
            return state + 1
        }, 2000)
    }

    return state
}