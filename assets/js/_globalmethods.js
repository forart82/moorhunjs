
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


global.removeMoorhun = function (counter) {
  $('#moorhun' + counter).remove();
}

global.hideElements = function () {
  global.mhReload.hide();
  global.mhClip.hide();
}

global.showElements = function () {
  global.mhReload.show();
  global.mhClip.show();
}

global.timeout=function(interval=10,counter=100){
  setTimeout(global.timeout(interval,counter),interval);
}
