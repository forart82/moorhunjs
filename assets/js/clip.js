



global.loadClip = function(bullets)
{
  global.mhBullets.each(function(){
    $(this).remove();
  })
  for(let i=0;i<bullets;i++)
  {
    global.mhClip.append(`<div id="moorhunBullet${i}" class="moorhunBullets"></div>`)
  }
}
global.loadClip(global.bullets);

global.removeBullet=function(counter){
  $('#moorhunBullet'+counter).remove();
}
