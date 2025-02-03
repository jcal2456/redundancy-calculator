function calculateRedundancy(

) {

    // Get inputs

    const fullYearsOfService = parseInt(document.getElementById("fullYearsOfService").value);

    const salary = parseInt(document.getElementById("salary").value);
 
    // Calculate redundancy pay
  
    redundancyFormula = (fullYearsOfService/2) * (salary/5)
       
      document.getElementById("result").innerHTML = " £ " + redundancyFormula.toFixed(2);

}

)
// Creation of unit tests

// Importing function
console.log("Running Tests...");

// Unit test 1- Message telling employee not eligible for redundancy pay pops up if full years of service is less than 2
console.assert(calculateRedundancy(1, 20000) === "You are not entitled to redundancy pay because you have not worked in the company for at least 2 years", "test 1 Failed");

// Unit test 2- Redundancy Pay should not say more than £90000
console.assert(calculateRedundancy(50, 90000) === "£ 90000.00", "Test 2 Failed");

// Unit test 3- Correct calculation for  inputs
console.assert(calculateRedundancy(2, 20000) === "£ 4000.00", "Test 3 Failed");

console.log("All Tests Completed.");
