var randomStudents = [];
var myGameArea;
var teacher;
$(document).ready(function() {
   myGameArea = new GameArea("green");
   teacher = new Teacher(30, 30, 385, 600, myGameArea.ctx, "red");
  myGameArea.draw();
  teacher.draw();

//Crear y pintar aleatoriamente students
  setInterval(function(){
  generateStudents();
  studentsDraw();
}, Math.floor(Math.random() * ((3000 - 1000) + 1000)));

  $(document).keydown(function(e) {
    switch (e.which) {
      case 37: teacher.moveLeft();
      break;
      case 39: teacher.moveRight();
      break;
    }
    myGameArea.update();
  });
});

function generateStudents (){
    randomStudents.push(new Student(30, 30, this.x, 0, myGameArea.ctx, "blue"));
}


function studentsDraw (){
  for(i = 0; i < randomStudents.length; i++){
    randomStudents[i].draw();
    randomStudents[i].move();
  }
}
