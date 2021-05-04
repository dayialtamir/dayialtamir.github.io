    /* This script is to change the class for the Nav bar
     to the class that will make my nav bar collapse.
     The response class will make my nav bar anchor elements
     to blocks */
    function myMenuFunction() {
      let x = document.getElementById("main-menu");

      if (x.className === "") {
        x.className += "responsive";
      } else {
        x.className = "";
      }
    }

    