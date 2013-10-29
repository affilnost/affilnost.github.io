
/********** animate footer **********/

// animate clouds
var scrollSpeed = 70;
var step = 1;
var current_pos = 0;

var current_section_id=1;

var restartPosition = 0;

function scrollBg(){
    current_pos -= step;
    if (current_pos == restartPosition){
        current_pos = 0;
    }

    $('#clouds').css("background-position",current_pos+"px 0");
}


/********** footer **********/
browser_height = document.documentElement.clientHeight;



/********** on document ready **********/
$(document).ready(function(){


    var lastSection=1;

    function recalculate()
    {
        min_height = 100;
        min_width = 1024;
        if(document.documentElement.clientWidth<(min_width))
        {
            $('#page_container').css({width: min_width});
            $('#footer').css({width: min_width});
            //menu_recalculate(min_width-50);
        }
        else
        {
            $('#page_container').css({width: document.documentElement.clientWidth});
            $('#footer').css({width: document.documentElement.clientWidth});
            //menu_recalculate(document.documentElement.clientWidth-50);
        }

        if(document.documentElement.clientHeight<(min_height))
        {
            $('#page_container').css({height: min_height});
            $('#footer').css({bottom:0});

        }
        else
        {
            $('#page_container').css({height: document.documentElement.clientHeight});
            $('#footer').css({top:document.documentElement.clientHeight-115});
        }

        // get the mask width: width * total of items
        mask_width = document.documentElement.clientWidth * $('.item').length;

        // set the dimension
        $('#wrapper, .item').css({width: document.documentElement.clientWidth});
        $('#mask').css({width: mask_width});

        // if the item is displayed incorrectly, set it to the corrent pos
        $('#wrapper').scrollTo($('a.selected').attr('href'), 0);
    }

    // if browser height is too short
    if(browser_height < 800) {
        // push footer to bottom
        $('#footer').css({bottom:0});
    }

    // animate clouds
    setInterval("scrollBg()", scrollSpeed);


    // animate footer
    $(function() {
        $("#human").click(
            function() {
                $("#human").animate({
                    top: 50
                }, 500 );
                $("#butterfly_1").delay(400).animate({
                    left: 100,
                    top: 40
                }, 200 );
                $("#butterfly_2").delay(400).animate({
                    left: 120,
                    top: 30
                }, 200 );
                $("#butterfly_3").delay(400).animate({
                    left: 100,
                    top: 50
                }, 200 );
                $("#butterfly_4").delay(400).animate({
                    left: 130,
                    top: 45
                }, 200 );
                $("#human").animate({
                    top: 80
                }, 500 );
                $("#butterfly_1").animate({
                    left: 120,
                    top: 55
                }, 900 );
                $("#butterfly_2").animate({
                    left: 150,
                    top: 55
                }, 900 );
                $("#butterfly_3").animate({
                    left: 110,
                    top: 70
                }, 900 );
                $("#butterfly_4").animate({
                    left: 160,
                    top: 70
                }, 900 );
            }
        );
    });

    $(function() {
        $("#butterfly_1").click(
            function() {
                $("#butterfly_1").animate({
                    left: 110,
                    top: 40
                }, 200 );
                $("#butterfly_1").animate({
                    left: 120,
                    top: 55
                }, 800 );
            }
        );
    });

    $(function() {
        $("#butterfly_2").click(
            function() {
                $("#butterfly_2").animate({
                    left: 160,
                    top: 30
                }, 200 );
                $("#butterfly_2").animate({
                    left: 150,
                    top: 55
                }, 800 );
            }
        );
    });

    $(function() {
        $("#butterfly_3").click(
            function() {
                $("#butterfly_3").animate({
                    left: 120,
                    top: 60
                }, 200 );
                $("#butterfly_3").animate({
                    left: 110,
                    top: 70
                }, 800 );
            }
        );
    });

    $(function() {
        $("#butterfly_4").click(
            function() {
                $("#butterfly_4").animate({
                    left: 170,
                    top: 50
                }, 200 );
                $("#butterfly_4").animate({
                    left: 160,
                    top: 70
                }, 800 );
            }
        );
    });

    $(function() {
        $("#car").click(
            function() {
                $("#car").animate({
                    left: 300
                }, 2000 );
                $("#human").delay(1800).animate({
                    left: 270
                }, 200 );
                $("#car").animate({
                    top: 30,
                    left: 800
                }, 800 );
                $("#car").animate({
                    top: 40,
                    left: 800
                }, 200 );
                $("#human").animate({
                    left: 200
                }, 500 );
            }
        );
    });


});