let httpRequest; 
let elContent = document.getElementById('tbl-content');


function makeHTTPRequest(e){
  // Create new request object
  httpRequest = new XMLHttpRequest();
  
  if (!httpRequest){
    displayErrorMessage(elContent, "Exiting: Cannot create an XMLHttpRequest instance.");
    return false;
  }

  httpRequest.onreadystatechange= generateData;
  httpRequest.open('GET', 'data/data.json');
  httpRequest.send();
}


function generateData(){
  // Recieves response from the server
  if (httpRequest.readyState === XMLHttpRequest.DONE){    // Becuase I am using the onreadystatechande, 
                                                          // which fires during the diffent states, 
                                                          // I ask if it is DONE to process the response.
    if (httpRequest.status === 200){                      // 200 inidicates successful AJAX call
      generateTable(JSON.parse(httpRequest.responseText));
    }
    else{
      displayErrorMessage(elContent, "There was a problem with the request.");
    }
  }
}


function generateTable(jsonObj){
  let newContent ="";

  // Build the table header
  newContent = '<table><caption>My College Degrees</caption><thead><tr>';
  for(let key in jsonObj.my_college_degrees[0].degree) {
    newContent += '<th class="column">' + key.substring(0,1).toLocaleUpperCase() + key.substring(1) + '</th>';
  }
  newContent += '</tr></thead><tbody>';
  
  // Build the table body
  for (let i = 0; i < jsonObj.my_college_degrees.length; i++){
    let currentRow = jsonObj.my_college_degrees[i].degree;
  
    newContent += '<tr><td>' + currentRow.school + '</td>';
    newContent += '<td>' + currentRow.major + '</td>';
    newContent += '<td>' + currentRow.type + '</td>';
    newContent += '<td>' + currentRow.year + '</td></tr>';
  }
  newContent += '</tbody></table>';

  // Display new content on page
  elContent.innerHTML=newContent;
}

function displayErrorMessage(el, msg){
  removeErrorMessage(el);
  let newElement = document.createElement('p');
  newElement.className="error-msg";
  let newText = document.createTextNode(msg);
  newElement.appendChild(newText);
  el.parentNode.appendChild(newElement);
}

function removeErrorMessage(el){
  // This function removes the error messages
  let errorElement = el.nextSibling;
  if (errorElement){el.parentNode.removeChild(errorElement);}
}

// I link my validateForm function to the submit event.
let elMyForm = document.getElementById('myForm');
elMyForm.addEventListener('click', function(e){makeHTTPRequest(e)} , false);