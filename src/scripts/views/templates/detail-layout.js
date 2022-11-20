import CONFIG from '../../globals/config';

const createRestaurantDetailLayout = (restaurant) => `
<div class="detail">
<div tabindex="0" class="container-info">
<div class="img-container">
<picture>
<source class="detail-img lazyload" data-srcset="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" type="image/webp" media="all and (max-width: 300px)" />        
<source class="detail-img lazyload" data-srcset="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" type="image/jpeg" media="all and (max-width: 300px)" />
<source class="detail-img lazyload" data-srcset="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" type="image/webp" media="all and (min-width: 700px) and (max-width: 900px)" />    
<source class="detail-img lazyload" data-srcset="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" type="image/jpeg" media="all and (min-width: 700px) and (max-width: 900px)" />
<source class="detail-img lazyload" data-srcset="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" type="image/webp" media="all and (min-width: 901px)" />        
<source class="detail-img lazyload" data-srcset="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" type="image/jpeg" media="all and (min-width: 901px)" />
<img class="detail-img lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}"/>
</picture>
</div>

<ul class="detail-info">
  <li class="resto-name">
    <i title="restaurant" class="fas fa-store-alt icon-primary"></i>
    <p class="detail-name-address-rating">${restaurant.name}</p>
    </li>

  <li class="resto-address">
    <i title="address" class="fas fa-map-marker-alt icon-primary"></i>
    <p class="detail-name-address-rating">${restaurant.address}, ${restaurant.city}</p>
    </li>

  <li class="resto-rating">
    <i title="ratings" class="fas fa-star icon-primary"></i>
    <p class="detail-name-address-rating">${restaurant.rating}</p>
  </li>
  <h4> Description: </h4>
  <li><p class="detail-desc">${restaurant.description}</p></li>

  <li class="resto-category">${restaurant.categories
    .map(
      (category) => `
        <span class="category">${category.name}</span>
      `,
    )
    .join('')}
  </li>
</ul>
</div>


<div tabindex="0" class="detail-menu">
  <div class="detail-food">
    <h4>LIST FOOD</h4>
    <ul>
      ${restaurant.menus.foods
    .map(
      (food, i) => `
            <li><p>${i + 1}) ${food.name}</p></li>
          `,
    )
    .join('')}
    <ul>
  </div>

  <div class="detail-drink">
    <h4>LIST DRINKS</h4>
    <ul>
      ${restaurant.menus.drinks
    .map(
      (drink, i) => `
            <li><p>${i + 1}) ${drink.name}</p></li>
          `,
    )
    .join('')}
    <ul>
  </div>
</div>
<h3 tabindex="0" class="title-review">Reviews</h3>
<div tabindex="0" class="detail-review">
${restaurant.customerReviews
    .map(
      (review) => `
      <div class="detail-review-item">
        <div class="header-review">
          <p class="name-review"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em; padding-right:10px;"></i>${review.name}</p>
          <p class="date-review">${review.date}</p>
        </div>
        <div class="body-review">
          ${review.review}
        </div>
      </div>
    `,
    )
    .join('')}
</div>
</div>
`;
export default createRestaurantDetailLayout;
