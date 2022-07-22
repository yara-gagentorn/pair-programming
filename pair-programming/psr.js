let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')

//console.log(player2)

let scissors = document.getElementById('scissors')
let paper = document.getElementById('paper')
let rock = document.getElementById('rock')

let options = ''

scissors.onclick = () => {
  options = scissors.innerHTML
  compare()
  //console.log(options)
}

paper.onclick = () => {
  options = paper.innerHTML
  compare()
  //console.log(options)
}

rock.onclick = () => {
  options = rock.innerHTML
  compare()
  //console.log(options)
}

function randome() {
  return Math.floor(Math.random() * 3)
}

function compMove() {
  let arr = ['paper', 'scissors', 'rock']
  return arr[randome()]
}

function compare() {
  let comp = compMove()
  console.log('Computers move: ' + comp + ' Player move: ' + options)

  if (
    (comp === 'paper' && options === 'rock') ||
    (comp === 'rock' && options === 'scissors') ||
    (comp === 'scissors' && options === 'paper')
  ) {
    console.log('Computer wins!')
  } else if (comp === options) {
    console.log('DRAW')
  } else console.log('You win!')
}

//console.log(comp)
