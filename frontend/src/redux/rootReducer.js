import {CHANGE_THEME, DECREMENT, INCREMENT} from "./types";
import {combineReducers} from "redux";

// export function rootReducer(state, actions) {
//     if (actions.type === INCREMENT) {
//         return state + 1
//     } else if (actions.type === DECREMENT) {
//         return state - 1
//     } /*else if (actions.type === ASYNC_INCREMENT) {
//        /!* setTimeout(() => {
//             return state + 1
//         }, 2000)*!/
//         return state + 1
//     }*/
//
//     return state
// }
// function counterReducer(state = 42, action) {
//     if (action.type === INCREMENT) {
//         return state + 1
//     } else if (action.type === DECREMENT) {
//         return state - 1
//     }
//
//     return state
// }

const counterReducer = (state=42,action)=>{
    switch(action.type) {
        case INCREMENT:
            return state+1;
            break;
        case DECREMENT:
            return state-1;
            break;
        default:
            return state;
    }
};

const initialThemeState = {
    value: 'light'
}


function themeReducer(state = initialThemeState, action) {
    switch (action.type) {
        case CHANGE_THEME:
            // return {...state, value: 'dark'}
            return {...state, value: action.payload}
        default: return state
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})