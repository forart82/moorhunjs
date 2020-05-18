
setInterval(function () {
  if (global.start == true) {
    createMoorhun(global.counterMh++);
    if (global.counter % 10 == 0) {
      if (global.delay > global.difficultyDelay * 2) {
        global.delay -= global.difficultyDelay;
      }
      if (global.speed > global.difficultySpeed * 2)
        global.speed -= global.difficultySpeed;
    }
  }

}, global.delay)

function createMoorhun(counter) {
  let top = Math.floor(Math.random() * (global.height));
  if (top < global.vhBorder+10) {
    top = global.vhBorder+10;
  }
  if (top > global.height - (global.vhBorder+70)) {
    top = global.height - (global.vhBorder+70);
  }
  global.mh.append(`<img class="moorhuns"id="moorhun${counter}"src="/content/png/tomato.png">`)

  let mhs = $('#moorhun' + counter);
  mhs.css('top', top + 'px');
  mhs.animate({
    left: `+=${global.width+360}`
  }, global.speed, function () {
    global.removeMoorhun(counter)
  });
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
