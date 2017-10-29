  function GameArea(color) {
    this.ctx = document.getElementById('board').getContext('2d');
    this.color = color;
  }

GameArea.prototype.draw = function (){
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(0,0,1080,720);
}
GameArea.prototype.update = function (teacher){
  this.ctx.clearRect(0,0,1080,720);
  this.draw();
  teacher.draw();
}
