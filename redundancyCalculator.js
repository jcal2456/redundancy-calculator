
// Creating module  
function calculateRedundancy() {
    let fullYearsOfService = document.getElementById("fullYearsOfService").value;
    let salary = document.getElementById("salary").value;
    let redundancyFormula;

        // Convert input values to numbers
    fullYearsOfService = parseInt(fullYearsOfService);
    salary = parseFloat(salary);
    
    // Calculate redundancy pay
    if(fullYearsOfService < 2) {
        redundancyFormula = "You are not entitled to redundancy pay because you have not worked in the company for at least 2 years";
        document.getElementById("result").innerHTML = redundancyFormula;
    } else {
        redundancyFormula = (fullYearsOfService / 2) * (salary / 5);
        if(redundancyFormula > 90000) {
            redundancyFormula = 90000;
        document.getElementById("result").innerHTML = " £ " + redundancyFormula.toFixed(2);
        }
    }
}

// Export module
module.exports = calculateRedundancy;
