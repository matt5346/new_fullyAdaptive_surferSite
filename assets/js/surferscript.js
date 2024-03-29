$(function() {

    let header = $('#header'),
    introH = $('#intro').innerHeight(),
    scroll = $(window).scrollTop();

    /* Fixing header */

    checkScroll(scroll);

    $(window).on('scroll', function() {

        scroll = $(this).scrollTop();
        checkScroll(scroll);

    });

    function checkScroll(scroll) {

        if (scroll >= introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }

    }

    /* smooth sliding */

        $('[data-scroll]').on('click', function(event) {
            event.preventDefault();

            let $this = $(this),
            blockId = $this.data('scroll'),
            blockOfSet = $(blockId).offset().top;

           console.log(blockOfSet)
           $("html, body").animate({
               scrollTop: blockOfSet
           });
        });

    // Boards nav by image onclick

    let img = document.getElementById("main_board");
    $("#one").on("click", function(event) {
        event.preventDefault();
        img.src = "assets/images/boards/board-main.png";
    })
    $("#two").on("click", function(event) {
        event.preventDefault();
        img.src = "assets/images/boards/board-main4.png";
    })
    $("#three").on("click", function(event) {
        event.preventDefault();
        img.src = "assets/images/boards/board-main3.png";
    })
    $("#four").on("click", function(event) {
        event.preventDefault();
        img.src = "assets/images/boards/board-main2.png";
    })

    let img_2 = document.getElementById("main_board_2");
    $("#one_1").on("click", function(event) {
        event.preventDefault();
        img_2.src = "assets/images/boards/board-main.png";
    })
    $("#two_2").on("click", function(event) {
        event.preventDefault();
        img_2.src = "assets/images/boards/board-main4.png";
    })
    $("#three_3").on("click", function(event) {
        event.preventDefault();
        img_2.src = "assets/images/boards/board-main3.png";
    })
    $("#four_4").on("click", function(event) {
        event.preventDefault();
        img_2.src = "assets/images/boards/board-main2.png";
    })

    // boards accordion

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
        blockId = $this.data("collapse");

        $this.toggleClass("active");
   
    });

    // burger menu

    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    

})

$('[data-slider]').slick({
    prevArrow: ".arrow_prev",
    nextArrow: ".arrow_next",
    infinite: true,
    slidesToShow: 1,
    sliderToScroll: 1,

});



