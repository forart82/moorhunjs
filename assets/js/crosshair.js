

$(document).on('mousemove', function (event) {
  if (global.start == true) {
    let chLeft = event.pageX;
    let chTop = event.pageY;
    let fieldLeft = global.mhField.offset().left;
    let fieldTop = global.mhField.offset().top;
    let fieldWidth = global.mhField.width();
    let fieldHeight = global.mhField.height();
    if (fieldLeft <= chLeft && fieldLeft + fieldWidth >= chLeft &&
      fieldTop <= chTop && fieldTop + fieldHeight >= chTop
    ) {
      global.ch.show();
      global.ch.css('top', chTop - 30);
      global.ch.css('left', chLeft - 30);
    }
    else
    {
      global.ch.hide();
    }
  }

})


