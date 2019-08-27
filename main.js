//LOADER
window.addEventListener("load", function() {
  const loader = document.querySelector('.loader');
  loader.className += " hidden";
});

//CAROUSEL SCRIPT
const track = document.querySelector('.carousel-track')
const cards = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button-right');
const previousButton = document.querySelector('.carousel-button-left');
const dotNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotNav.children);
const menuNav = document.querySelector('.dropdown-list'
)
const navs = Array.from(menuNav.children);
const cardWidth = cards[0].getBoundingClientRect().width;

//arrange cards next to one another
const setCardPosition = (card, index) => {
  card.style.left = cardWidth * index + "px";
};
cards.forEach(setCardPosition);

const moveToCard = (track, currentCard, targetCard) => {
  track.style.transform = 'translateX(-' + targetCard.style.left + ')';
  currentCard.classList.remove('current-card');
  targetCard.classList.add('current-card');
}

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-card');
  targetDot.classList.add('current-card');
}


const hideShowArrows = (cards, previousButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    previousButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
  } else if (targetIndex === cards.length - 1){
    previousButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
  } else {
    previousButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
  }
};

//when i click left, card moves left.
previousButton.addEventListener('click', e => {
  const currentCard = track.querySelector('.current-card');
  const previousCard = currentCard.previousElementSibling;
  const currentDot = dotNav.querySelector('.current-card');
  const previousDot = currentDot.previousElementSibling;
  const previousIndex = cards.findIndex(card => card === previousCard);
  moveToCard(track, currentCard, previousCard);
  updateDots(currentDot, previousDot);
  hideShowArrows(cards, previousButton, nextButton, previousIndex);
})

//when i click right, card moves right.
nextButton.addEventListener('click', e => {
  const currentCard = track.querySelector('.current-card');
  const nextCard = currentCard.nextElementSibling;
  const currentDot = dotNav.querySelector('.current-card');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = cards.findIndex(card => card === nextCard);
  moveToCard(track, currentCard, nextCard);
  updateDots(currentDot, nextDot);  
  hideShowArrows(cards, previousButton, nextButton, nextIndex);
})

//when i click dropdown nav, move to that slide
menuNav.addEventListener('click', e => {
  //what nav was clicked 
  const targetNav = e.target.closest('button');

  if (!targetNav) return;

  const currentCard = track.querySelector('.current-card');
  const currentNav = menuNav.querySelector('.current-card');
  const targetIndex = navs.findIndex(nav => nav === targetNav);
  console.log(targetIndex);
  const targetCard = cards[targetIndex];

  moveToCard(track, currentCard, targetCard);
  updateDots(currentNav, targetNav);hideShowArrows(cards, previousButton, nextButton, targetIndex);
})

//when i click nav indicators, move to that slide.
dotNav.addEventListener('click', e => {
  //what indicator was clicked on?
  const targetDot = e.target.closest('button');

  if (!targetDot) return;

  const currentCard = track.querySelector('.current-card');
  const currentDot = dotNav.querySelector('.current-card');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetCard = cards[targetIndex];
  
  moveToCard(track, currentCard, targetCard);
  updateDots(currentDot, targetDot);
  hideShowArrows(cards, previousButton, nextButton, targetIndex);
})

// HAMBURGER MENU SCRIPT
$(".hamburger").click(function() {
  $(this).toggleClass("is-active");
  $(".dropdown-menu, .active").toggleClass("dropdown-menu active");
});

// BACKGROUND SLIDE SCRIPT 
//practice jquery

//open infographocs
$(".wacky-button").click(function() {
  $(".infographics").toggleClass("info-active");
})

//show secret button
$(".serious-button").click(function() {
  $(".secret-button").toggleClass("show");
});

//show secret content
$(".secret-button").click(function() {
  $(".secret-container").toggleClass("info-active");
});


//practice js this time

//close infographics
document.querySelector('.close-button').addEventListener('click', function() {
  document.querySelector('.infographics').classList.remove('info-active');
});

//close secret content
document.querySelector('.close-secret').addEventListener('click', function() {
  document.querySelector('.secret-container').classList.remove('info-active');
});


//contact form submit 
$(".submit-button").click(function(event) {
  event.preventDefault();

  const email = $('.email').val();
  const name = $('.name').val();
  const message = $('.message').val();
  const status = $('.status');
  status.empty();

  if (email.includes('@')) {
    status.append('<p>Message sent!<p>');
  } else {
    event.preventDefault();
    status.append('<p>Invalid e-mail address<p>');
  }
})



