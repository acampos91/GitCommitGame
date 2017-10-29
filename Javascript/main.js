$( document ).ready(function() {
  var myGameArea = new GameArea("green");
  var teacher = new Teacher(30, 30, 30, 600, myGameArea.ctx, "red");
  myGameArea.draw();
  teacher.draw();
  $(document).keydown(function(e) {
      switch (e.which) {
        case 37: teacher.moveLeft();
        break;
        case 39: teacher.moveRight();
        break;
      }
      myGameArea.update(teacher);
    });
});
