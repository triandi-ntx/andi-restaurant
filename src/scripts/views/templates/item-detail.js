import CONFIG from '../../globals/config';

const createRestaurantItemDetail = (restaurant) => `
        <article tabindex="0" class="card">
            <div class="card-img-container">
                  <img class="card-image lazyload" data-src="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}" alt="${restaurant.name}"/>
                <span class="card-rating">
                    <i title="ratings" class="fa fa-star"></i>
                    <span>${restaurant.rating}</span>
                </span>
            </div>

            <div class="card-content">
                <p class="card-content-title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name} - ${restaurant.city}</a></p>
                <p class="card-content-title-description"></p>
                <p class="card-content-description">${restaurant.description}</p>
            </div>
        </article>
`;
const createSkeletonRestaurantTemplate = (count) => {
  let skeleton = '';

  for (let i = 0; i < count; i += 1) {
    skeleton += `
          <article tabindex="0" class="card">
          <div class="card-img-container">
              <img class="card-image" alt="skeleton" src="./images/placeholder-medium.jpg" width="100%" height="250px"/>
          </div>

          <div class="card-content">
              <p class="skeleton">Lorem ipsum dolor sit.</p>
              <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
          </div>
      </article>
    `;
  }
  return skeleton;
};

export {
  createRestaurantItemDetail,
  createSkeletonRestaurantTemplate,
};
