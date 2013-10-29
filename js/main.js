$(function() {
    $(document).ready(function(){
        $(".my_project").hover(function() {
            var t = $(this);
                t.find(".product_title_container").css("display","block");
        },
        function() {
            var t = $(this);
            t.find(".product_title_container").css("display","none");
        })

    })

});