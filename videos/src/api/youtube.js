import axios from 'axios';
const KEY = 'AIzaSyD641peZzHcPsQL5X-MkiS2jGsV_9eMX28';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})