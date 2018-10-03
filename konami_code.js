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
    console.log("block 1")
    if (key === codes[i]) {
      i++;
      console.log("block 2")
      if (i === codes.length){
        alert("Konami Code!");
        i = 0;
        console.log("block 3")
      }
    } else {
      i = 0;
      console.log("Block 4")
    }
  });
}

init()