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
    var i = 0;
      if (key == codes[i]) {
        i++;
        if (i === codes.length){
        alert("Konami Code!");
        i = 0;
        }
      }
      else {
        i = 0;
      }
    }
    );
}