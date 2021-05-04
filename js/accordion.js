const acc = document.getElementsByClassName("accordion");
let i;


/* In this code I loop through the elemenst of class accordion and assign 
   a function for the click event. The function assigns a class active and 
   if the style of the block is none (this is that it is collapes) it assigns the display
   to block to display the info otherwise it collapses it */
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;


        if (panel.style.display === "block") {
            panel.style.display = "none";

        } else {
            panel.style.display = "block";
        }

    }); 
  }
