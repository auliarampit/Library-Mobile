const initialState = {
    bookList : [],
    selectedBook: [],
    isLoading: false,
    isRejected: false,
    isFulFilled: false
}

const book = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BOOK_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'GET_BOOK_REJECTED':
            return {
                ...state,
                isLoading:false,
                isRejected: true
            }
        case 'GET_BOOK_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                bookList: action.payload.data
            }

            case 'GET_BOOK_ID_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'GET_BOOK_ID_REJECTED':
            return {
                ...state,
                isLoading:false,
                isRejected: true
            }
        case 'GET_BOOK_ID_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                selectedBook: action.payload.data
            }


            default:
                return state
    }
}

export default book