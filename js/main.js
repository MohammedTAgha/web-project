$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    navigation : true,
     lazyLoad:true,
    autoHeight:true,
    autoWidth:true,
    // navText : ["<i class='fa-thin fa-chevrons-right'></i>","<i class='fa fa-chevron-right'></i>"],
    navigationText : ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})