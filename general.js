let homeCountEl = document.querySelector(".home-score")
let guestCountEl = document.querySelector(".guest-score")

// let guestCountEl = document.getElementsByClassName("home-score")

let newScoreHome = 0
let newScoreGuest = 0

function incrementOneHome(){
    newScoreHome += 1
    homeCountEl.textContent = newScoreHome
}

function incrementTwoHome(){
    newScoreHome += 2
    homeCountEl.textContent = newScoreHome
}

function incrementThreeHome(){
    newScoreHome += 3
    homeCountEl.textContent = newScoreHome
}

function incrementOneGuest(){
    newScoreGuest += 1
    guestCountEl.textContent = newScoreGuest
}

function incrementTwoGuest(){
    newScoreGuest += 2
    guestCountEl.textContent = newScoreGuest
}

function incrementThreeGuest(){
    newScoreGuest += 3
    guestCountEl.textContent = newScoreGuest
}