



global.run= async function(event) {
  let startTime = new Date().getTime();

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  while (global.isRunning) {

    if (new Date().getTime() - 1000 < startTime) {
      if (global.fpsCounter < global.fps) {

      }
      else
      {
        await sleep(startTime +1 - new Date().getTime());
      }
    }
    else {

      global.fpsCounter = 0;
      startTime = new Date().getTime();
    }

    update(event)
    draw();


  }
}

function update(event) {

  if (new Date().getTime() > global.time+global.delay)
  {
    global.time=new Date().getTime();
    global.createMoorhun(global.counterMh++);
    global.calcMoorhunDelay();
  }

  if(new Date().getTime()%4==0)
  {
    global.checkCollisionTraps();

  }

}

function draw() {
  global.fpsCounter++;
  $('#fps').text(global.fpsCounter);
  // console.log(global.fpsCounter);
}
