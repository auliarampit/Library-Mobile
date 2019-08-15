import axios from 'axios'

export const register = (data) => {
    return {
        type: 'POST_REGISTER',
        payload: axios.post(`https://localhost:8081/login/post`, data)
    }
}