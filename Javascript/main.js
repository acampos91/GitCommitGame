var newGame ;
var ctx;
$(document).ready(function() {
  ctx = document.getElementById('board').getContext('2d');
  newGame = new Game(ctx);

  setInterval(function() {
    newGame.update();
  level1();
}, 70)

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
  newGame.frames += 1;
  if (newGame.frames % 40 === 0) {
    if (newGame.counter < 10) {
      newGame.randomStudents.push(new Student(this.x, newGame.ctx, 1, 7));
      newGame.counter += 1;
    }
}
}

function level2 (){
  newGame.frames += 1;
  if (newGame.frames % 40 === 0) {
    if (newGame.counter < 10) {
      newGame.randomStudents.push(new Student(this.x, newGame.ctx, 3, 7));
      newGame.counter += 1;
}
}
}
