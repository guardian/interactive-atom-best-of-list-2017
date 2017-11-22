'use strict';
define([], function() {
    function addCSS(url) {
        var head = document.querySelector('head');
        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', url);
        head.appendChild(link);
    }

    return {
        boot: function(el, context, config, mediator) {

            // Loading message while we fetch JS / CSS
            el.innerHTML = '<div style="font-size: 24px; text-align: center; padding: 72px 0; font-family: \'Guardian Egyptian Web\',Georgia,serif;">Loading…</div>';

            config = {
                'assetPath': 'https://interactive.guim.co.uk/2017/11/review-list-enhancers/albums/1511366139086'
            };

            // Load CSS asynchronously
            window.setTimeout(function() {
                addCSS('https://interactive.guim.co.uk/2017/11/review-list-enhancers/albums/1511366139086/main.css');
            }, 10);

            // Load JS and init
            require(['https://interactive.guim.co.uk/2017/11/review-list-enhancers/albums/1511366139086/main.js'], function(main) {
                main.init(el, context, config, mediator);
            }, function(err) { console.error('Error loading boot.', err); });
        }
    };
});