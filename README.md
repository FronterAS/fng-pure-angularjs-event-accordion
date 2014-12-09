PURE ANGULAR.JS ACCORDION
=========================

A pure Angular implementation of an accordion style slider.  

See [plunker demo](http://embed.plnkr.co/11NIZqB3G3KYKI0OChGA/index.html) for an example.

### USAGE:

Link to the library in your index (or require.js), and add 'fng.pure.angularjs.accordion' to your app modules.

No CSS is necessary. Add the “slider” attribute to any tag. Add a slider-toggle attribute to 
any trigger.

### EXAMPLES:

    <article>
        <h1 slider-toggle>Click here for Hipster Ipsum.</h1>
        <div slider>
            <p>Bacon ipsum dolor amet spare ribs ham hock prosciutto short loin pig pork belly jerky.</p>
            <p>Filet mignon strip steak cupim capicola, corned beef prosciutto pig ribeye sausage beef ribs.</p>
            <p>Pig pork loin jerky kevin flank capicola, porchetta filet mignon chicken fatback pork chop bacon.</p>
            <p>Based on <a href="https://github.com/EricWVGG/AngularSlideables">github.com/EricWVGG/AngularSlideables</a></p>
        </div>
        <p>Your fresh artisinal Ipsum will appear above this paragraph. </p>
    </article>

#### OPTIONAL SLIDER ATTRIBUTES:

    <div slider easing="linear" duration="5s"></div>
