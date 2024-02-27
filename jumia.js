
const links = document.querySelectorAll('.selc-a');
const popUps = document.querySelectorAll('.pop-up');

links.forEach((link) => {
  const popupId = link.getAttribute('data-popup-id');
  const popup = document.getElementById(popupId);
  
  link.addEventListener('mouseover', () => {
    popup.classList.add('show');
    link.style.color = 'orange';
  });
  
  link.addEventListener('mouseout', () => {
    popup.classList.remove('show');
    link.style.color = 'grey';
  });
  
  popup.addEventListener('mouseover', () => {
    popup.classList.add('show');
  });
  
  popup.addEventListener('mouseout', () => {
    popup.classList.remove('show');
    link.style.color = 'grey';
  });
  
});

// ACCT AND HELP DROPDOWN ------------------------------

var chevOne = document.querySelector('.chev-1');
var acctBoard = document.querySelector('.drop-acct');
acctBoard.style.display = "none";


document.addEventListener('click', function(event) {
  if (!acctBoard.contains(event.target) && !chevOne.contains(event.target)) {
    acctBoard.style.display = 'none';
  }
});

chevOne.addEventListener('click', function() {
  acctBoard.style.display = acctBoard.style.display === 'none' ? 'block' : 'none';
});




var chevTwo = document.querySelector('.chev-2');
var helpBoard = document.querySelector('.drop-help');

helpBoard.style.display = "none";

document.addEventListener('click', function(event) {
 
  if (!helpBoard.contains(event.target) && !chevTwo.contains(event.target)) {
    helpBoard.style.display = 'none';
  }
});


chevTwo.addEventListener('click', function() {
  helpBoard.style.display = helpBoard.style.display === 'none' ? 'block' : 'none';
});





// mobile sidebar



const bars = document.querySelector('.fa-bars');
const sideBar = document.querySelector('.bars-sidebar');
const cancel = document.querySelector('.cancel-btn');

sideBar.style.display = "none";

document.addEventListener('click', function(event) {
 
  if (!sideBar.contains(event.target) && !bars.contains(event.target)) {
    sideBar.style.display = 'none';
  }
});


bars.addEventListener('click', function() {
  sideBar.style.display = sideBar.style.display === 'none' ? 'block' : 'none';
});

cancel.addEventListener('click', () => {
  sideBar.style.display = "none";
});













