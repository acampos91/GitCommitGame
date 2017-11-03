var newGame ;
var ctx;
var changeLevel =1;


$(document).ready(function() {
  ctx = document.getElementById('board').getContext('2d');
  newGame = new Game(ctx);

  setInterval(function() {
    newGame.update();
    if (changeLevel ==1) {
      level1();
    } else if (changeLevel ==2) {
      level2();
    }

}, 70);

  $(document).keydown(function(e) {
    switch (e.which) {
      case 37:
        newGame.player.moveLeft();
        break;
      case 39:
        newGame.player.moveRight();
        break;
      case 32:
        newGame.player.shoot();
        break;
    }
  });
});
function level1 (){
  var images = ["images/fresijuego.png","images/Asierjuego.png"];
  var random = Math.floor(Math.random() * images.length);
  newGame.frames += 1;
  if (newGame.frames % 17 === 0) {
    if (newGame.counter < 4) {
      newGame.randomStudents.push(new Student(this.x, newGame.ctx, 1, 7, images[random]));
      newGame.counter += 1;
    } else if ((newGame.counter ==4) && (newGame.randomStudents.length == 0 )) {
      $(".level2").addClass("active");
      newGame.counter = 0 ;
      changeLevel ++;
    }
}
}

function level2 (){
  setTimeout(function(){
    $(".level2").removeClass("active");
  }, 1700);
  var images = ["images/fresijuego.png","images/Asierjuego.png"];
  var random = Math.floor(Math.random() * images.length);
  newGame.frames += 1;
  if (newGame.frames % 17 === 0) {
    if (newGame.counter < 7) {
      newGame.randomStudents.push(new Student(this.x, newGame.ctx, 3, 8, images[random]));
      newGame.counter += 1;
    }
  }
}
