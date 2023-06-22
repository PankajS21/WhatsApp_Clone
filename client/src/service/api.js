import axios from 'axios';

const url = 'http://localhost:4000';

export const adduser = async (data) => {
    try {
        await axios.post(url, data)
    } catch (error) {
        console.log(error);
    }
}