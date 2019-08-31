import axios from 'axios'

export const register = (data) => {
    return {
        type: 'POST_REGISTER',
        payload: axios.post(`https://192.168.6.199:8082/login/post`, data)
    }
}