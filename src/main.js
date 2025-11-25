import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreBtn, hideLoadMoreBtn, refs } from "./js/render-functions";
import iziToast from "izitoast";


const searchForm = document.querySelector('.form');
let page = 1;
let perPage = 15;
let query = null;
let galleryCardHeight = null;

const onSubmitForm = async event => {
    event.preventDefault();
    // Зчитуємо інпут, очищуємо галерею і показуємо лоадер
    const { target: form } = event;
    query = form.elements['search-text'].value.trim();
    if (query === '') {
        iziToast.warning({
            message: 'Please enter a search query.',
            position: "topRight",
        })
        return;
    }
    clearGallery();
    showLoader();
    page = 1;
    // Відмальовуємо першу сторінку галереї

    try {
        const { hits, totalHits } = await getImagesByQuery(query, page);
        if (hits.length === 0) {
            iziToast.info({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: "topRight",
            });
            searchForm.reset();
            return;
        }

        if (totalHits > perPage) {
            showLoadMoreBtn();
            refs.loadMoreBtn.addEventListener('click', onLoadMoreBtn);
        }

        createGallery(hits);
        galleryCardHeight = refs.galleryList.querySelector('li').getBoundingClientRect().height;
    }
    catch {
        iziToast.error({
            message: err.message || 'Something went wrong',
        })
    }
    finally { hideLoader() };
};

searchForm.addEventListener('submit', onSubmitForm);

const onLoadMoreBtn = async event => {
    hideLoadMoreBtn();
    showLoader();
    try {
        page++;
        const { hits } = await getImagesByQuery(query, page);
        createGallery(hits);
        scrollBy({
            top: galleryCardHeight * 2,
            behavior: 'smooth',
        });

        if (hits.length <= perPage) {
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
            });

            refs.loadMoreBtn.removeEventListener('click', onLoadMoreBtn);
            hideLoadMoreBtn();
            return;
        }
        showLoadMoreBtn();
    } catch (error) {
        console.log(error);
    }
    finally {
        hideLoader();
    };
};
