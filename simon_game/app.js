/* 
[] Create 4 colored buttons & sounds for each button pressed
[] computer plays a random color increasing by one each round
[] each round creates an array adding one new move to the array
[] player needs to follow computer in the same sequence each round
[] player's point are equivalent to the round they make it to
[] if player is unable to replay the sequence they it is game over 
[] make a sound if player loses
[] ask if player would like to play again
[] figure out how to remove a color from the previous one
*/


// console.log('hi')

const computerSelections = [];
const playerMove = [];
const colors = ['green', 'blue', 'red', 'yellow']





// got sound inspiration from https://www.youtube.com/watch?v=E-v4SSCG6i4
colors.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.id = sound;
    btn.innerText = sound;
    
    btn.addEventListener('click', () =>{
        stopSongs();
        document.getElementById(sound).play();
    })
    
    document.getElementById('buttons').appendChild(btn);
})

function stopSongs() {
    colors.forEach((sound) =>{
        const song = document.getElementById(sound);
        
        song.pause();
        song.currentTime = 0;
    })
}


const computerMove = () => {
    const randomColor = colors[Math.floor(Math.random() * (colors.length))]
    computerSelections.push(randomColor);
    console.log(computerSelections)
    // https://stackoverflow.com/questions/7749090/how-to-use-setinterval-function-within-for-loop
    let interval = 1000; //one second
    computerSelections.forEach((selection, index) => {
      setTimeout(() => {  
        document.querySelector('#' + selection).style=`background-color:${selection}`
      }, index * interval)
      setTimeout(clearColors, 800 + (index * interval))
    })
    
    
} 
// const banana = (selection, index, interval) => {
//     setTimeout(() => {  
//         document.querySelector('#' + selection).style=`background-color:${selection}`
//       }, index * interval)

// }


const clearColors = () => {
    // Find all the div with that class name 
    // change the color back to white
    document.getElementById('green').style.backgroundColor = 'white';
    document.getElementById('red').style.backgroundColor = 'white';
    document.getElementById('yellow').style.backgroundColor = 'white';
    document.getElementById('blue').style.backgroundColor = 'white';
}

const playButton = document.querySelector('#play')
playButton.addEventListener('click', () =>{
    computerMove()
})
console.log(playButton)

// inside playerGuess. when player selects a color it pushes that color in the player guess array
// after its pushed you check to see if the player guess array is the same length as computer length
// if it is the same then compare playermove[i] to computerselection[i] are equal do nothing
// else game lost
// after for loop call the computer function for another move



const playerGuess = (e) => {
    playerMove.push(e.target.id)
    console.log(playerMove)

}


let allButtons = document.getElementsByClassName('btn') 
for (i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', playerGuess)
}

// I need to check if player sequence matches computer sequence
const seqCheck = () => {
    if (playerMove.length == computerSelections.legth){
        console.log
    }
}