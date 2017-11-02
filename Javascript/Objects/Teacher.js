function Teacher(ctx) {
    this.width = 60;
    this.height = 100;
    this.x = 385;
    this.y = 510;
    this.ctx = ctx;
    this.health = 3;
}

Teacher.prototype.draw = function(){
  var img = new Image();
  img.src = "images/fresijuego.png"
  this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
  $('#teacher-health').html(newGame.player.health);
}

  Teacher.prototype.moveLeft =  function() {
    if (this.x > 200){
    this.x -= 255;
  }
};
  Teacher.prototype.moveRight = function() {
    if (this.x < 880){
    this.x += 255;
  };
}

Teacher.prototype.shoot = function (){
  newGame.arrayIterations.push(new Iterations(15, 15, this.x, this.y, newGame.ctx, "black"));
};
