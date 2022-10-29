var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: {
        nextEl:"work__arrow-right",
        prevEl:"work__arrow-left",
    },
    loop:true,
    autoplay:{
        deplay:200
    }


});

let btn = document.querySelector('.example__btn')
let overlay= document.querySelector('.overlay')

btn.addEventListener('click', function () {
    overlay.style.display='flex'
})

overlay.addEventListener('click ' ,function(e) {
    if(e.target.className='overlay'){
        overlay.style.display='none'
    }

})