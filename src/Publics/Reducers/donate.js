const initialState = {
    donateList : [],
    isLoading: false,
    isRejected: false,
    isFulFilled: false
}

const borrow = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_BOOK_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'POST_BOOK_REJECTED':
            return {
                ...state,
                isLoading:false,
                isRejected: true
            }
        case 'POST_BOOK_FULFILLED':
            state.donateList.push(action.payload.data)
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
            }


            default:
                return state
    }
}

export default borrow