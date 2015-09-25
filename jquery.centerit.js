(function($) {

      /**
       * Title: CenterIt
       * Author: Alex MacArthur
       * Version: 1.2
       * Description: A small plugin that centers an element within a parent element vertically and horizontally.
       */

      $.fn.centerIt = function(options){

          // get all the ncessary variables set
          var $this         = $(this);
          var $parent       = $this.parent();
          var thisHeight    = $this.height();
          var thisWidth     = $this.outerWidth();
          var parentHeight  = $parent.height();
          var parentWidth   = $parent.outerWidth();
          var leftValue     = (parentWidth - thisWidth)/2;
          var topValue      = (parentHeight - thisHeight)/2;

          var settings = $.extend({
              position: "relative"

          }, options);

          function setCSS(){
            // apply relative positioning to parent so 'top' & 'left' values will have correct reference point
            $parent.css({
                'position'    : settings.position
            });

            // apply css to element to center it relative to parent
            $this.css({
                'position'    : 'absolute',
                'left'        : leftValue,
                'top'         : topValue
            });
          }

          // set CSS when window first loads
          setCSS();

          // reapply CSS when window changes in size
          $(window).resize(function(){

            //reset variables
            thisHeight    = $this.height();
            thisWidth     = $this.outerWidth();
            parentHeight  = $parent.height();
            parentWidth   = $parent.outerWidth();
            leftValue     = (parentWidth - thisWidth)/2;
            topValue      = (parentHeight - thisHeight)/2;

            //reapply CSS
            setCSS();

          });
      };

})(jQuery);
