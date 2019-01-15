import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers: {
        Authorization:  'Client-ID f6482e8948cad49508bc1fcf1dd1c295fc4963f4e1a64bc05c5ea31ec47708f4'
    }    
});