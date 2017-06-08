var count = 0;


function timesUp () {
  count += 1;
  console.log('10 second timer');
  console.log(count); //=> 2
}

setTimeout(timesUp, 10000);
  //                  |
  //              10 seconds


// ----------------------------------------------------------------


setTimeout(function () {
  count += 1;
  console.log('3 second timer');
  console.log(count); //=> 1
}, 3000);
  // |
  // 3 seconds


console.log('FINISHES 1st');
console.log(count); //=> 0
