var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab


function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").setAttribute("disabled", "disabled");
    document.getElementById("nextBtn").innerHTML = "Submit";

  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function validateName() {
  // This function deals with validation of the username field
  const a = document.getElementById("uname").value;
  const alphanum = /^[0-9a-zA-Z]+$/;
  const nameResult = alphanum.test(a);
    if (nameResult == false) {
      // add "valid" to the field:
      alert("Please enter a valid username using only alphanumeric characters");
      // and return the invalid status
      document.getElementById("uname").className += " invalid";
      return false;
    }
  // If the entry is blank or invalid, mark the step as finished and valid:
      {
    document.getElementById("uname").className += " valid";
    return true;
  }
  // return the valid status UPDATE Progress bar here
}

function validateEmail() {
  // This function deals with validation of the email field
//  if (document.getElementById("nextBtn").innerHTML == "Next") {
    const b = document.getElementById("emailAdd").value;
    const emailRGEX = /\S+@\S+\.\S+/;
    const emailResult = emailRGEX.test(b);
      if (emailResult == false) {
        // cue alert:
        alert("Please enter a valid email address");
        // and return the invalid status
        document.getElementById("emailAdd").className += " invalid";
        return false;
      }
    // If the entry passes test, mark the step as finished and valid:
        {
      document.getElementById("emailAdd").className += " valid";
      return true;
    }
  // return the valid status UPDATE Progress bar here
 // }
}

function validateNumb() {
  // This function deals with validation of the form fields
  const c = document.getElementById("numberCent").value;
  const numberRGEX = /^[1-9][0-9]?$|^100$/;
  const numberResult = numberRGEX.test(c);
    if (numberResult == false) {
      // cue alert:
      alert("Please enter an integer between 0 and 100");
      // and return the invalid status
      document.getElementById("numberCent").className += " invalid";
      return false;
    }
  // If the entry passes test, mark the step as finished and valid:
      {
    document.getElementById("numberCent").className += " valid";
    return true;
  }
  // return the valid status UPDATE Progress bar here
}

function validateSelect() {
 // This function deals with validation of the form fields
  const d = document.getElementById("selectWisely").value;

    if (d == "") {
      // cue alert:
      alert("Please select: I am ready to submit my information");
      // and return the invalid status
      document.getElementById("selectWisely").className += " invalid";
      return false;
    }
  // If the entry passes test, mark the step as finished and valid:
      {
    document.getElementById("selectWisely").className += " valid";
    document.getElementById('nextBtn').removeAttribute('disabled');
    return true;
  }
  // return the valid status UPDATE Progress bar here
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

function progressMade() {

  var progressWidth = (document.getElementsByClassName("completedFields").length)/(document.getElementsByClassName("totalFields").length)*100;
  document.getElementById("progressBar").value = progressWidth;
}