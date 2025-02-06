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

