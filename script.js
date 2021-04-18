//function
function compute(principal, interestRate, years, interestEarned, d, n, futureDate) {
//variables
    var principal = document.getElementById("amountOne").value 
    var interestRate = document.getElementById("rate").value
    var years = document.getElementById("noYears").value
    var interestEarned = principal * interestRate * years *.01 + Number(principal);
    var d = new Date();
    var n = d.getFullYear();
    var futureDate = Number(n) + Number(years); 
//results
    document.getElementById("answer1").innerHTML = "If you deposit $" + principal;
    document.getElementById("answer2").innerHTML = "At a rate of " + interestRate + '%';
    document.getElementById("answer3").innerHTML = "You'll recieve the amount of $" + interestEarned;
    document.getElementById("answer4").innerHTML = "In the year " + futureDate;
}
