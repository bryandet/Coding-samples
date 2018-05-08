var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

var prevButton = document.getElementById("prevBtn");
var nextButton = document.getElementById("nextBtn");
var cancButton = document.getElementById("cancBtn");

var firstQuestion = document.getElementById("uname");
var secondQuestion = document.getElementById("emailAdd");
var thirdQuestion = document.getElementById("numberCent");
var fourthQuestion = document.getElementById("selectWisely");


prevButton.onclick = function() {
  fwdBack(-1);
}

nextButton.onclick = function() {
  fwdBack(1);
}

cancButton.onclick = function() {
  document.getElementById("regForm").reset();
}

firstQuestion.onchange = function() {
  validateName();
  progressMade ();
}

secondQuestion.onchange = function() {
  validateEmail();
  progressMade ();
}

thirdQuestion.onchange = function() {
  validateNumb();
  progressMade ();
}

fourthQuestion.onchange = function() {
  validateSelect();
  progressMade ();
}


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
}

function fwdBack(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");

  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && x[currentTab] == x[0] && ((firstQuestion.classList.contains("invalid") || secondQuestion.classList.contains("invalid")) ||
                                         (firstQuestion.value == "" || secondQuestion.value == ""))) 
    {return false;}
  /*if (n == 1 && x[currentTab] == x[0] && (firstQuestion.classList.contains("finished") && secondQuestion.classList.contains("finished"))) 
    document.getElementById('nextBtn').disabled = false;*/
  if (n == 1 && x[currentTab] == x[1] && ((thirdQuestion.classList.contains("invalid") || fourthQuestion.classList.contains("invalid")) ||
                                         (thirdQuestion.value == "" || fourthQuestion.value == ""))) 
    {return false;}

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

function validateName() {
  // This function deals with validation of the username field
  const a = document.getElementById("uname").value;
  const nameList = document.getElementById("uname");
  const alphanum = /^[0-9a-zA-Z]+$/;
  const nameResult = alphanum.test(a);
    if (nameResult == false) {
      document.getElementById("uname").value = "Please enter a valid username using only alphanumeric characters";
      // adjust and return the invalid status
      nameList.classList.add("invalid");
      nameList.classList.remove("finished");
          progressMade();
      return false;
    } if (nameResult == true) {
  // If the entry passes tests, mark the step as finished and valid:
          nameList.classList.add("finished");
          nameList.classList.remove("invalid");
      return true;
    }

}

function validateEmail() {
    const b = document.getElementById("emailAdd").value;
    const emailList = document.getElementById("emailAdd");
    const emailRGEX = /\S+@\S+\.\S+/;
    const emailResult = emailRGEX.test(b);
      if (emailResult == false) {
        // cue alert:
        document.getElementById("emailAdd").value = "Please enter a valid email address";
        // adjust and return the invalid status
        emailList.classList.add("invalid");
        emailList.classList.remove("finished");
        return false;
      } 
        // If the entry passes tests, mark the step as finished and valid:
        emailList.classList.add("finished");
        emailList.classList.remove("invalid");
        return true;
}


function validateNumb() {
  const c = document.getElementById("numberCent").value;
  const numberList = document.getElementById("numberCent");
  const numberRGEX = /^[1-9][0-9]?$|^100$/;
  const numberResult = numberRGEX.test(c);
    if (numberResult == false) {
      // cue alert:
      document.getElementById("numberCent").value = "Please enter an integer between 0 and 100";
      // adjust and return the invalid status
      numberList.classList.add("invalid");
      numberList.classList.remove("finished");
      return false;
    } 
      // If the entry passes tests, mark the step as finished and valid:
      numberList.classList.add("finished");
      numberList.classList.remove("invalid");
      return true;
}

function validateSelect() {
 // This function deals with validation of the select box field
  const d = document.getElementById("selectWisely").value;
  const selectList = document.getElementById("selectWisely");
    if (d == "confirmReady")    {   
      // If the entry passes tests, mark the step as finished and valid:
      selectList.classList.add("finished");
      selectList.classList.remove("invalid");
      return true; 
    } {
      alert("Please select: I am ready to submit my information");
      // adjust and return the invalid status
      selectList.classList.add("invalid");
      selectList.classList.remove("finished");
      return false;
    } 
      
}


function progressMade() {

  var progressWidth = (document.getElementsByClassName("finished").length)/(document.getElementsByClassName("question").length)*100;
  document.getElementById("progressBar").value = progressWidth;
}

// new stuff starts here

async function getSimilarUser(username) {
  let response = await fetch(`https://happy-css.com/api/users?limit=1&name=${username}`)
  return response.json()
}

async function isUserValid(target) {
  let username = target.value
  let users = await getSimilarUser(username)
  if (users.length) {
    let existingUsername = users[0].name
    if (existingUsername == username) {
      target.setCustomValidity(`The user "${username}" already exists`)
      firstQuestion.classList.add("invalid");
      firstQuestion.classList.remove("finished");
      return false
    }
  }
  target.setCustomValidity('')
  return true
}

firstQuestion.addEventListener('input', async (e)=>{
  let isValid = await isUserValid(e.target)
  // optionally, we can re-use the return value if we need to.
  e.target.reportValidity()
})