/************************HTTP Request code ****************************/
let httpRequest;
let elContent = document.getElementById('display-content');

/* Since I used this function in three different places I decided to create a funciton
   to reuse them and pass the url. */
function makeHTTPRequestPost(myUrl) {
  // Create new request object
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    alert("Exiting: Cannot create an XMLHttpRequest instance.");
    return false;
  }

  const detail = new FormData(elMyForm);
  httpRequest.onreadystatechange = getData;
  //let detail = serialize(document.forms[0]); // Serialize Form Data
  httpRequest.open('POST', myUrl, true);
  //httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  //httpRequest.send('firstName=Dayanara');
  httpRequest.send(detail);
}

function makeHTTPRequestGet(myUrl) {
  // Create new request object
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    alert("Exiting: Cannot create an XMLHttpRequest instance.");
    return false;
  }

  httpRequest.onreadystatechange = getData;
  //let detail = serialize(document.forms[0]); // Serialize Form Data
  httpRequest.open('GET', myUrl, true);
  
  //httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  //httpRequest.send('firstName=Dayanara');
  httpRequest.send();

}

function getData() {
  // Recieves response from the server
  if (httpRequest.readyState === XMLHttpRequest.DONE) { // Because I am using the onreadystatechange, 
    // which fires during the diffent states, 
    // I ask if it is DONE to process the response.
    if (httpRequest.status === 200) { // 200 inidicates successful AJAX call
      elContent.innerHTML = httpRequest.responseText;
    }
    else {
      alert("There was a problem with the request." + httpRequest.status);
    }
  }
}

/**************************End HTTP Request code *****************/
