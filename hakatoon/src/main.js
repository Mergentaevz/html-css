var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 2500
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});


overlay.addEventListener('click', function (e) {
    if (e.target.className === 'overlay') {
        overlay.style.display = 'none'
    }

})
