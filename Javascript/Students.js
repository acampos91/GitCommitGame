function Student(width, height, x, y, ctx, color) {
    var randomStudentsPositionX = [130, 385, 640, 895];
    this.width = width;
    this.height = height;
    this.x =  randomStudentsPositionX[Math.floor(Math.random() * ((randomStudentsPositionX.length - 0) + 0))];
    this.y = y;
    this.ctx = ctx;
    this.color = color;
   }

Student.prototype.draw = function(){
this.ctx.fillStyle = this.color;
this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

Student.prototype.move = function (){
 if (this.y < 470){
 this.y += 7;
 }
};

Student.prototype.left = function(){ return this.x }

Student.prototype.right = function(){  return this.x + this.width  }

Student.prototype.top = function(){  return this.y }

Student.prototype.bottom = function(){ return this.y + this.height }
