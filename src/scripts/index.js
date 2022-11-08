import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/footer.css';
import '../styles/root.css';
import '../styles/responsive.css';
import DATA from '../public/DATA.json';

// toggle
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');
menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});
hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});
main.addEventListener('click', function () {
    drawer.classList.remove('open');
});

// DOM manipulation explore restaurant list
const getExploreRestaurant = (data) => {
    data.restaurants.forEach(restaurant => {
        const restaurantItem = document.getElementById('explore-restaurant-list');
        restaurantItem.innerHTML += `
        <article tabindex="0" class="card">
            <div class="card-img-container">
                <img class="card-image" alt="${restaurant.name}" src="${restaurant.pictureId}"/>
                <span class="card-rating">
                    <i title="ratings" class="fa fa-star"></i>
                    <span>${restaurant.rating}</span>
                </span>
            </div>

            <div class="card-content">
                <p class="card-content-title">${restaurant.name}</p>
                <p class="card-content-title">${restaurant.city}</p>
                <p class="card-content-title-description"></p>
                <p class="card-content-description">${restaurant.description}</p>
            </div>
        </article>
        `;
    })
}
getExploreRestaurant(DATA);

const toggleSwitch = document.querySelector("#dark-mode");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
}

function switchTheme(e) {
  if (
    e.target.classList.value === "light" ||
    e.path[1].classList.value === "light"
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
    e.target.classList.remove("light");
    e.target.classList.add("dark");
    e.path[1].classList.remove("light");
    e.path[1].classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    e.target.classList.remove("dark");
    e.target.classList.add("light");
    e.path[1].classList.remove("dark");
    e.path[1].classList.add("light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("click", switchTheme);
