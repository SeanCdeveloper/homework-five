$(document).ready(function() {
    /* Making <textarea> Element Retreive relay .val() to localStorage after "click" Event. */
    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".description").val();
        /*var time = $(this).siblings(".hour").text();*/
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    });
    /* Pasting the Current Date + Time to <p> Element */
    $("#currentDay").text(moment().format("LLLL"));    

    var timeNow = moment().format("hh:mm:ss A");
    var timeBlock0 = $("#timeBlock1");
    var timeBlock1 = $("#timeBlock2");
    var timeBlock2 = $("#timeBlock3");
    var timeBlock3 = $("#timeBlock3");
    var timeBlock4 = $("#timeBlock3");
    var timeBlock5 = $("#timeBlock3");
    var timeBlock6 = $("#timeBlock3");
    var timeBlock7 = $("#timeBlock3");
    var timeBlock8 = $("#timeBlock8");

    console.log(timeNow);

    if (timeNow >= "09:00:00 AM" && timeNow < "9:59:59 AM") {
        console.log("Chill");
    } else if (timeNow >= "10:00:00 AM" && timeNow < "10:59:59 AM") {
        console.log("Time");
    } else if (timeNow >= "11:00:00 AM" && timeNow < "11:59:59 AM") {
        console.log("Now");
    } else if (timeNow >= "12:00:00 PM" && timeNow < "12:59:59 PM") {
        console.log("Nothing");
    } else if (timeNow >= "01:00:00 PM" && timeNow < "01:59:59 PM") {
        console.log("Done")
    } else if (timeNow >= "02:00:00 PM" && timeNow < "02:59:59 PM") {
        conosle.log("But");
    } else if (timeNow >= "03:00:00 PM" && timeNow < "03:59:59 PM") {
        console.log("Not");
    } else if (timeNow >= "04:00:00 PM" && timeNow < "04:59:59 PM") {
        console.log("Being");
    } else if (timeNow >= "5:00:00 PM" && timeNow < "05:59:59 PM") {
        console.log("Bored");
    }
    
/*
var timeBlock1 = $("#timeBlock1");
var timeBlock2 = $("#timeBlock2");
var timeBlock3 = $("#timeBlock3");
console.log(timeBlock1, timeBlock2, timeBlock3);

var timeNow = moment().format("hh:mm:ss A");
console.log(timeNow);
if (timeNow >= "02:54:00" && timeNow < "02:54:59") {
        console.log("Chill");
        timeBlock1.css("background", "red")
    } else if (timeNow >= "02:55:00" && timeNow < "02:55:59") {
        console.log("Time");
        timeBlock2.css("background", "green");
    } else if (timeNow >= "02:56:00" && timeNow < "02:56:59") {
        console.log("Now");
        timeBlock3.css("background", "orange");
    }
*/



});