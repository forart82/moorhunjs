


let tFps = new Date().getTime();
let delayTime = 0
global.run = async function (event) {
  let tLap = new Date().getTime();
  let tTpf = 1000 / 10;
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  while (global.isRunning) {
    event();
    tLap = new this.Date().getTime();
    if (tLap > tTpf) {
      tLap -= tTpf;
      update(event, tTpf);
    }
    update(event, tLap);
    await sleep(0);
  }
}

function update(event, time) {
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

fps = function () {
  global.fpsCounter++;
  if (new Date().getTime() - tFps > 1000) {
    tFps = new Date().getTime();
    $('#fps').text(global.fpsCounter);
    global.fpsCounter = 0;
  }
}
