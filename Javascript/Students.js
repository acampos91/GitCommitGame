function Student(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.student = function(){
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
   }
}

Student.prototype.move = function (){

};

Student.prototype.pullRequest = function (){
  
}
