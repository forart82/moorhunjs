global.checkCollision = function (event) {
  global.isHit=false;
  let posx = event.pageX;
  let posy = event.pageY;

  $('.moorhuns').each(function () {
    let mhLeft = parseInt($(this).css('left'), 10);
    let mhTop = parseInt($(this).css('top'), 10);
    if (mhLeft <= posx && mhLeft + 60 >= posx &&
      mhTop <= posy && mhTop + 60 >= posy
    ) {
      global.killMoorhun($(this));
      $('#moorhunKills').text(++global.kills)
      global.isHit = true;
    }
  })

  if (!global.isHit) {
    global.createHole(posx, posy, global.counterH++);
    global.isHit = false;
  }
}





