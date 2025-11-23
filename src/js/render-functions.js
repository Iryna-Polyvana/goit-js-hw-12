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
  refs.galleryList.innerHTML = values.map(imgInfo => createGalleryCardTemplate(imgInfo)).join('');

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
}
export const clearGallery = () => { refs.galleryList.innerHTML = ''; };
export const showLoader = () => { refs.loader.classList.remove('is-hidden'); };
export const hideLoader = () => { refs.loader.classList.add('is-hidden'); };

// У файлі render - functions.js створи екземпляр SimpleLightbox для роботи з модальним вікном та зберігай функції для відображення елементів інтерфейсу:
// createGallery(images).Ця функція повинна приймати масив images, створювати HTML - розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh().Нічого не повертає.
//     clearGallery().Ця функція нічого не приймає та повинна очищати вміст контейнера галереї.Нічого не повертає.
//         showLoader().Ця функція нічого не приймає, повинна додавати клас для відображення лоадера.Нічого не повертає.
//             hideLoader().Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера.Нічого не повертає.