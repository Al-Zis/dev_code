var _window = $(window),
    _header = $('.header'),
    heroBottom;

_window.on('scroll',function(){
    heroBottom = $('.main_img').height();
    if(_window.scrollTop() > heroBottom){
        _header.addClass('transform');   
    }
    else{
        _header.removeClass('transform');   
    }
});

_window.trigger('scroll');