var swiper = new Swiper(".equipmentSlider", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next_equip",
        prevEl: ".swiper-button-prev_equip",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

