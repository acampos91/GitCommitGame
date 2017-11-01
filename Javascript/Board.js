  function GameArea(color) {
    this.ctx = document.getElementById('board').getContext('2d');
    this.color = color;
    this.counter = 0;
  }

GameArea.prototype.draw = function (){
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(0,0,1080,720);
  this.ctx.fillStyle = "black";
  this.ctx.strokeRect(95,0,100,500);
  this.ctx.fillStyle = "black";
  this.ctx.strokeRect(350,0,100,500);
  this.ctx.fillStyle = "black";
  this.ctx.strokeRect(605,0,100,500);
  this.ctx.fillStyle = "black";
  this.ctx.strokeRect(857,0,100,500);
}

  GameArea.prototype.update = function (){
        this.ctx.clearRect(0,0,1080,720);
        this.draw();
        teacher.draw();
        studentsDraw();
        iterationsDraw();
        crash();  
  }
