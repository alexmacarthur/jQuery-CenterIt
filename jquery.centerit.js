(function($) {

      /**
       * Title: CenterIt
       * Author: Alex MacArthur
       * Version: 1.0
       * Description: A small plugin that centers an element within a parent element vertically and horizontally.
       */

      $.fn.centerIt = function(){

          // get all the ncessary variables set
          var $this         = $(this),
              $parent       = $this.parent();
              thisHeight    = $this.height(),
              thisWidth     = $this.outerWidth(),
              parentHeight  = $parent.height(),
              parentWidth   = $parent.outerWidth(),
              leftValue     = (parentWidth - thisWidth)/2,
              topValue      = (parentHeight - thisHeight)/2;

          // apply relative positioning to parent so 'top' & 'left' values will have correct reference point
          $parent.css({
              'position'    : 'relative'
          });

          // apply css to element to center it relative to parent
          $this.css({
              'position'    : 'absolute',
              'left'        : leftValue,
              'top'         : topValue
          });

      };
        
})(jQuery);