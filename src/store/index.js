import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import counter from './reducers/counter'
import thunk from 'redux-thunk'

const reducers = combineReducers({
	counter
})

const reduxDevtools = window.devToolsExtension? window.devToolsExtension(): () => {}

const store = createStore(reducers,compose(
	applyMiddleware(thunk),
	reduxDevtools
))


export default store