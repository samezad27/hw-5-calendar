//FUNCTION will run the callback function once the HTML index file has loaded
$(document).ready(function () {
    //display day and time on page
    $('#currentDay').text(moment().format('dddd, MMMM Do'));

    //save clicks--jquery onclick function. Once we click this button it will run this callback function
    $('.saveBtn').on('click', function (){

        //set variables for time and description values at the time of the click
        var value = $(this).sibling('.description').val();
        var time =$(this).parent().attr('id');

        //save to local storage(only the users local browser) users won't see eachothers changes

        //notification of save to local storage

        //remove show class after timeout -- show will only leave the notification for 5 seconds

   
   
    });


    //create function to update hours

        //get current hours
        
        //loop over scheduled times "time block rows"

        //create variable that can parse blockhour into the integer

        //check if we are in the past present or future using an if statement that compares block hour to current hour

    //invoke the update hour function

    //set up variable to check if current time needs to be updated-- calling set interval and passing two arguments

    //load data from local storage

  });

