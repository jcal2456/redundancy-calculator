
// Creating module  
function calculateRedundancy(fullYearsOfService, salary) {
    let redundancyFormula;
    // Calculate redundancy pay
    if(fullYearsOfService < 2) {
        redundancyFormula = "You are not entitled to redundancy pay because you have not worked in the company for at least 2 years";
    } else {
        redundancyFormula = (fullYearsOfService / 2) * (salary / 5);
        if(redundancyFormula > 90000) {
            redundancyFormula = 90000;
        document.getElementById("result").innerHTML = " £ " + redundancyFormula.toFixed(2);
        }
    }
    return redundancyFormula;
}

// Export module
module.exports = calculateRedundancy;
