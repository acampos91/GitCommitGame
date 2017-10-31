var randomStudents = [];
var myGameArea;
var teacher;
var iterations;
var cd = false;
$(document).ready(function() {
  myGameArea = new GameArea("green");
  teacher = new Teacher(30, 30, 385, 600, myGameArea.ctx, "red");

  myGameArea.draw();
  teacher.draw();

  setInterval(function() {
    if(myGameArea.counter < 15){
    randomStudents.push(new Student(30, 30, this.x, 0, myGameArea.ctx, "blue"));
    myGameArea.counter += 1;
    }
  }, 1000)

  setInterval(function() {
    myGameArea.update();
  }, 70)

  $(document).keydown(function(e) {
    switch (e.which) {
      case 37:
        teacher.moveLeft();
        break;
      case 39:
        teacher.moveRight();
        break;
      case 32:
        cd = true;
         teacher.shoot();
         cd = false;
         break;
    }
  });
});



function studentsDraw() {
  for (i = 0; i < randomStudents.length; i++) {
    randomStudents[i].move();
    randomStudents[i].draw();
  }
}
