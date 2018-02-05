$(document).ready(($) => {

    console.log($);


    //button click change div css 
    $("button").click(function(){
        $("div").css({
            background: "red",
            width: "100px"

        });
    });

    //div click fadeout to right
    $("div").click(function(){

        $(this).fadeOut();
    });

    //animate the h1
    $("h1").on("click", animateh1);

    function animateh1(){
    $("h1").animate({
        color: "yellow",
        fontSize: "22px"

    },{
        duration: 2000,
        complete : function(){
            $(this).text("it was a pleasure");
        }
    });
    }




});
