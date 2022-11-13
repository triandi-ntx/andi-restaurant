/* eslint-disable import/named */
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-db';
import createRestaurantItemLayout from '../templates/item-layout';

const Favorite = {
  async render() {
    return `
    <div>
    <h2 tabindex="0" class="explore-restaurant__label">Favorite</h2>
    <section id="explore-restaurant-list"></section>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.getElementById('explore-restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemLayout(restaurant);
    });

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });
  },
};

export default Favorite;
