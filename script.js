function displayEmail() {
    const email = document.querySelector('.email');
    email.textContent = 'guo.eddy023@gmail.com';
  }

function hideEmail() {
    const email = document.querySelector('.email');
    email.textContent = 'Email';
}


document.addEventListener('DOMContentLoaded', () => {
    const email = document.querySelector('.email');
    email.addEventListener('click', displayEmail);
    email.addEventListener('mouseout', hideEmail);
});


let topButton = document.getElementById("top-button");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }