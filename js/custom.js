$(document).ready(function(){
var masonry = new Macy({
        container: '#macy-container',
        trueOrder: false,
        waitForImages: false,
        useOwnImageLoader: false,
        debug: true,
        mobileFirst: true,
        columns: 1,
        margin: {
            y: 16,
            x: '1%',
        },
        breakAt: {
            1200: 3,
            940: 3,
            520: 3,
            400: 2
        },
    });
});