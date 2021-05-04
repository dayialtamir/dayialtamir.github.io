"use strict";

function validateForm(e){
  let isFormValid = true;                 // This variable is to keep track of any invalid entries


  /***************Validate facilitator********************/
  let elFacilitator = document.getElementById('facilitator');
  if (!validateRequired(elFacilitator)){
    isFormValid = false;
  }else{
    if (!validateFacilitatorFormat(elFacilitator)){              
      isFormValid = false;
    }
  }
  setErrorMessage(elFacilitator); // Display error message if any were found
  /******************************************************/


  /***************Validate last name********************/
  let elLastName = document.getElementById('lastName');
  if (!validateRequired(elLastName)){
    isFormValid = false;
  }else{
    if (!validateNameFormat(elLastName)){              
      isFormValid = false;
    }
  }
  setErrorMessage(elLastName);  // Display error message if any were found
  /****************************************************/


  /***************Validate first name******************/ 
  let elFirstName = document.getElementById('firstName');
  if (!validateRequired(elFirstName)){
    isFormValid = false;
  }else{
    if (!validateNameFormat(elFirstName)){              
      isFormValid = false;
     }
  }
  setErrorMessage(elFirstName); // Display error message if any were found
  /****************************************************/

  if (!isFormValid){
    e.preventDefault();   //Cancels the submission of the form
  }
}


function validateRequired(el){
  el.dataset.error = "";
  if (el.value === ""){
    el.dataset.error = "Please enter your " + el.dataset.field;
    el.focus();
    return false;
  } 
  return true;
}

function setErrorMessage(el){
  removeErrorMessage(el);  // I remove any previous error messages.
  displayErrorMessage(el); // Display error message if any were found
}

function displayErrorMessage(el){
  // This function displays the error message in a span element
  // I did this because the book recommended not having empty elements
  // I create the element when I need it.
  if (el.dataset.error !== ""){
    let newElement = document.createElement('span');
    newElement.className="error-msg";
    let newText = document.createTextNode(el.dataset.error);
    newElement.appendChild(newText);
    el.parentNode.appendChild(newElement);
  }
}

function removeErrorMessage(el){
  // This function removes the error messages
  let errorElement = el.nextSibling;
  if (errorElement){el.parentNode.removeChild(errorElement);}
}

function validateNameFormat(el){
  // I use this function to validate firstName and lastName inputs
  el.dataset.error = "";
  if (el.value.length === 1){
    el.dataset.error = "Your " + el.dataset.field + " must contain more than two (2) characters.";
    el.focus();
    return false;
  }else{
    let myRegEx = /^[A-Za-z]+$/;
    if (!myRegEx.test(el.value)){
      el.dataset.error = "Your " + el.dataset.field + " must contain only alpha characters.";
      el.focus();
      return false;
    }
  }
  return true;
}

function validateFacilitatorFormat(el){
  let myRegEx = /(^josh$)|(^fazil$)|(^chris$)/i;

  if (!myRegEx.test(el.value)){
    el.dataset.error = "Your " + el.dataset.field + " can only be Josh, Chris or Fazil.";
    el.focus();
    return false;
  }
  return true;
}

// I link my validateForm function to the submit event.
let elMyForm = document.getElementById('myForm');
elMyForm.addEventListener('submit', function(e){validateForm(e)} , false);




