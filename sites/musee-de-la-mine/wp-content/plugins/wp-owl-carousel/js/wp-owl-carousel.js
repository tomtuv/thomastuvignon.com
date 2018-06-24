jQuery(document).ready(function($){
    $('.owl-carousel').each(function(){
        var data = $(this).data('owloptions');
        if(data.autoPlay == 0) data.autoPlay = false;

        data.itemsDesktop = [1199,data.itemsDesktop];
        data.itemsDesktopSmall = [979,data.itemsDesktopSmall];
        data.itemsTablet = [768,data.itemsTablet];
        data.itemsMobile = [479, data.itemsMobile];
        data.navigationText = [data.navigationTextPrev,data.navigationTextNext];

        $(this).owlCarousel(data);
    });
});