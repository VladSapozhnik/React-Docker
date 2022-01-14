export function createStore (rootReducer, initialState) {
    //reducer принимаем как параметр rootReducer
    //initialState начальное состояние, которое мы получаем
    let state = rootReducer(initialState, {type: '__INIT__'})
    const subscribe = []
    return {
        //action === {type: 'increment'}
        //когда прилетает action, нужно изменить state
        //говорит нужно, что-то изменить
        dispatch(action) {
            //state прошлое состояние
            //получаем объект, мы должны изменить прошлое состояние поэтому пишем state =
            state = rootReducer(state, action)
            subscribe.forEach(sub => sub())
        },
        //говорит, что все слушатели которые слушают должны что-то поменять
        subscribe(callback) {
            subscribe.push(callback)
        },
        getState() {
            return state
        }
    }
}