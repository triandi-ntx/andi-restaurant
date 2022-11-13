import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import createRestaurantItemDetail from '../templates/item-detail';
import LikeButtonInitiatior from '../../utils/like-button-initiator';
import PostReview from '../../utils/post-review-initiator';

const Detail = {
  async render() {
    return `
    <div class="main">
    <div id="loading"></div>
      <h2 tabindex="0" class="explore-restaurant__label">Detail Restaurant</h2>
        <section id="detail-rest"></section>
        <div class="like" id="likeButtonContainer"></div>
        <div class="form-review">
          <form>
            <div class="mb-3"><label for="inputName" class="form-label">Name</label><input name="inputName" type="text" class="form-control" id="inputName"></div>
            <div class="mb-3"><label for="inputReview" class="form-label">Review</label><input name="inputReview" type="text" class="form-control" id="inputReview"></div>
            <button id="submit-review" type="submit" class="btn">Submit</button>
          </form>
        </div>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.getElementById('detail-rest');
    restaurantContainer.innerHTML = createRestaurantItemDetail(restaurant);
    LikeButtonInitiatior.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      // eslint-disable-next-line max-len, object-curly-newline
      restaurant: { id: restaurant.id, name: restaurant.name, city: restaurant.city, pictureId: restaurant.pictureId, description: restaurant.description, rating: restaurant.rating,
      },
    });
    const submitReview = document.getElementById('submit-review');
    submitReview.addEventListener('click', (event) => {
      event.preventDefault();
      PostReview();
    });
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });
  },

};

export default Detail;
