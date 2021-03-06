'use strict';

angular.module('fng.pure.angularjs.event.accordion', [])
    .directive('slider', function () {
        return {
            restrict:'A',
            compile: function (element, attr) {
                // wrap tag
                var contents = element.html();
                element.html('<div style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

                return function postLink (scope, element, attrs) {
                    var content = element.children()[0],
                        target = element[0];

                    // default properties
                    attrs.duration = (!attrs.duration) ? '0.5s' : attrs.duration;
                    attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                    element.css({
                        'overflow': 'hidden',
                        'height': '0px',
                        'transitionProperty': 'height',
                        'transitionDuration': attrs.duration,
                        'transitionTimingFunction': attrs.easing
                    });

                    attrs.expanded = false;
                    scope.$on('toggle-slider', function () {
                        if(!attrs.expanded) {
                            content.style.border = '1px solid rgba(0,0,0,0)';
                            var y = content.clientHeight;
                            content.style.border = 0;
                            target.style.height = y + 'px';
                        } else {
                            target.style.height = '0px';
                        }
                        attrs.expanded = !attrs.expanded;
                    });
                };
            }
        };
    });
