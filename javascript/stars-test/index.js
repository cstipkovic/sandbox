console.clear();

const starsContainer = document.querySelector('.stars-container');
const star = document.querySelectorAll('.stars-container .star');

const clearSelectedStars = (className) => {
    for (let i = 0; i < star.length; i++) {
        star[i].classList.remove(className);
    }
}

const addSelectedStars = (starPosition, className) => {
    for (let i = 0; i < starPosition; i++) {
        star[i].classList.add(className);
    }
}

for (const s of star) {
    s.addEventListener('click', () => {
        clearSelectedStars('selected-star');
        addSelectedStars(s.getAttribute('data-position'), 'selected-star');
    });

    s.addEventListener('mouseover', () => {
        addSelectedStars(s.getAttribute('data-position'), 'star-hover');
    });

    s.addEventListener('mouseout', () => {
        clearSelectedStars('star-hover');
    });
}
