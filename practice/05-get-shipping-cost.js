// Task 5: getShippingCost (Easy)
// Calculate the shipping price (use switch).
//
// - "OM" costs 2, "AE" costs 5, any other country costs 15.
// - Express delivery doubles the price.

function getShippingCost(country, isExpress) {
  let express = 1;

  if (isExpress){
    express = 2;
  }

  // can use this one line if condition which is more efficient
  //const express = isExpress ? 2 : 1; 

  switch (country) {
    case "OM":
      return 2 * express;
    case "AE":
      return 5 * express;
    default:
      return 15 * express;
  }

}

// Expected output:
console.log(getShippingCost("OM", false));  // 2
console.log(getShippingCost("AE", false));  // 5
console.log(getShippingCost("US", false));  // 15
console.log(getShippingCost("OM", true));   // 4
console.log(getShippingCost("US", true));   // 30
