import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import createRestaurantDetailLayout from '../templates/detail-layout';
import LikeButtonPresenter from '../../utils/likebutton-presenter';
import PostReview from '../../utils/postreview-initiator';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-db';

const Detail = {
  async render() {
    return `
    <div class="main">
      <h2 tabindex="0" class="explore-restaurant__label">Detail Restaurant</h2>
        <section id="detail-rest"></section>
        <div class="like" id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.getElementById('detail-rest');
    restaurantContainer.innerHTML = createRestaurantDetailLayout(restaurant);
    LikeButtonPresenter.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
        rating: restaurant.rating,
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
