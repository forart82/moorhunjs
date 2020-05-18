$(document).on('mousedown', function (event) {
  if (global.start == true) {
    global.removeBullet(global.counterB++);
    if (global.counterB <= global.bullets) {
      global.checkCollision(event);
    }
    switch (global.bulletType) {
      case 'red':
        bulletRed();
        break;
      case 'blue':
        bulletBlue();
        break;
      case 'black':
        bulletGreen(event);
        break;

      default:
        break;
    }
  }
})


global.createHole = function (x, y, counter) {
  global.mh.append(`<div id="moorhunHole${counter}" class="moorhunHoles" style="top:${y}px;left:${x}px;"></div>`);
  $(`#moorhunHole${counter}`).fadeOut(2000).queue(setTimeout(function () {
    $(`#moorhunHole${counter}`).remove();
  }, 2000));
}

function bulletRed() {
  if (global.isHit) {
    let kill = true;
    let mh = 0;
    $('.moorhuns').each(function () {
      let mhLeft = parseInt($(this).css('left'), 10);
      if (mhLeft > 0 && mhLeft < global.width) {
        if (kill) {
          mh = $(this);
          kill = false;
        }
      }
    })
    mh.remove();
  }
}

function bulletBlue() {
  if (global.isHit) {
    global.kills++;
  }
}

function bulletGreen(event) {
  if (global.isHit) {
    let posx = event.pageX;
    let posy = event.pageY;
    $('#moorhun').append(`<div id="moorhunTrap${global.traps++}" class="moorhunTraps" style="top:${posy}px;left:${posx}px;"></div>`)
  }
}
