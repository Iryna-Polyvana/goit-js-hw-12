import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";
import iziToast from "izitoast";


const searchForm = document.querySelector('.form');

const onSubmitForm = event => {
    event.preventDefault();

    const { target: form } = event;
    const query = form.elements['search-text'].value.trim();
    if (query === '') {
        iziToast.warning({
            message: 'Please enter a search query.',
            position: "topRight",
        })
        return;
    }
    clearGallery();
    showLoader();

    getImagesByQuery(query)
        .finally(() => {
            hideLoader();
            searchForm.reset();
        })
        .then(images => {
            if (images.length === 0) {
                iziToast.info({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: "topRight",
                });
                return;
            }
            createGallery(images);
        })
        .catch(err => {
            iziToast.error({
                message: err.message || 'Something went wrong',
            })
        });
};

searchForm.addEventListener('submit', onSubmitForm);