
global.createMoorhun = function (counter) {
  let top = Math.floor(Math.random() * (global.height));
  if (top < global.vhBorder + 10) {
    top = global.vhBorder + 10;
  }
  if (top > global.height - (global.vhBorder + 70)) {
    top = global.height - (global.vhBorder + 70);
  }
  global.mh.append(`<img class="moorhuns"id="moorhun${counter}"src="/content/png/tomato.png">`)

  let mhs = $('#moorhun' + counter);
  mhs.css('top', top + 'px');
}

global.calcMoorhunDelay = function () {
  if (global.counterMh % 10 == 0) {
    if (global.delay > global.difficultyDelay * 2) {
      global.delay -= global.difficultyDelay;
    }
    if (global.speed > global.difficultySpeed * 2) {
      global.speed -= global.difficultySpeed;
    }
  }
}

global.killMoorhun = function (moorhun) {
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

global.moorhunRemove = function (moorhun) {
  let pos = moorhun.css('left');
  pos = parseFloat(pos.substr(0, pos.length - 2));
  if(global.width<pos)
  {
    moorhun.remove();
  }
}

global.moorhunUpdate = function (time) {
  $.each($('.moorhuns'), function (key, value) {
    let moorhun = $(this);
    global.moorhunMove(moorhun,time);
    global.moorhunRemove(moorhun);
  });
}

global.moorhunMove = function (moorhun,time) {
  let speed = 0.000000000001;
  let pos = moorhun.css('left');
  pos = parseFloat(pos.substr(0, pos.length - 2));
  moorhun.css('left', pos + speed * time)
}
