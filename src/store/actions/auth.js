export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export function login(log) {
    return {
        type: LOGIN
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}
// export function addGunAsync() {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(addGun())
//         },2000)
//     }
// }