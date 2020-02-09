$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'Editor', 'More'],
        scrollingSpeed: 900,
        //easing: 'easeInElastic',
        //easingcss3: 'ease',
        //verticalCentered: true,
        //resize: false,
        
        //Custom selectors
        //sectionSelector: '.section',
        //slideSelector: '.slide',
        scrollOverflow: false
    });
});