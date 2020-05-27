
let startTime = 0;
let moorhunCounter = 1;
let delay = 5000;
let speed=1;
let difficultyDelay=10;
let difficultySpeed=1;
let changeDifficulty=false;

createMoorhun = function (time, timestamp) {
  if (timestamp > startTime + delay) {
    let top = Math.floor(Math.random() * (global.height));
    if (top < global.vhBorder + 10) {
      top = global.vhBorder + 10;
    }
    if (top > global.height - (global.vhBorder + 70)) {
      top = global.height - (global.vhBorder + 70);
    }
    global.mh.append(`<img class="moorhuns"id="moorhun${++moorhunCounter}"src="/content/png/tomato.png">`)

    let mhs = $('#moorhun' + moorhunCounter);
    mhs.css('top', top + 'px');

    startTime = timestamp;
  }
}

// TODO show if global varibale is needed!
calcMoorhunDelay = function () {
  if (moorhunCounter % 5 == 0  && changeDifficulty) {
      delay -= difficultyDelay;
      console.log(moorhunCounter,delay);
      speed -= difficultySpeed;
      changeDifficulty=false;
  }
  else{
    changeDifficulty=true;
    console.log(moorhunCounter,delay,"else");
  }
}

killMoorhun = function (moorhun) {
  moorhun.addClass('moorhunsDead');
  moorhun.removeClass('moorhuns');
  moorhun.dequeue();
  moorhun.fadeOut(80).queue(function () {
    moorhun.attr('src', '/content/png/splash.png');
    moorhun.fadeIn(80);
    moorhun.dequeue();
  });
  moorhun.queue();
  moorhun.stop();
  moorhun.dequeue();
  moorhun.fadeOut(2000).queue(setTimeout(function () {
    moorhun.remove();
  }, 2000));
}


// Update
moorhunUpdate = function (time, timestamp) {
  createMoorhun(time, timestamp);
  calcMoorhunDelay();

  $.each($('.moorhuns'), function (key, value) {
    let moorhun = $(this);
    moorhunMove(moorhun, time);
    moorhunRemove(moorhun);
  });
}

moorhunRemove = function (moorhun) {
  let pos = moorhun.css('left');
  pos = parseFloat(pos.substr(0, pos.length - 2));
  if (global.width < pos) {
    moorhun.remove();
  }
}

moorhunMove = function (moorhun, time) {
  let pos = moorhun.css('left');
  pos = parseFloat(pos.substr(0, pos.length - 2));
  moorhun.css('left', pos + speed)
}

//Draw
