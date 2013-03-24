(function($){
  $.fn.extend({
    tinyModal: function(options) {
      var defaults = {
        top: 100,
        overlay: 0.5,
        closeButton: null
      }
      if($('#tiny_overlay').length < 1) {
        var overlay = $("<div id='tiny_overlay'></div>");
        $("body").append(overlay);
      }
      var opts = $.extend(defaults, options);

      $modal = $(this);

      var fadeInOverlay = function() {
        $('#tiny_overlay').css({ 'display' : 'block', opacity : 0 });
        $('#tiny_overlay').fadeTo(200,opts.overlay);
      }
      var fadeOutOverlay = function() {
        $("#tiny_overlay").fadeOut(200);
      }
      var closeModal = function(e) {
        $modal.css({'display':'none'});
        fadeOutOverlay();
      }
      var openModal = function(e) {
        var modal_width = $modal.outerWidth();
        $modal.css({
          'display' : 'block',
          'position' : 'fixed',
          'opacity' : 0,
          'z-index': 11000,
          'left' : 50 + '%',
          'margin-left' : -(modal_width/2) + "px",
          'top' : opts.top + "px"
        });

        $modal.fadeTo(200,1);
        fadeInOverlay();
      }

      $('#tiny_overlay').click(closeModal);
      openModal();
    }
  });
})(jQuery);
