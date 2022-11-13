/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import CONFIG from '../../globals/config';

const createRestaurantItemLayout = (restaurant) => `
<article tabindex="0" class="card">
            <div class="card-img-container">
            <img class="card-image" alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"/>
            <span class="card-rating">
            <i title="ratings" class="fa fa-star"></i>
            <span>${restaurant.rating}</span>
        </span>
    </div>
        <div class="card-content">
        <p class="card-content-title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></p>
        <p class="card-content-title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.city}</a></p>
        <p class="card-content-title-description"></p>
        <p class="card-content-description">${restaurant.description}</p>
    </div>
</article>
`;
export default createRestaurantItemLayout;
