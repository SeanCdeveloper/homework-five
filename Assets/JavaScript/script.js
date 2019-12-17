$(document).ready(function () {
    /* Making <textarea> Element Retreive relay .val() to localStorage after "click" Event. */
    $(".saveBtn").on("click", function () {
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
    var timeBlock3 = $("#timeBlock3");
    var timeBlock4 = $("#timeBlock4");
    var timeBlock5 = $("#timeBlock5");
    var timeBlock6 = $("#timeBlock6");
    var timeBlock7 = $("#timeBlock7");
    var timeBlock8 = $("#timeBlock8");

    console.log(timeBlock0, timeBlock1, timeBlock2, timeBlock3, timeBlock4, timeBlock5, timeBlock6, timeBlock7, timeBlock8);

    var Timer = setInterval(myTimer, 1000);

    function myTimer() {
        var timeNow = moment().format("hh:mm:ss A");
        console.log(timeNow);
        if (timeNow >= "09:20:00" && timeNow < "09:20:59") {
            console.log("9am");
            timeBlock0.addClass("present");
        } else if (timeNow >= "09:21:00" && timeNow < "09:21:59") {
            console.log("10am");
            timeBlock0.removeClass("present");
            timeBlock0.addClass("past");
            timeBlock1.addClass("present");
        } else if (timeNow >= "09:22:00" && timeNow < "09:22:59") {
            console.log("11am");
            timeBlock1.removeClass("present");
            timeBlock1.addClass("past");
            timeBlock2.addClass("present");
        } else if (timeNow >= "09:23:00" && timeNow < "09:23:59") {
            console.log("12am");
            timeBlock2.removeClass("present");
            timeBlock2.addClass("past");
            timeBlock3.addClass("present");
        } else if (timeNow >= "09:24:00" && timeNow < "09:24:59") {
            console.log("1pm");
            timeBlock3.removeClass("present");
            timeBlock3.addClass("past");
            timeBlock4.addClass("present");
        } else if (timeNow >= "09:25:00" && timeNow < "09:25:59") {
            console.log("2pm");
            timeBlock4.removeClass("present");
            timeBlock4.addClass("past");
            timeBlock5.addClass("present");
        }  else if (timeNow >= "09:26:00" && timeNow < "09:26:59") {
            console.log("3pm");
            timeBlock5.removeClass("present");
            timeBlock5.addClass("past");
            timeBlock6.addClass("present");
        }   else if (timeNow >= "09:27:00" && timeNow < "09:27:59") {
            console.log("4pm");
            timeBlock6.removeClass("present");
            timeBlock6.addClass("past");
            timeBlock7.addClass("present");
        }   else if (timeNow >= "09:28:00" && timeNow < "09:28:59") {
            console.log("5pm");
            timeBlock7.removeClass("present");
            timeBlock7.addClass("past");
            timeBlock8.addClass("present");
        }   
        };

        function stopTimer() {
            clearInterval(Timer);
        }
    });
/*
function TimeBlock0Funct() {
    timeBlock0.addClass("present");
    timeBlock1.addClass("future");
    timeBlock2.addClass("future");
    timeBlock3.addClass("future");
    timeBlock4.addClass("future");
    timeBlock5.addClass("future");
    timeBlock6.addClass("future");
    timeBlock7.addClass("future");
    timeBlock8.addClass("future");
}

function TimeBlock1Funct() {
    timeBlock2.addClass("future");
    timeBlock3.addClass("future");
    timeBlock4.addClass("future");
    timeBlock5.addClass("future");
    timeBlock6.addClass("future");
    timeBlock7.addClass("future");
    timeBlock8.addClass("future");
};
*/






