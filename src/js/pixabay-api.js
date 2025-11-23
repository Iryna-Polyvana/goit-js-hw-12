import axios from "axios";

export const getImagesByQuery = (query) => {
    const requestParams = new URLSearchParams({
        key: '53358715-8970766531ccc29f18899e248',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });
    return axios
        .get(`https://pixabay.com/api/?${requestParams}`)
        .then(response => response.data.hits);
};



