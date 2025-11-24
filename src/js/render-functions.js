import SimpleLightbox from "simplelightbox";
// const simpleLightbox = new SimpleLightbox;
let galleryLightbox;
export const createGallery = values => {

  const createGalleryCardTemplate = ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    return `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}" target="_self" rel="noopener noreferrer">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
      loading="lazy"
    />
  </a>
  <ul class="stats">
    <li class="stats-item">
      <b>Likes</b>
      <span>${likes}</span>
    </li>
    <li class="stats-item">
      <b>Views</b>
      <span>${views}</span>
    </li>
    <li class="stats-item">
      <b>Comments</b>
      <span>${comments}</span>
    </li>
    <li class="stats-item">
      <b>Downloads</b>
      <span>${downloads}</span>
    </li>
  </ul>
</li>
`
  };
  refs.galleryList.insertAdjacentHTML('beforeend', values.map(imgInfo => createGalleryCardTemplate(imgInfo)).join(''));

  if (!galleryLightbox) {
    galleryLightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    galleryLightbox.refresh();
  }
}

const refs = {
  galleryList: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
}

export const clearGallery = () => { refs.galleryList.innerHTML = ''; };
export const showLoader = () => { refs.loader.classList.remove('is-hidden'); };
export const hideLoader = () => { refs.loader.classList.add('is-hidden'); };
export const showLoadMoreBtn = () => { refs.loadMoreBtn.classList.remove('is-hidden'); }
export const hideLoadMoreBtn = () => { refs.loadMoreBtn.classList.add('is-hidden'); }