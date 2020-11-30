$(document).ready(function () {
    //nav bar button function...
    $(".nav-toggle").eq(0).click(function () {
        $(".collapseList").eq(0).slideToggle(30);  /* collapseList list of nav topic and toggle button */
        $(this).toggleClass("navBgColor");
        $("#navToggleHide").toggle();
        $("#darkMode").toggle();
    });
    $("#navToggleHide").click(function () {
        $("#navToggleHide").css("display", "none");
        $(".collapseList").eq(0).slideToggle(10);
    });
    $("#darkModeMobile").click(function () {
        $("body").toggleClass("body");
        $(".collapseList").eq(0).slideToggle(30);
        $("#navToggleHide").css("display", "none");
    });
    $("#darkModePC").click(function () {
        $("body").toggleClass("body");
    });

    //topic button function...
    $("#topic").click(function () {
        $(".collapseList").eq(1).toggle();
        $(this).toggleClass("navBgColor");
        $(".collapseList").eq(0).css("display", "none");
        $("#navToggleHide").css("display", "none");
    });
    $("#navTopicHide").click(function () {
        $(".collapseList").eq(1).toggle();
        $("#topic").toggleClass("navBgColor");
    });

    //preview button funcion...
    $(".preview_btn").click(function (e) {
        $(".paragraph_show").slideToggle(250);
        $(this).toggleClass("navBgColor");
    });
    
    // loading the contents...
    $("#articlePlanet").load("contents/planet_article.txt");
    $("#factPlanet").load("contents/planet_facts.txt");

});







