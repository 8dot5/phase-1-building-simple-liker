// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {

const emptyHearts = document.querySelectorAll('span.like-glyph')
// const emptyHeartsEventListener = emptyHeart.addEventListener('DOMContentLoaded', () => callbackFn)

emptyHearts.forEach(emptyHeart => emptyHeart.addEventListener('click', (e) => handleLikeFn))

function handleLikeFn(e){
  console.log(e.target.emptyHeart)
  mimicServerCall()
  
}

  




})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
