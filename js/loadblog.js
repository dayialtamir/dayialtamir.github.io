
/* This function calls the function that creates an AJAX 
   request to load the HTML in the blog.html */
function loadBlog(e,obj){
  e.preventDefault();

  let url = obj.href;
  makeHTTPRequestGet(url);
}


// I link my loadBlog function to the click event.
let elBlog1 = document.getElementById('blog1');
elBlog1.addEventListener('click', function(e){loadBlog(e,elBlog1)} , false);

let elBlog2 = document.getElementById('blog2');
elBlog2.addEventListener('click', function(e){loadBlog(e,elBlog2)} , false);
