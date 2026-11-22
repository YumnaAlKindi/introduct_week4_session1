// Task 11: getDaysInMonth (Easy)
// Return the number of days in a month (ignore leap years).
//
// - Month is a number from 1 to 12. February has 28 days.
// - April, June, September and November have 30. The rest have 31.
// - Any other month number: return 0.

function getDaysInMonth(month) {
    switch (month) {
    case 1:
      return 31;
    case 2:
      return 28;
    case 3:
      return 31;
    case 4:
      return 30;
    case 5:
      return 31;
    case 6:
      return 30;
    case 7:
      return 31;
    case 8:
      return 31;
    case 9:
      return 30;
    case 10:
      return 31;
    case 11:
      return 30;
    case 12:
      return 31;
    default:
      return 0;
  }
}

// Expected output:
console.log(getDaysInMonth(1));   // 31
console.log(getDaysInMonth(2));   // 28
console.log(getDaysInMonth(4));   // 30
console.log(getDaysInMonth(9));   // 30
console.log(getDaysInMonth(12));  // 31
console.log(getDaysInMonth(0));   // 0
console.log(getDaysInMonth(13));  // 0
