

let tFps = new Date().getTime();
let delayTime = 0
let lastRender = 0;
let canvas = document.getElementById("moorhunField");
let width = canvas.width;
let height = canvas.height;
console.log(width,height);
let rect=canvas.getContext("2d");
rect.fillStyle="#0055aa";
let circle=canvas.getContext("2d");
circle.fillStyle="red";
window.requestAnimationFrame(loop);

function loop(timestamp) {
  var progress = timestamp - lastRender;
  event();
  update(progress);
  draw();
  lastRender = timestamp;
  window.requestAnimationFrame(loop);
}

function event() {
}

function update(time) {
  if (time > delayTime + global.delay) {
    delayTime = time;
    global.createMoorhun(global.counterMh++);
    global.calcMoorhunDelay();
  }
  if (new Date().getTime() % 4 == 0) {
    global.checkCollisionTraps();
  }
  global.moorhunUpdate(time);
  fps();
}

function draw() {

  circle.beginPath();
  circle.arc(75,75,50,0,2*Math.PI);
  circle.fillRect(0, 0, width-10, height)
  circle.stroke();
  rect.clearRect(0,0,50,50);
  rect.fillRect(0, 0, 50, 50);
}

function fps() {
  global.fpsCounter++;
  if (new Date().getTime() - tFps > 1000) {
    tFps = new Date().getTime();
    $('#fps').text(global.fpsCounter);
    global.fpsCounter = 0;
  }
}


// global.run = async function (event) {
//   let tLap = new Date().getTime();
//   let tStart = new Date().getTime();
//   let tTpf = 1000 / 60;
//   let inCounter = 0
//   let outCounter = 0
//   const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
//   while (global.isRunning) {

//     tLap = new this.Date().getTime();
//     while (tLap > tTpf+new this.Date().getTime()) {
//       inCounter++;
//       $('#inif').text("in if: "+tLap+" counter: "+inCounter);
//       tLap -= tTpf;
//       update(event, tTpf+new this.Date().getTime());
//     }
//     outCounter++;
//     $('#outif').text("ou if: "+tLap+" counter:"+outCounter);
//     await sleep(0);
//   }
// }
