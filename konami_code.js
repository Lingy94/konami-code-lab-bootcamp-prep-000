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

function init() {

  document.body.addEventListener('keydown', function(e) { 
    const key = e.key;
    for (i = 0; i < codes.length; i++) {
      if (key == codes[i]) {
        if (i === codes.length){
        alert("Konami Code!");
        i = 0;
        }
      }
      else {
        i = 0;
      }
      }
    }
    );
}