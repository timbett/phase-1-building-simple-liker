// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorMessage = document.getElementById('modal').classList.add('hidden')
const heartClicked = (e) => {

  mimicServerCall()
    .then(() => {
      if (e.target.textContent == EMPTY_HEART) {
        e.target.innerHTML = FULL_HEART
        e.target.classList.add('activated-heart')
      } 
      {
        e.target.innerHTML = EMPTY_HEART
        e.target.classList.remove('activated-heart')
      }

    })
    .catch(() => {
      errorMessage.classList.remove('hidden')
      setTimeout(()=> {
        errorMessage.classList.add('hidden')
      }, 3000)
    })

}

let heartsIcon = document.getElementsByClassName('like-glyph')
for (let hearts of heartsIcon) {
  hearts.addEventListener('click', heartClicked)
}




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
