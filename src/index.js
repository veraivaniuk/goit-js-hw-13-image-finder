import './styles.css';
import ImagesApiPixabay from './js/pixabayApi.js';
import LoadMoreBtn from './js/loadMore.js';
import refs from './js/refs.js';
import imagesTpl from './templates/img.hbs';

const imagesApiPixabay = new ImagesApiPixabay();
const loadMoreBtn = new LoadMoreBtn({selector: '[data-action="load-more"]', hidden: true})

refs.searchForm.addEventListener("submit", onSearch);
loadMoreBtn.refs.button.addEventListener("click", onLoadMore);

function onLoadMore (e) {
    imagesApiPixabay.fetchImages().then(images => {
        appendImagesMarkup(images)
    if (imagesApiPixabay.page > 2) {
        gallery.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
        });
      }
    });
}

function onSearch (e) {
   e.preventDefault();
   clearImagesContainer();
   imagesApiPixabay.query = e.currentTarget.elements.query.value;
   imagesApiPixabay.resetPage();
   imagesApiPixabay.fetchImages().then(appendImagesMarkup);
   loadMoreBtn.show();
}

function appendImagesMarkup(images) {
    refs.gallery.insertAdjacentHTML('beforeend', imagesTpl(images));
  }
  
  function clearImagesContainer() {
    refs.gallery.innerHTML = '';
  }




