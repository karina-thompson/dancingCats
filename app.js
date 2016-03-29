var movePixels = 10;
var delayMs = 50;
var catTimer = null;

function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.webkitTransform="scaleX(-1)";
    movePixels = -10;
  }
  if (currentLeft === 0) {
    img.style.webkitTransform="scaleX(1)";
    movePixels = 10;
  }
  // if (currentLeft > (window.innerWidth-img.width)) {
  //   img.style.left = '0px';
  //  }
}

function startCatWalk() {
  if (catTimer === null) {
  catTimer = window.setInterval(catWalk, delayMs);
  }
}

var startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', startCatWalk);

function goFaster() {
  window.clearInterval(catTimer);
  delayMs = delayMs / 2;
  catTimer = window.setInterval(catWalk, delayMs);
} 

var speedBtn = document.getElementById('speedBtn');
speedBtn.addEventListener('click', goFaster);

function stopCatWalk() { 
  window.clearInterval(catTimer);
}

var stopBtn = document.getElementById('stopBtn');
stopBtn.addEventListener('click', stopCatWalk);

//img.style.webkitTransform="scaleX(1)"
//-1 to reverse
