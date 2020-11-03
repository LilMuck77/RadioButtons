$(document).ready(function ()
{
$("form").submit(greetingsRank);

function greetingsRank(event){
    //prevent form from flashing and resetting
    event.preventDefault();

    var selectedRadioButton = $("input[name=rank]:checked").val();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var fullGreeting = selectedRadioButton + " " + firstName
    + " " + lastName;


    $("#greeting").text(fullGreeting);
}


});

