$(document).ready(function () {
    $("#nav1").mouseover(function () {
        $("#nav_box").css("display", "block")
        $("#nav_box").css("background", "url('upload/nav1.png')")
    })
    $("#nav1").mouseout(function () {
        $("#nav_box").css("display", "none")
    })

    $("#nav2").mouseover(function () {
        $("#nav_box").css("display", "block")
        $("#nav_box").css("background", "url('upload/nav2.jfif')")
    })
    $("#nav2").mouseout(function () {
        $("#nav_box").css("display", "none")
    })

    $("#nav3").mouseover(function () {
        $("#nav_box").css("display", "block")
        $("#nav_box").css("background", "url('upload/nav3.jfif')")
    })
    $("#nav3").mouseout(function () {
        $("#nav_box").css("display", "none")
    })

    $("#nav4").mouseover(function () {
        $("#nav_box").css("display", "block")
        $("#nav_box").css("background", "url('upload/nav4.jfif')")
    })
    $("#nav4").mouseout(function () {
        $("#nav_box").css("display", "none")
    })

    $("#nav5").mouseover(function () {
        $("#nav_box").css("display", "block")
        $("#nav_box").css("background", "url('upload/nav5.png')")
    })
    $("#nav5").mouseout(function () {
        $("#nav_box").css("display", "none")
    })

    $("#nav6").mouseover(function () {
        $("#nav_box").css("display", "block")
        $("#nav_box").css("background", "url('upload/nav6.jfif')")
    })
    $("#nav6").mouseout(function () {
        $("#nav_box").css("display", "none")
    })

    $("#nav7").mouseover(function () {
        $("#nav_box").css("display", "block")
        $("#nav_box").css("background", "url('upload/nav7.png')")
    })
    $("#nav7").mouseout(function () {
        $("#nav_box").css("display", "none")
    })

    $("#nav8").mouseover(function () {
        $("#nav_box").css("display", "block")
        $("#nav_box").css("background", "url('upload/nav8.png')")
    })
    $("#nav8").mouseout(function () {
        $("#nav_box").css("display", "none")
    })

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