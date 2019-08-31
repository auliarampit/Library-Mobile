import axios from 'axios'

export const donateBook = (data) => {
    return {
        type: 'POST_BOOK',
        payload: axios.post(`https://192.168.6.199:8082/nameBook`, data)
    }
}