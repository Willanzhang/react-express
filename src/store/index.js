import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import counter from './reducers/counter'
import auth from './reducers/auth'
import thunk from 'redux-thunk'

const reducers = combineReducers({
	counter,
	auth
})

const reduxDevtools = window.devToolsExtension? window.devToolsExtension(): () => {}

const store = createStore(reducers,compose(
	applyMiddleware(thunk),
	reduxDevtools
))


export default store