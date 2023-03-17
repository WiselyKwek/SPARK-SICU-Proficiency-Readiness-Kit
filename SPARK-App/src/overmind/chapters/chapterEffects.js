import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL
const USER_ID = import.meta.env.VITE_USER_ID

export const getAllChapters = async () => {
    const API_URL = BASE_URL+`/chapters`
    try {
        const response = await axios.get(API_URL)
        if (response.status === 200) {
            const foundChapters = response.data
            return foundChapters
        }
    } catch (err) { 
        console.log("HERE ERROR: ", err)
        if (err.response.status === 400) {
            alert("Request Error")

        }
        if (err.response.status === 500) {
            alert("Server Error")
        }
        throw err
    }
};