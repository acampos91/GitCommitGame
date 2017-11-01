var randomStudents = [];
var myGameArea;
var teacher;
var iterations;
var arrayIterations = [];

$(document).ready(function() {
  myGameArea = new GameArea("green");
  teacher = new Teacher(30, 30, 385, 600, myGameArea.ctx, "red");

  myGameArea.draw();
  teacher.draw();

  setInterval(function() {
    if (myGameArea.counter < 15) {
      randomStudents.push(new Student(30, 30, this.x, 0, myGameArea.ctx, "blue", 1));
      myGameArea.counter += 1;
      console.log(randomStudents)
    } else if (randomStudents.length === 0 && myGameArea.counter < 24) {
      randomStudents.push(new Student(30, 30, this.x, 0, myGameArea.ctx, "yellow", 3));
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
        teacher.shoot();
        break;
    }
  });
});

function iterationsDraw() {
  for (i = 0; i < arrayIterations.length; i++) {
    arrayIterations[i].move();
    arrayIterations[i].draw();
  }
}

function studentsDraw() {
  for (i = 0; i < randomStudents.length; i++) {
    randomStudents[i].move();
    randomStudents[i].draw();
  }
}

function crashWith(student, iterations) {
  return !((student.bottom() < iterations.top()) ||
    (student.top() > iterations.bottom()) ||
    (student.right() < iterations.left()) ||
    (student.left() > iterations.right()))

}

function crash() {
  for (j = 0; j < randomStudents.length; j++) {
    for (i = 0; i < arrayIterations.length; i++) {
      if (crashWith(randomStudents[j], arrayIterations[i])) {
        arrayIterations.splice(i, 1);
        randomStudents[j].health -= 1;
        if (randomStudents[j].health === 0){
          console.log(randomStudents[j].health)
          randomStudents.splice(j, 1);
          return;
        }
      }
    }
  }
}
