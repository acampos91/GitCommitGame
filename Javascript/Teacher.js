function Teacher(width, height, x, y, ctx, color) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.color = color;
}

Teacher.prototype.draw = function(){
this.ctx.fillStyle = this.color;
this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

  Teacher.prototype.moveLeft =  function() {
    if (this.x > 200){
    this.x -= 1; //255
  }
};
  Teacher.prototype.moveRight = function() {
    if (this.x < 880){
    this.x += 1; //255
  };
}

Teacher.prototype.shoot = function (){

};
