// function exemploVar(){
//     if (true) {
//         var exemplo = 'exemplo';
//     }
//     console.log(exemplo);
// }
// exemploVar();

// function exemploLet() {
//     if (true) {
//       let y = 20;
//     }
//     console.log(y);
//   }
//   exemploLet();

function exemploVar() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
}

exemploVar();

function exemploLet() {
  for (let j = 0; j < 5; j++) {
    setTimeout(function () {
      console.log(j);
    }, 1000);
  }
}

exemploLet();
