import axios from 'axios'

export const getBook = () => {
    return {
        type: 'GET_BOOK',
        payload: axios.get(`https://library-backend-ar.herokuapp.com/nameBook`)
    }
}

export const getBookById = (idBook) => {
    return {
        type: 'GET_BOOK_ID',
        payload: axios.get(`https://library-backend-ar.herokuapp.com/nameBook${idBook}`)
    }
}