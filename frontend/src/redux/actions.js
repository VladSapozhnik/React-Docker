import {INCREMENT, DECREMENT, ASYNC_INCREMENT} from "./types";

export function increment () {
    return {
        type: INCREMENT
    }
}
export function decrement () {
    return {
        type: DECREMENT
    }
}

export function async_increment () {
    return {
        type: ASYNC_INCREMENT
    }
}