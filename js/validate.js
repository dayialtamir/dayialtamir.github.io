"use strict";

window.onload= function(){
  // I get what was save previously from the local storage
  getLocalStorage();
}

/******************************* Code to validate data entry  ***********************************/ 

function validateForm(e){
  let isFormValid = true;                 // This variable is to keep track of any invalid entries

  /***************Validate Comments******************/ 
  let elComment = document.getElementById('comments');
  if (!validateRequired(elComment)){
    isFormValid = false;
  }else{
    if (!validateCommentFormat(elComment)){              
      isFormValid = false;
      }
  }
  setErrorMessage(elComment); // Display error message if any were found
  /****************************************************/

  /***************Validate email******************/ 
  let elEmail = document.getElementById('email');
  if (!validateRequired(elEmail)){
    isFormValid = false;
  }else{
    if (!validateEmailFormat(elEmail)){              
      isFormValid = false;
     }
  }
  setErrorMessage(elEmail); // Display error message if any were found
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

  e.preventDefault();   //Cancels the submission of the form

  if (isFormValid){   // If no errors were found then call register.php

  
    saveLocalStorage()
    // This works when I run my code in my localhost but in github it does not becuase
    // They don't allow post requests.
    makeHTTPRequestPost('php/register.php');
    //makeHTTPRequestGet('php/register.php');


  }
}

function saveLocalStorage(){
    // Save to windows.localStorage
    let elFirstName = document.getElementById('firstName');
    localStorage.setItem("firstName", elFirstName.value);
    let elLastName = document.getElementById('lastName');
    localStorage.setItem("lastName", elLastName.value);
    let elEmail = document.getElementById('email');
    localStorage.setItem("email", elEmail.value);
    let elComment = document.getElementById('comments');
    localStorage.setItem("comment", elComment.value);
}

function getLocalStorage(){
  let elFirstName = document.getElementById('firstName');
  elFirstName.value = localStorage.getItem("firstName");
  let elLastName = document.getElementById('lastName');
  elLastName.value = localStorage.getItem("lastName");
  let elEmail = document.getElementById('email');
  elEmail.value = localStorage.getItem("email");
  let elComment = document.getElementById('comments');
  elComment.value = localStorage.getItem("comment");
}


function validateRequired(el){
  el.dataset.error = "";
  if (el.value === ""){;
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


function validateEmailFormat(el){
  el.dataset.error = "";
  let myRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!myRegEx.test(el.value)){
    el.dataset.error = "Your " + el.dataset.field + " must be in the following format youremail@domain.com.";
    el.focus();
    return false;
  }
  return true;
}

function validateCommentFormat(el){
  el.dataset.error="";
  // I added this to make sure they do not enter html tags in the comments
  let myRegEx = /(<([^>]+)>)/gi;
  if (myRegEx.test(el.value)){
    el.dataset.error = "Your " + el.dataset.field + " should not include HTML elements.";
    el.focus();
    return false;
  }
  return true;

}


// I link my validateForm function to the submit event.
let elMyForm = document.getElementById('myContactForm');
elMyForm.addEventListener('submit', function(e){validateForm(e)} , false);









