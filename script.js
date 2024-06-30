let topButton = document.getElementById("top-button");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }



function addWorkExp() {
  document.getElementById("add-work-experience").onclick = function () {
    location.href = "/html/add-work-experience.html";
  };
}


const showPopup = document.querySelector('.submit-button');
const popupContainer = document.querySelector('.popup-container');
const closeBtn = document.querySelector('.close-btn');

showPopup.onclick = () => {
    popupContainer.classList.add('active');
}

closeBtn.onclick = () => {
    popupContainer.classList.remove('active');
}






