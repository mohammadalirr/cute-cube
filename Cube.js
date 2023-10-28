var cube = document.getElementById('cube');

cube.addEventListener('mousedown', function(event) {
  var startX = event.clientX;
  var startY = event.clientY;
  
  document.addEventListener('mousemove', rotateCube);
  document.addEventListener('mouseup', stopRotateCube);
  
  function rotateCube(event) {
    var deltaX = event.clientX - startX;
    var deltaY = event.clientY - startY;
    
    cube.style.transform = 'rotateX(' + deltaY + 'deg) rotateY(' + deltaX + 'deg)';
  }
  
  function stopRotateCube() {
    document.removeEventListener('mousemove', rotateCube);
    document.removeEventListener('mouseup', stopRotateCube);
  }
});

var cube = document.getElementById('cube');

cube.addEventListener('touchstart', function(event) {
  var touch = event.touches[0];
  var startX = touch.clientX;
  var startY = touch.clientY;
  
  document.addEventListener('touchmove', moveCube);
  document.addEventListener('touchend', stopMoveCube);
  
  function moveCube(event) {
    var touch = event.touches[0];
    var deltaX = touch.clientX - startX;
    var deltaY = touch.clientY - startY;
    
    cube.style.transform = 'translateX(' + deltaX + 'px) translateY(' + deltaY + 'px) rotateX(' + deltaY + 'deg) rotateY(' + deltaX + 'deg)';
  }
  
  function stopMoveCube() {
    document.removeEventListener('touchmove', moveCube);
    document.removeEventListener('touchend', stopMoveCube);
  }
});
