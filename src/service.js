import axios from "axios";

const instance = axios.create({
    baseURL: 'https://formar2024.uc.r.appspot.com'
});


export const createUser = (data) => {
    instance.post('/', data)
}

export default instance 

