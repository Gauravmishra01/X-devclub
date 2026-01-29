/**
 * Popup Modal Functionality
 * Handles the "Read More" popup modal interactions
 */
document.addEventListener("DOMContentLoaded", function () {
  // Get the modal and button elements
  const modal = document.getElementById("aboutPopup");
  const btn = document.getElementById("readMoreBtn");
  const span = document.querySelector(".close-popup");

  // When the user clicks the button, open the modal
  btn.onclick = function (e) {
    e.preventDefault();
    modal.style.display = "flex";
  };

  // When the user clicks on (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
