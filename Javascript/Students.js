function Student(width, height, x, y, ctx, color) {
    var randomStudentsPositionX = [130, 385, 640, 895];
    //var randomStudentsPositionY = [0, 100, 150];
    this.width = width;
    this.height = height;
    this.x =  randomStudentsPositionX[Math.floor(Math.random() * ((randomStudentsPositionX.length - 0) + 0))];
    this.y = y;   //randomStudentsPositionY[Math.floor(Math.random() * ((randomStudentsPositionY.length - 0) + 0))];
    this.ctx = ctx;
    this.color = color;
   }

Student.prototype.draw = function(){
this.ctx.fillStyle = this.color;
this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

Student.prototype.move = function (){
 this.y += 100;
};

Student.prototype.pullRequest = function (){

}
