/* eslint-disable import/named */
import Spinner from '../templates/spinner';
import RestaurantSource from '../../data/restaurant-source';
import createRestaurantItemLayout from '../templates/item-layout';

const Home = {
  async render() {
    return `
        <div>
        <div id="loading"></div>
          <div class="main">
            <h2 tabindex="0" class="explore-restaurant__label">List Restaurant</h2>
            <section id="explore-restaurant-list"></section>
          </div>
        </div>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const mainContainer = document.getElementsByClassName('main');
    loading.innerHTML = Spinner();
    mainContainer.innerHTML = '';
    const restaurantContainer = document.getElementById('explore-restaurant-list');
    restaurantContainer.innerHTML = '';

    try {
      const listRestaurant = await RestaurantSource.getRestaurants();
      listRestaurant.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemLayout(restaurant);
      });
      loading.style.display = 'none';
    } catch (error) {
      loading.style.display = 'none';
      restaurantContainer.innerHTML = `<h3 class="error">Error: ${error.message}</h3>`;
    }
  },
};

export default Home;
