import axios from 'axios'

export const getBook = () => {
    return {
        type: 'GET_BOOK',
        payload: axios.get(`https://192.168.6.199:8082/nameBook`)
    }
}

export const getBookById = (idBook) => {
    return {
        type: 'GET_BOOK_ID',
        payload: axios.get(`https://192.168.6.199:8082/nameBook${idBook}`)
    }
}