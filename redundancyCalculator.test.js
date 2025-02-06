
 // Importing Module 
const calculateRedundancy = require('../src/redundancuCalculator.js');
 
 // Unit Tests 
// Unit test 1- Message telling employee not eligible for redundancy pay pops up if full years of service is less than 2
test( "TEST1", () => { console.assert(calculateRedundancy(1, 20000) === "You are not entitled to redundancy pay because you have not worked in the company for at least 2 years")});

// Unit test 2- Redundancy Pay should not say more than £90000
test("TEST2", () => {console.assert(calculateRedundancy(50, 90000) === "£ 90000.00")});

// Unit test 3- Correct calculation for  inputs
test("TEST3", () => {console.assert(calculateRedundancy(2, 20000) === "£ 4000.00")});
