$(document).ready(function () {
    $("#know").click(function () {
        $("#know").css("display", "none")
        $("#know1").css("display", "block")
        if ($("#sanjiao").css("display") == "none") {
            $("#sanjiao").css("display", "block")
            $("#information").css("display", "block")
        } else {
            $("#sanjiao").css("display", "none")
            $("#information").css("display", "none")
        }
    })

    $("#know1").click(function () {
        $("#know1").css("display", "none")
        $("#know").css("display", "block")
        if ($("#sanjiao").css("display") == "none") {
            $("#sanjiao").css("display", "block")
            $("#information").css("display", "block")
        } else {
            $("#sanjiao").css("display", "none")
            $("#information").css("display", "none")
        }
    })
})