import axios from "axios";

export const getImagesByQuery = async (query, page) => {
    const requestParams = new URLSearchParams({
        key: '53358715-8970766531ccc29f18899e248',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        page: page,
        per_page: 15,
        safesearch: true,
    });

    try {
        const response = await axios.get(`https://pixabay.com/api/?${requestParams}`);
        const data = response.data;
        return data;
    } catch (error) {
        console.log(error);
    }
};


