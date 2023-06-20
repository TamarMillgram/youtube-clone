import { combineReducers, legacy_createStore as createStore } from 'redux'

import { videoReducer } from './video.reducer.js'

const rootReducer = combineReducers({
    videoModule: videoReducer
})

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
export const store = createStore(rootReducer, middleware)

// For debug
store.subscribe(() => {
    // console.log('Current state is:', store.getState())
})

// setInterval(() => {
//     store.dispatch({ type: 'INCREMENT' })
// }, 1000)
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })

