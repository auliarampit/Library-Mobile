import axios from "axios";

export const login = (data) => {
    return {
        type: 'POST_LOGIN',
        payload: axios.post(`https://192.168.6.199:8082/login/login`,data)
    }
}
