PURE ANGULAR.JS ACCORDION
=========================

A pure Angular implementation of an accordion style slider.  

See [plunker demo](http://plnkr.co/edit/EbdDqGYrTE0ZcOqthIeO?p=preview) for an example.

### USAGE:

Link to the library in your index (or require.js), and add 'fng.pure.angularjs.event.accordion' to your app modules.

No CSS is necessary. Add the “slider” attribute to any tag. And boradcast the 'toggle-slider' event to the directive to
open/close the slider.

### EXAMPLES:
    <body ng-app="app">
        <script>
            angular.module('app', ['fng.pure.angularjs.event.accordion'])
                    .controller('exampleController', function($scope) {
                        $scope.toggleSlider = function () {
                            $scope.$broadcast('toggle-slider');
                        };
                    });
        </script>
        
        <article ng-controller="exampleController">
            <div>
                <h1 ng-click="toggleSlider()">Click here for Hipster Ipsum.</h1>
            </div>
            <div slider>
                <p>Bacon ipsum dolor amet spare ribs ham hock prosciutto short loin pig pork belly jerky.</p>
                <p>Filet mignon strip steak cupim capicola, corned beef prosciutto pig ribeye sausage beef ribs.</p>
                <p>Pig pork loin jerky kevin flank capicola, porchetta filet mignon chicken fatback pork chop bacon.</p>
                <p>Based on <a href="https://github.com/EricWVGG/AngularSlideables">github.com/EricWVGG/AngularSlideables</a></p>
            </div>
            <p>Your fresh artisinal Ipsum will appear above this paragraph. </p>
        </article>
    </body>

#### OPTIONAL SLIDER ATTRIBUTES:

    <div slider easing="linear" duration="5s"></div>
