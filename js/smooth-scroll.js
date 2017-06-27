// Smooth Scroll

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var sectionID = $(this.hash);
      sectionID = sectionID.length ? sectionID : $('[name=' + this.hash.slice(1) + ']');

      if (sectionID.length) {
        $('html,body').animate({
          scrollTop: sectionID.offset().top
        }, 1000); // This animation is 1 second long - measured in milliseconds
        
        return false;
      }
    }
  });
});