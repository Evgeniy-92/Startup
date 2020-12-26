// let backButton = document.querySelector('.arrow-left');
// let nextButton = document.querySelector('.arrow-right');

$('.team').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    // prevArrow: backButton,
    // nextArrow: nextButton,
    responsive: [
        {
            breakpoint: 768,
            settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },

        {
            breakpoint: 375,
            settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
    ]
});
