// assert
function assert(actual, expected) {
  console.log('.');
  console.assert(actual === expected, '\nact: ' + actual + '\nexp: ' + expected);
}

function TestSum() {
  assert(1+2, 3);
}

// exec
TestSum();