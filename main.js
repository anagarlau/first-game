
 let c = document.getElementById('canvas');
 let ctx = c.getContext('2d')
 let tile = 50;
 let score = 0;
 let gameBar = document.getElementById('gameBar')
 let restartButton = document.getElementById('startGame');
 let hS = document.getElementById('highScore');
 let time = 10;
 //make map

let level1= "001111111111111000000101010001101111101010101100000000000101111111101111101100000000010101111110101110111101000100000001101110101011101100000101010000111111111111102"

let firstLevel = new Map(level1);
 
 

 let map =  
 [[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1], 
 [0,0,0,0,1,0,0,0,1,0,0,0,1,0,1],
 [1,0,1,1,1,1,1,0,1,0,1,1,1,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
 [1,0,1,1,1,0,1,1,1,0,1,0,1,0,1],
 [1,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
 [1,1,1,1,1,1,1,1,1,0,1,1,1,0,1],
 [1,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
 [1,0,1,0,1,1,1,1,1,1,1,1,1,0,1],
 [1,0,1,0,0,0,0,0,1,0,0,0,0,0,0],
 [1,1,1,1,1,1,1,1,1,1,1,1,1,0,2]]

  let collBox = [];
 let mapLength = map[0].length;
 let mapHeight = map.length;
 let username = ''

function randomMilk(map){
  let randomCol = Math.floor(Math.random() * (mapHeight-1));
  let randomRow = Math.floor(Math.random() *(mapLength-1));

  console.log(randomCol)
  console.log(randomRow)

  while(map[randomCol][randomRow] !== 0){
    randomCol = Math.floor(Math.random() * (mapHeight-1));
    randomRow = Math.floor(Math.random() * (mapLength-1));
    // console.log(randomCol)
    // console.log(randomRow)
  } 
  map[randomCol][randomRow] = 3
}
 
function randomPoptart(map){
  let randomCol = Math.floor(Math.random() * (mapHeight-1));
  let randomRow = Math.floor(Math.random() * (mapLength-1));

  console.log(randomCol)
  console.log(randomRow)

  while(map[randomCol][randomRow] !== 0){
    randomCol = Math.floor(Math.random() * (mapHeight-1));
    randomRow = Math.floor(Math.random() * (mapLength-1));

    console.log(randomCol)
    console.log(randomRow)
  } 
  map[randomCol][randomRow] = 4;
}

function resetMatrix(map){
  for (let row=0; row<mapHeight-1; row++){
    for(let col=0; col<mapLength-1; col++){
      if(map[row][col] === 4 || map[row][col] ===3){
        map[row][col] = 0;
      }
    }
  }
}

  //collision box as new array to be populated when the map is draw with object and status





 //obstacle tiles
 let myTile = new Image()
myTile.src = './assets/tile1.png'

//the kitchen floor
let floor = new Image()
floor.src = './assets/kitchen.jpg'
//mouse
let mouse = new Image();
mouse.src = './assets/mouse2.jpg'

//cat
let cat = new Image()
cat.src = './assets/cat.png'
//sound 
let miau = new Audio()
miau.src = './assets/miau.wav'

let victoryMiau = new Audio();
victoryMiau.src = './assets/Nyan_cat.mp3'

let slurp = new Audio();
slurp.src = './assets/slurp.wav';

let obstacle = new Image();
obstacle.src = './assets/milk.png'

let obstacle1 = new Image();
obstacle1.src = './assets/poptart.png'


function resetTiles(){
  myTile.src = './assets/tile1.png'
  floor.src = './assets/kitchen.jpg'
  mouse.src = './assets/mouse2.jpg'
  obstacle.src = './assets/milk.png'
  obstacle1.src = './assets/poptart.png' 
}


function getPlayerName(){
  username = prompt('Insert name')
}

function showHighScore(){
  
  hS.style.visibility = 'visible'
  // hS.innerText= 'Highest Score' + '=>' + ' '
  let max = 0;
  let maxIndex = 0;
  for(let i=0; i<localStorage.length; i++){
  
    if(max < localStorage.getItem(localStorage.key(i))){
      max = localStorage.getItem(localStorage.key(i))
      maxIndex = i
    }
    // hS.innerText +=  localStorage.key(i) + ': '
    //  + localStorage.getItem(localStorage.key(i));
    // //do i want history?
    // hS.innerHTML += '</br>'
  }
  hS.innerText += localStorage.key(maxIndex) + '' + localStorage.getItem(localStorage.key(maxIndex))  ;
}

function addToHighScore(){
  localStorage.setItem(username, score);
  showHighScore()
}



//2 iesirea
function drawMap(m){
for (let i=0; i < m.length; i++){
    collBox.push([]) //empty array into map
    for (let j=0; j < m[i].length; j++){
        if(m[i][j] === 1){
        ctx.beginPath();
        // ctx.fillStyle = "#000"; 
        // ctx.fillRect(j*tile, i*tile, tile, tile) 
        
        ctx.drawImage(myTile, j*tile, i*tile, tile, tile);
      
      }else if(m[i][j] === 2){
        
        ctx.beginPath();
        ctx.drawImage(mouse, j*tile, i*tile, tile, tile)
        
      }else if(m[i][j] === 3){
        ctx.beginPath();
        ctx.drawImage(obstacle, j*tile, i*tile, tile, tile)
     }else if(m[i][j] === 4){
          ctx.beginPath();
          ctx.drawImage(obstacle1, j*tile, i*tile, tile, tile)
          } 
      else{
        ctx.beginPath();
        ctx.drawImage(floor,j*tile, i*tile, tile, tile)
      } let a = {x:j*tile, y:i*tile, status: 0}
      if(m[i][j] === 1){
        a.status = 1
      }else if(m[i][j] === 2){
        a.status = 2
      }else if(m[i][j] === 3){
        a.status = 3
      }else if(m[i][j] === 4){
        a.status = 4
      }else{
        a.status = 0
      }
      collBox[i].push(a)
     }
   }
}




function drawPlayer(x,y){
        ctx.beginPath();
        // ctx.fillStyle = "red"; 
        // ctx.fillRect(x, y, tile, tile) 
        ctx.drawImage(cat, x, y, tile, tile)
}


//object for player

let player = {
    x: 0,
    y: 0,
    newX: 0,
    newY: 0}

//move Player acc to col and row
function move(x,y){
  ctx.clearRect(0,0, mapLength*tile, mapHeight*tile); //clear canvas in PX!
  drawMap(map); //redraw Map
  drawPlayer(x,y); //drawPlayer
 
  player.x = player.newX;
  player.y = player.newY;
 
}



//using collBox iteration if 1 2 or 0
function checkCollision(){
for (let i=0; i< mapHeight; i++){
  for (let j=0; j< mapLength; j++){
  //  console.log(collBox[i][j.status])
    let b = collBox[i][j]
    if (player.newX === b.x && player.newY === b.y){
      if(b.status === 1){
        miau.play()
        console.log('Hit rock')
      }else if(b.status === 2){
        console.log('WIN')
        score = score + 20
        document.querySelector('.gameScore span').innerText = score
        document.querySelector('.winner-game').style.visibility = 'visible';
        //  addToHighScore()
        //  victoryMiau.play()
         clearInterval(interval)
         stopGame()
      }else if(b.status === 3){
        // score = score + 5
         move(player.newX, player.newY)
        score = score + 5
        document.querySelector('.gameScore span').innerText = score
        slurp.play();
        b.status = 0;
        obstacle.src = floor.src;
      }else if(b.status === 4){
        console.log('lala')
        move(player.newX, player.newY)
        score = score + 5
        document.querySelector('.gameScore span').innerText = score
        slurp.play();
        b.status = 0;
        obstacle1.src = floor.src;
      
      }else {
        move(player.newX, player.newY);}
       }
    else if(player.newX < 0 || player.newX >= mapLength*tile || player.newY < 0 || player.newY >= mapHeight*tile){
      console.log('hit wall')
    }
  }
}
}



let interval = false;
 
function setTimer(){
  if(interval !== false){
    return;
  }else{
    let timer = document.getElementById('timer');
    timer.innerText = `You have ${time} sec left!`;
    let duration = time;
    interval = setInterval(function(){
      
      duration = duration - 1;
      timer.innerText =  `You have ${duration} sec left!`;
      if (duration === 0){
        clearInterval(interval)
        stopGame();
        
      }
    }, 1000)
  
  }
}

function stopGame(){
    addToHighScore()
    c.style.visibility = "hidden"
    restartButton.style.visibility = "visible"
    interval = false;
    player.x=0;
    player.y=0;
    
//  let resetButton = document.createElement('button');
//  resetButton.innerText = "Play again!"
//  resetButton.setAttribute("id", "resetButton")
//  resetButton.addEventListener('click', function(){
//    startGame()
//  });
//  gameBar.appendChild(resetButton);

}




function startGame(){
  // ctx.clearRect(0,0, mapLength*tile, mapHeight*tile); //clear canvas in PX!
  score = 0;
  document.querySelector('.gameScore span').innerText = score
  collBox = []
  resetTiles();
  resetMatrix(map);
  randomMilk(map);
  randomPoptart(map);
  drawMap(map);
  drawPlayer(0,0);
  getPlayerName()
  setTimer();
  restartButton.style.visibility = "hidden"
  c.style.visibility = "visible"
  document.querySelector('.winner-game').style.visibility = 'hidden';
  hS.style.visibility = 'hidden'
}



function startLevel(map){
  // ctx.clearRect(0,0, mapLength*tile, mapHeight*tile); //clear canvas in PX!
  score = 0;
  document.querySelector('.gameScore span').innerText = score
  collBox = []
  resetTiles();
  resetMatrix(map);
  randomMilk(map);
  randomPoptart(map);
  drawMap(map);
  drawPlayer(0,0);
  getPlayerName()
  setTimer();
  restartButton.style.visibility = "hidden"
  c.style.visibility = "visible"
  document.querySelector('.winner-game').style.visibility = 'hidden';
  hS.style.visibility = 'hidden'
}


 
//PRESS IN WINDOW
window.addEventListener('keydown', function(event){
if (event.keyCode === 38) {player.newX = player.x ; player.newY = player.y - tile; console.log('UP')}
if (event.keyCode === 37) {player.newX = player.x - tile; player.newY = player.y; console.log('LEFT')}
if (event.keyCode === 39) {player.newX = player.x + tile; player.newY = player.y;console.log('RIGHT')}
if (event.keyCode === 40) {player.newX = player.x ; player.newY = player.y + tile; console.log('DOWN')}
checkCollision()

//add collision check+sound
} )

window.onload = function(){
    startGame();
    // startLevel(firstLevel.matrix);
    // drawMap(map)
    // drawPlayer(0,0)
    // getPlayerName()
}

