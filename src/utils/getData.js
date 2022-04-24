import axios from 'axios';

const url_api = process.env.API;

const getData = async () => {
    try {
        const response = await axios.get(url_api);
        const data = response.data;
        return data;
    } catch (err) {
        console.log(err);
    }
}

export default getData;