const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

var konamiCodePos = 0;

function init() {

  document.addEventListener('keydown', function(e) { 
    const key = e.key;
    for (i = 0; i < codes.length; i++) {
      if (key == codes[i]) {
        konamiCodePos++;
        if (konamiCodePos === codes.length){
        alert("Konami Code!");
        konamiCodePos = 0;
        }
      }
      else {
        konamiCodePos = 0;
      }
      }
    }
    );
}