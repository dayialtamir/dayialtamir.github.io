function addTwoNumbers(numOne, numTwo){
  return numOne + numTwo;
}

function startClaculator(){
  var userName = "", option = "";

  alert("Welcome to my JavaScript Calculator!");
  // This while forces the user to his name and not leave it blank
  // otherwise it will continue asking.
  while (userName === ""){
    userName = prompt("Please enter your name.").trim();
  } 
  alert("Welcome, " + userName + ".");

  // This while is to continue asking the user for two numbers to add until the
  // enter no.
  while (option !== "NO"){
    var numberOne = "", numberTwo = "";
    option = "";

    // This while forces the user to enter a number
    // otherwise it will continue asking.
    while (numberOne.trim() === "" || isNaN(numberOne)){
      numberOne = prompt("Enter the first number.").trim();
    }
    numberOne = Number(numberOne);

    // This while forces the user to enter a number
    // otherwise it will continue asking.
    while (numberTwo === "" || isNaN(numberTwo)){
      numberTwo = prompt("Eenter the second number.").trim();
    }
    numberTwo = Number(numberTwo);

    // Function call to add the two numbers.
    var result = addTwoNumbers(numberOne, numberTwo);
    alert("The sum of your two numbers is: " + result);

    if (result > 10) {
      alert("That is a big number.");
    } 
    else{
      alert("That is a small number.");
    }

    // This is to force the user to only type yes or no
    while (option !== "YES" && option !== "NO" ){
      option = prompt(userName + ", would you like to add two numbers again? (yes/no).").trim().toUpperCase();
    }
  }
  alert("Thank you for using my JavaScript Calculator. Have a nice day!");
}
