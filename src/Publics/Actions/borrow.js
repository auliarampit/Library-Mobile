import axios from 'axios'

export const postPinjam = (data) => {
    console.log(data);
    
    return {
        type: 'POST_PINJAM',
        payload: axios.post(`https://library-backend-ar.herokuapp.com/Pinjam/post`,data),
    }
}

export const patchPinjam = ( idBook) => {
    console.log("bhvgvg       ",idBook);

    return {
        type: 'UPDATE_PINJAM',
        payload: axios.patch(`https://library-backend-ar.herokuapp.com/Pinjam/${idBook}`,)
    }
}