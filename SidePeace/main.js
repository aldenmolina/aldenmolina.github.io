$("#1").click(function() {
    $("#1").addClass("onclick");
    $("#2").removeClass("onclick");
    $("#3").removeClass("onclick");
});

$("#2").click(function() {
    $("#1").removeClass("onclick");
    $("#2").addClass("onclick");
    $("#3").removeClass("onclick");
});

$("#3").click(function() {
    $("#1").removeClass("onclick");
    $("#2").removeClass("onclick");
    $("#3").addClass("onclick");
});