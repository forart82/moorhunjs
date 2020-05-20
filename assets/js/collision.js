global.checkCollisionBullets = function (event) {
  global.isHit = false;
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


global.checkCollisionTraps = function () {
  $('.moorhuns').each(function () {
    let mhLeft = parseInt($(this).css('left'), 10);
    let mhTop = parseInt($(this).css('top'), 10);
    let moorhun=$(this);
    $('.moorhunTraps').each(function () {
      let trapLeft = parseInt($(this).css('left'), 10);
      let trapTop = parseInt($(this).css('top'), 10);
      if (mhLeft <= trapLeft + 30 && mhLeft + 60 >= trapLeft + 30 &&
        mhTop <= trapTop + 30 && mhTop + 60 >= trapTop + 30
      ) {
        global.killMoorhun(moorhun);
        global.removeTrap($(this));
        $('#moorhunKills').text(++global.kills)
        global.isHit = true;
      }
    })
  })
}
