import { LOGIN, LOGOUT } from '../actions/auth'
 function auth(state={isAuth:false, user: 'William'}, action) {
	switch(action.type){
		case LOGIN:
			return {...state, isAuth: true}
		case LOGOUT :
			return {...state, isAuth: false}
		default:
			return state
	}
}
export default auth