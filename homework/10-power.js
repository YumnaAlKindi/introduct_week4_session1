// Task 10: power (Easy)
// Calculate base to the power of exponent using a loop (do not use ** or Math.pow).
//
// - power(2, 3) = 2 * 2 * 2 = 8.
// - Any number to the power of 0 is 1.

function power(base, exponent) {
  if(exponent === 0) return 1;
  if(exponent === 1) return base;

  let ans = 1;
  for ( let i=1 ; i <= exponent ; i++){
    ans = ans * base;
  }
  return ans;
}

// Expected output:
console.log(power(2, 3));   // 8
console.log(power(5, 0));   // 1
console.log(power(3, 4));   // 81
console.log(power(10, 2));  // 100
console.log(power(7, 1));   // 7
