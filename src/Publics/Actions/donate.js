import axios from 'axios'

export const donateBook = (data) => {
    return {
        type: 'POST_BOOK',
        payload: axios.post(`https://library-backend-ar.herokuapp.com/nameBook`, data)
    }
}