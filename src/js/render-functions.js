import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
let lightbox;

export function clearGallery() {
  gallery.innerHTML = '';
}
export function renderGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
	<a class="gallery-link" href="${largeImageURL}">
		<img
		  class="gallery-image"
		  src="${webformatURL}"
		  alt="${tags}"
          width="360"
          height="152"

		/>
        <div class='desc-container'>
        <div class='desc'>
            <p class='desc-text'>Likes:</p>
            <span class='desc-n'>${likes}</span>
        </div>
        <div class='text-wrapper'>
            <p class='desc-text'>Views:</p>
            <span class='desc-n'>${views}</span>
        </div>
        <div class='text-wrapper'>
            <p class='desc-text'>Comments:</p>
             <span class='desc-n'>${comments}</span>
        </div>
        <div class='text-wrapper'>
            <p class='desc-text'>Downloads:</p>
             <span class='desc-n'>${downloads}</span>
        </div>

        </div>
	</a>
</li>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}
