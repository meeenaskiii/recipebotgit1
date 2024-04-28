
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(function() {
      $('.hero-slides').vegas({
          slides: [
            { src: 'images/f14.jpg' },           
              { src: 'images/f16.jpg' },
              { src: 'images/f3.jpg' },
              { src: 'images/f12.jpg' },
              { src: 'images/f5.jpg' },
              { src: 'images/f6.jpg' },
              { src: 'images/f7.jpg' },
              { src: 'images/f8.jpg' },
              { src: 'images/f9.jpg' },
              { src: 'images/f10.jpg' },
              { src: 'images/f11.jpg' },
              { src: 'images/f1.jpg' },
              { src: 'images/f13.jpg' },
              { src: 'images/f14.jpg' },
              { src: 'images/f15.jpg' },

          ],
          timer: false,
          animation: 'kenburns',
      });
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height() + 60;
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


