import axios from "axios";

export const login = (data) => {
    return {
        type: 'POST_LOGIN',
        payload: axios.post(`https://library-backend-ar.herokuapp.com/login/login`,data)
    }
}
