let picture = document.querySelectorAll('.secondbox .picture');
let box = document.querySelectorAll('.thirdbox .product');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let active = 2;

function slideshow() {
    let slide = 0;
    picture[active].style.transform = 'none';
    picture[active].style.zIndex = 1;
    picture[active].style.filter = 'none';

    for (let i = active + 1; i < picture.length; i++) {
        slide++;
        picture[i].style.transform = `translateX(${120 * slide}px) scale(${1 - 0.5 * slide}) `;
        picture[i].style.zIndex = -slide;
        picture[i].style.filter = 'blur(2px)';
    }

    slide = 0;
    for (let i = active - 1; i >= 0; i--) {
        slide++;
        picture[i].style.transform = `translateX(${-120 * slide}px) scale(${1 - 0.5 * slide})`;
        picture[i].style.zIndex = -slide;
        picture[i].style.filter = 'blur(2px)';
    }
}

function slideshow2() {
    let slide = 0;
    box[active].style.transform = 'none';
    box[active].style.zIndex = 1;
    box[active].style.filter = 'none';
    box[active].style.display = 'block';
    for (let i = active + 1; i < box.length; i++) {
        slide++;
        box[i].style.transform = `translateX(${120 * slide}px) scale(${1 - 0.5 * slide}) `;
        box[i].style.zIndex = -slide;
        box[i].style.filter = 'blur(2px)';
        box[i].style.display = 'none';
    }

    slide = 0;
    for (let i = active - 1; i >= 0; i--) {
        slide++;
        box[i].style.transform = `translateX(${-120 * slide}px) scale(${1 - 0.5 * slide})`;
        box[i].style.zIndex = -slide;
        box[i].style.filter = 'blur(2px)';
        box[i].style.display = 'none';
    }
}

slideshow();
slideshow2();

next.onclick = function() {
    active = active + 1 < picture.length ? active + 1 : active;
    slideshow();
    slideshow2();
}

prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : active;
    slideshow();
    slideshow2();
}

document.addEventListener('DOMContentLoaded', function() {
    const pictureElements = document.querySelectorAll('.favorite-icon');
    const favoritesList = document.getElementById('favorites-list');
    const favoritesModal = document.getElementById('favorites-modal');
    const closeFavorites = document.querySelector('.close');
    const openFavorites = document.getElementById('favorites-link');
    const favorites = new Set();

    pictureElements.forEach(icon => {
        icon.addEventListener('click', function() {
            const pictureElement = this.parentElement;
            const productTitle = pictureElement.getAttribute('data-title');

            this.classList.toggle('active');
            this.classList.toggle('fas'); // Toggle between filled and unfilled heart
            this.classList.toggle('far'); // Toggle between regular and solid heart

            if (this.classList.contains('active')) {
                favorites.add(productTitle);
            } else {
                favorites.delete(productTitle);
            }

            updateFavoritesList();
        });
    });

    openFavorites.addEventListener('click', function(event) {
        event.preventDefault();
        favoritesModal.style.display = 'block';
    });

    closeFavorites.addEventListener('click', function() {
        favoritesModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == favoritesModal) {
            favoritesModal.style.display = 'none';
        }
    });

    function updateFavoritesList() {
        favoritesList.innerHTML = '';
        favorites.forEach(title => {
            const li = document.createElement('li');
            li.textContent = title;
            favoritesList.appendChild(li);
        });
    }
});



