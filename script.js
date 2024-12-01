window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.transition = "opacity 0.5s";
  preloader.style.opacity = 0;

  setTimeout(() => {
    preloader.style.display = "none";
  }, 500); // Matches the opacity transition
});


function toggleReadMore() {
    const extraInfo = document.getElementById("extra-info");
    const readMoreLink = document.getElementById("read-more");

    if (extraInfo.style.display === "none") {
        extraInfo.style.display = "block";
        readMoreLink.innerText = "Read Less";
    } else {
        extraInfo.style.display = "none";
        readMoreLink.innerText = "Read More";
    }
}



function tempclosePopup() {
    document.querySelector('.temp-name').style.display = 'none';
  }
  
  // Show popup on page load
  window.onload = function () {
    document.querySelector('.temp-name').style.display = 'flex';
  };



  function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.toggle('hidden');
  }


