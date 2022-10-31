//FUNCTION will run the callback function once the HTML index file has loaded
$(document).ready(function () {
    

    //save clicks--jquery onclick function. Once we click this button it will run this callback function
    $('.saveBtn').on('click', function () {

        //set variables for time and description values at the time of the click
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        //time variable will be stored as "hour-9" etc. This will need to be fixed later to grab just the number.

        //save to local storage(only the users local browser) users won't see eachothers changes

        localStorage.setItem(time, value);

        //notification of save to local storage

        $('.notification').addClass('show');



        //remove show class after timeout -- show will only leave the notification for 5 seconds

        setTimeout(function () {
            $('.notification').removeClass('show');
          }, 5000);
        });

  


    //create function to update hours
    function updateHour() {

        //get current hours
        var currentHour = moment().hours();

        //loop over scheduled times "time block rows"

        $('.time-block').each(function () {
            //create variable that can parse and split blockhour into the integer to be used to determine numerical hour
            var blockHour = parseInt($(this).attr('id').split('-')[1]);


        //check if we are in the past present or future using an if statement that compares block hour to current hour
            if (blockHour < currentHour) {
                $(this).addClass('past');
            } else if (blockHour === currentHour) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
            });
        }



     //invoke the update hour function ------ THIS IS BROKEN I NEED TO FIGURE OUT WHY THIS FUNCTION ISNT RUNNING
     updateHour();

    //set up variable to check if current time needs to be updated-- calling set interval and passing two arguments

    var interval = setInterval(updateHour, 15000);


    //load saved data from local storage. can we refactor this? 
    $(".time-block").each((i, item)=>{
        const $item = $(item);
        const $id = $item.attr("id")
        const fetched = localStorage.getItem($id);
        $item.children(".description").val(fetched);
    })
    // for (let hour = 9; hour <=17; hour +=1) {
    //     const fetched = localStorage.getItem(`hour-${hour}`);
    //     $(`#hour-${hour} .description`).val(fetched);
    // }

    /*
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
    */


    //display day and time on page
    $('#currentDay').text(moment().format('dddd, MMMM Do'));


  });


  