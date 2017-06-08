var count = 0;

function everySecond () {
  count += 1;
  console.log('Hi. ' + count);

  if (count >= 45) {
    clearInterval(intervalId);
  }
}

var intervalId = setInterval(everySecond, 1000);


// ------------------------------------


setInterval(function () {
  console.log('🤺');
}, 5000);



// =======================================================================



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
