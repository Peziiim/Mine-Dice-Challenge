const image1 = document.querySelector(".img1")
const image2 = document.querySelector(".img2")
const parag = document.querySelector("#strength1")
const parag2 = document.querySelector("#strength2")
const text = document.querySelector("h1")
let randomNumber = Math.floor(Math.random() * 7);
let randomNumber2 = Math.floor(Math.random() * 7);
console.log(randomNumber)

if(randomNumber == 0)  {
    randomNumber = 1


} 

if (randomNumber2 == 0) {
    randomNumber2 = 1

}


if (randomNumber > randomNumber2) {
    text.textContent = "Player1 Won!!"
} else if(randomNumber2 > randomNumber) {
    text.textContent = "Player2 Won!!"
} else {
     text.textContent = "Draw!!"
}

parag.textContent = "Strength: " + randomNumber
parag2.textContent = "Strength: " + randomNumber2
image1.src = "./images/" + randomNumber + ".jpg"
image2.src = "./images/" + randomNumber2 + ".jpg"