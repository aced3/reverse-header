(function(){
    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop(),
        elHeader = $('.header');
        elsubHeader = $('.sub_header');
        if (st > lastScrollTop){
            $(elHeader).addClass('header--hidden');
            $(elsubHeader).addClass('sub_header--hidden');
        } else {
            $(elHeader).removeClass('header--hidden');
            $(elsubHeader).removeClass('sub_header--hidden');
        }
        lastScrollTop = st;
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            $(elHeader).removeClass('header--hidden');
            $(elsubHeader).removeClass('sub_header--hidden');
        }
    });
})();