import axios from 'axios'

export const getSites = async () => {
    try {
        const response = await axios.get('http://localhost:3100/sites')
        return response
    } catch(e) {
        console.log(e)
    }
}

export const getSite = async (id: number) => {
    try {
        const response = await axios.get(`http://localhost:3100/sites/${id}`)
        return response
    } catch(e) {
        console.log(e)
    }
}

export const getTests = async () => {
    try {
        const response = await axios.get('http://localhost:3100/tests')
        return response
    } catch(e) {
        console.log(e)
    }
}

export const getTest = async (id: number) => {
    try {
        const response = await axios.get(`http://localhost:3100/sites/${id}`)
        return response
    } catch(e) {
        console.log(e)
    }
}