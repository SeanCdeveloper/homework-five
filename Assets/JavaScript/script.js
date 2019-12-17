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
    
    var timeBlock0 = $("#timeBlock0");
    var timeBlock1 = $("#timeBlock1");
    var timeBlock2 = $("#timeBlock2");
    var timeBlock3 = $("#timeBlock3");
    var timeBlock4 = $("#timeBlock4");
    var timeBlock5 = $("#timeBlock5");
    var timeBlock6 = $("#timeBlock6");
    var timeBlock7 = $("#timeBlock7");
    var timeBlock8 = $("#timeBlock8");

    /*
    var timeNow = moment().format("hh:mm:ss A");  
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
    } else if (timeNow >= "05:00:00 PM" && timeNow < "05:59:59 PM") {
        console.log("Bored");
    } else {
        console.log("Nothing");
    }
});
*/

var timeBlock0 = $("#timeBlock0");
var timeBlock1 = $("#timeBlock1");
var timeBlock2 = $("#timeBlock2");
console.log(timeBlock0, timeBlock1, timeBlock2);


var Timer = setInterval(myTimer, 1000);

function myTimer() {
var timeNow = moment().format("hh:mm:ss A");
console.log(timeNow);
if (timeNow >= "08:17:00" && timeNow < "08:17:59") {
        console.log("Chill");
        timeBlock0.addClass("present");
    } else if (timeNow >= "08:18:00" && timeNow < "08:18:59") {
        console.log("Time");
        timeBlock0.removeClass("present");
        timeBlock0.addClass("past");
        timeBlock1.addClass("present");
    } else if (timeNow >= "08:19:00" && timeNow < "08:19:59") {
        console.log("Now");
        timeBlock1.removeClass("present");
        timeBlock1.addClass("past");
        timeBlock2.addClass("present");
    }
};
});

