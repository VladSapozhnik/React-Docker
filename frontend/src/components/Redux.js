
import React, {useState} from "react";
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {rootReducer} from "../redux/rootReducer";
import {async_increment, changeTheme, decrement, increment} from "../redux/actions";

function Redux () {


/*    window.store = store*/


    /*const [count, setCount] = useState(1);*/


    // const [value, setValue] = useState(0)
    // const store = createStore(rootReducer, value, applyMiddleware(thunk, logger))
    const store = createStore(rootReducer, applyMiddleware(thunk, logger))


    store.subscribe(() => {
        const state = store.getState()
        // setValue(state.counter)
    })

    function inc() {
        store.dispatch(increment())
    }

    function decr () {
        store.dispatch(decrement())
    }

    function theme () {
        store.dispatch(changeTheme())
    }



/*    function logger (state) {
        return function (next) {
            return function (action) {
                console.log('Prev State', state.getState())
                console.log('State', state)
                console.log('Action', action)
                return next(action)
            }
        }
    }*/
    return (
        <div>
            <div className="btn" onClick={inc}>increment</div>
            <div className="btn" onClick={decr}>decrement</div>
            <div className="btn" onClick={theme}>Theme</div>
            <div className="btn" onClick={() => store.dispatch(async_increment())}>ASYNC</div>
        </div>
    )
}
export default Redux
