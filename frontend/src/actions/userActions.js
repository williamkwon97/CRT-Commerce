import { axios } from 'axios'
import {
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT
} from '../constants/userConstant'


export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({

            type: USER_LOGIN_REQUEST,
        } )

        const config = {
            headers: {
                'Content-Type': 'application/json'

            }
        }

        const {data} = await axios.post(
            '/api/users/login',
            {
                'username': email, 'password': password
            }
        )
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
        

    }
    catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}