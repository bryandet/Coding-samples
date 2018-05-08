var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab
const group = [validateName(), validateEmail(), validateNumb(), validateSelect()]

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
  var x, i, y, valid = true;
  x = document.getElementsByClassName("tab");

  // A loop that checks every input field in the current tab:
  for (i = 0; i < group.length; i++) {
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
  var valid = true;
  const a = document.getElementById("uname").value;
  const nameList = document.getElementById("uname");
  const alphanum = /^[0-9a-zA-Z]+$/;
  const nameResult = alphanum.test(a);
    if (nameResult == false) {

      alert("Please enter a valid username using only alphanumeric characters");
      document.getElementById("uname").value = "";
      //document.getElementById('nextBtn').disabled = true;
      // add an "invalid" class to the field:
      }

function validateEmail() {
    var valid = true;
    const b = document.getElementById("emailAdd").value;
    const emailList = document.getElementById("emailAdd");
    const emailRGEX = /\S+@\S+\.\S+/;
    const emailResult = emailRGEX.test(b);
      if (emailResult == false) {
        // cue alert:
        alert("Please enter a valid email address");
        document.getElementById("emailAdd").value = "";
        //document.getElementById('nextBtn').disabled = true;
        // and return the invalid status
        }
       }


function validateNumb() {
  var valid = true;
  const c = document.getElementById("numberCent").value;
  const numberList = document.getElementById("numberCent");
  const numberRGEX = /^[1-9][0-9]?$|^100$/;
  const numberResult = numberRGEX.test(c);
    if (numberResult == false) {
      // cue alert:
      alert("Please enter an integer between 0 and 100");
      document.getElementById("numberCent").value = "";
      // and return the invalid status
      //numberList.classList.add("invalid");
      //numberList.classList.remove("finish");
     }
  }

function validateSelect() {
 // This function deals with validation of the form fields
  var valid = true;
  const d = document.getElementById("selectWisely").value;
  const selectList = document.getElementById("selectWisely");
    if (d != "confirmReady")    {    
      alert("Please select: I am ready to submit my information");
      // and return the invalid status
       }
    // If the valid status is true, mark the step as finished and valid:
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
