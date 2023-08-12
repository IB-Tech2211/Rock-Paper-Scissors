let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')



rock.addEventListener('click', playerChoiceHandler)
paper.addEventListener('click', playerChoiceHandler)
scissors.addEventListener('click', playerChoiceHandler)
let resultDiv = document.getElementById('results')

function displayImage(image){
   
    let img = document.createElement('img')
    let getImage = image
    getImage.src
   
}