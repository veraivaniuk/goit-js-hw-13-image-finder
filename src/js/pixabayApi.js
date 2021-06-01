const API_KEY = '21864216-f735fea3a07168d74f35b2198';

const BASE_URL = "https://pixabay.com/api/?key="+API_KEY+"&q=";


export default class ImagesApiPixabay {
    constructor() {
      this.searchQuery = '';
      this.page = 1;
      this.imageType = 'photo';
      this.orientation = 'horizontal';
    }
  
    fetchImages( ) {
      console.log(this );
      const url = `${BASE_URL}${this.searchQuery}&image_type=${this.imageType}&orientation=${this.orientation}&page=${this.page}&per_page=12`;
  
      return fetch(url)
        .then(response => response.json())
        .then((data) => {
          this.incrementPage();
          return data.hits;
        });
    }
  
    incrementPage() {
      this.page += 1;
    }
  
    resetPage() {
      this.page = 1;
    }
  
    get query() {
      return this.searchQuery;
    }
  
    set query(newQuery) {
      this.searchQuery = newQuery;
    }
  }
