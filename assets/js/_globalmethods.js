
$(window).resize(function () {
  global.height = global.mh.height();
  global.width = global.mh.width() + 360;
  global.vh = $(window).height();
  global.vw = $(window).width();
  global.vhBorder = (global.vh * 10) / 100;
  global.vwBorder = (global.vw * 5) / 100;
  global.speed = 5000 + global.vw;
  global.delay = 1000;
})

global.hideElements = function () {
  global.mhReload.hide();
  global.mhClip.hide();
}

global.showElements = function () {
  global.mhReload.show();
  global.mhClip.show();
}

global.timeout = function (interval = 10, counter = 100) {
  setTimeout(global.timeout(interval, counter), interval);
}

global.removeTrap = function (trap) {
  trap.addClass('moorhunTrapsDead');
  trap.removeClass('moorhunTraps');
  trap.dequeue();
  trap.fadeOut(80).queue(function () {
    trap.attr('src', '/content/png/trapClose.png');
    trap.fadeIn(80);
    trap.dequeue();
  });
  trap.queue();
  trap.stop();
  trap.dequeue();
  trap.fadeOut(2000).queue(setTimeout(function () {
    trap.remove();
  }, 2000));
}
