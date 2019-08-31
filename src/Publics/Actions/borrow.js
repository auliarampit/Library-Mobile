import axios from 'axios'

export const postPinjam = (data) => {
    console.log(data);
    
    return {
        type: 'POST_PINJAM',
        payload: axios.post(`https://192.168.6.199:8082/Pinjam/post`,data),
    }
}

export const patchPinjam = ( idBook) => {
    console.log("bhvgvg       ",idBook);

    return {
        type: 'UPDATE_PINJAM',
        payload: axios.patch(`https://192.168.6.199:8082/Pinjam/${idBook}`,)
    }
}