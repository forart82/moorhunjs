setInterval(function () {
  if (global.start == true) {
    global.mhStart.hide();
    global.ch.css('cursor', 'none');
  } else {
    global.ch.hide();
    global.mhStart.show();
    global.mhField.css('cursor', 'default')
  }
}, 500);


global.hideElements();

$('#moorhunStart').on('click', function (event) {
  play();
  global.showElements();
  $('#moorhunKills').text(global.kills)

})

$('#moorhunPause').on('click', function () {

  $('.moorhuns').each(function () {
    $(this).stop();
  })
  global.start = false;
  $(this).hide();
  $('#moorhunPlay').show();
})

$('#moorhunPlay').on('click', function () {
  play();
})


function play() {

  global.start = true;
  $('#moorhunPlay').hide();
  $('#moorhunPause').show();
}


