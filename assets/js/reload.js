let isTrue = true;
let p = $('#moorhunReload p');

let interval = (global.bullets - global.counterB) * 100;
let run = setInterval(changeColor,interval);

function changeColor(){
  if (isTrue) {
    p.css('color', 'red');
    isTrue = false
  }
  else {
    p.css('color', 'yellow');
    isTrue = true;
  }
  interval = (global.bullets - global.counterB) * 100;
  interval=(interval>100?interval:100);
  clearInterval(run);
  run = setInterval(changeColor, interval);
  if(interval<300)
  {
    $('#warning').text("Press 'R'");
  }
  else{
    $('#warning').text("");
  }
}

global.reload=function(){
  $('.moorhunBullets').each(function () {
    $(this).remove();
  })
  global.loadClip(global.bullets);
  global.counterB = 0;
}
$(document).keyup(function(event){
  let code=(event.keyCode?event.keyCode:event.wich);
  if(code==82){
    reload();
  }
})
global.mhReload.on('click', function () {
  reload();
})

