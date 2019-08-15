const initialState = {
    borrow: [],
    isLoading: false,
    isFulFilled: false,
    isRejected: false
};

const borrow = (state = initialState, action) => {
    switch (action.type) {
            case 'POST_PINJAM_PENDING':
                return{
                ...state,
                isLoading: true,
                isFulFilled: false,
                isRejected: false,
            };
            case 'POST_PINJAM_REJECTED':
                return{
                    ...state,
                    isLoading: false,
                    isRejected: true,
            };
            case 'POST_PINJAM_FULFILLED':
                return{
                    ...state,
                    isLoading: false,
                    isFulFilled: true,
                    listPinjam: action.payload.data,
                }
                default: 
                    return state
            }
        }
export default borrow
