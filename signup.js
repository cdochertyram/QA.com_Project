/*Start of function to validate form*/
function validateForm() {
  /*Create variables that find the 'name' value in the form */
  var validationfn = document.forms["myForm"]["firstname"].value;
  var validationsn = document.forms["myForm"]["surname"].value;
  var validationmail = document.forms["myForm"]["email"].value;
  var validationconf = document.forms["myForm"]["confirmemail"].value;
  var validationconfps = document.forms["myForm"]["confirmpassword"].value;
  var valpswd = document.forms["myForm"]["password"].value;
/*IF statements that ensure the code is only executed if accurate information is entered*/
  if (validationfn == "") {
    alert("Please enter your First Name.");
    return false;
  }
    else if (validationsn == "") {
    alert("Please enter your Surname.");
    return false;
    }
  else if (validationmail == "") {
    alert("Your email is incorrect.");
    return false; 
  }
  else if (validationconf != validationmail)
  {
    alert("You entered mismatching Email Addresses.");
    return false;
  }
  else if (validationconfps != valpswd)
    {
      alert("The passwords you entered do not match.");
      return false;
    }
  }
/*Returning false stops the code from executing.*/
/*End of function to validate form*/

/*jQuery to remove input fields by calling the Id*/

$('.submit').click(function() {
  var word = $('#userinput').word();
  $('#userinput').text(word);
});

var SignUp = function($scope) {
    $scope.message = "Sign Up";
}

/*AJAX*/
/*NODE*/
/*UNIT TEST*/