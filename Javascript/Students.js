function Student(x, y, ctx, health, speed) {
    var randomStudentsPositionX = [130, 385, 640, 895];
    this.width = 60;
    this.height = 100;
    this.x =  randomStudentsPositionX[Math.floor(Math.random() * ((randomStudentsPositionX.length - 0) + 0))];
    this.y = y;
    this.ctx = ctx;
    this.health = health;
    this.speed = speed;
   }

Student.prototype.draw = function(){
  var img = new Image();
  img.src = "../images/fresijuego.png"
  this.ctx.drawImage(img, this.x, this.y, 60, 100);
}

Student.prototype.move = function (){
 if (this.y < 470){
  this.y += this.speed;
 }
};

Student.prototype.left = function(){ return this.x }

Student.prototype.right = function(){  return this.x + this.width  }

Student.prototype.top = function(){  return this.y }

Student.prototype.bottom = function(){ return this.y + this.height }
