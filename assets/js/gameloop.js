

let fpsTime = new Date().getTime();
let fpsCounter=0;
let delayTime = 0
let lastRender = 0;


window.requestAnimationFrame(loop);

function loop(timestamp) {
  var progress = timestamp - lastRender;
  event();
  update(progress,timestamp);
  draw();
  lastRender = timestamp;
  window.requestAnimationFrame(loop);
}

function event() {
}

function update(time, timestamp) {
  moorhunUpdate(time,timestamp);

  if (new Date().getTime() % 4 == 0) {
    global.checkCollisionTraps();
  }
  fps();
}

function draw() {

}

function fps() {
  fpsCounter++
  if (new Date().getTime() - fpsTime > 1000) {
    fpsTime = new Date().getTime();
    $('#fps').text(fpsCounter);
    fpsCounter = 0;
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
