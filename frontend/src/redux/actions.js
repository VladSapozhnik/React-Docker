import {INCREMENT, DECREMENT, CHANGE_THEME, CREATE_POST} from "./types";

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

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}

export function async_increment () {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(increment())
        }, 2000)

    }
}

export function createPost(post) {
    return {
        type:CREATE_POST,
        payload: post
    }
}