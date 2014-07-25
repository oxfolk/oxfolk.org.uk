(function ($) {
    'use strict';
    
    $(function () {
        $(document).on('click', '.ceilidh a', function (event) {
            event.preventDefault();
            var $link = $(this);
            console.log($link);
        });
    });
})(window.jQuery);
