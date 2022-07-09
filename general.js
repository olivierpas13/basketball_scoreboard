let homeCountEl = document.querySelector(".home-score")
let guestCountEl = document.querySelector(".guest-score")

// let guestCountEl = document.getElementsByClassName("home-score")

let newScoreHome = 0
let newScoreGuest = 0

function incrementHome(number){
    newScoreHome += number
    homeCountEl.textContent = newScoreHome
}

function incrementGuest(number){
    newScoreGuest += number
    guestCountEl.textContent = newScoreGuest
}
