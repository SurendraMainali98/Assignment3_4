//This page is Created by Surendra Mainali ,C0918640 , Date: 04/02/2024 

// Function to convert from CAD to USD
function convertCADtoUSD(amount) {
    var rate = 0.75; // Hardcoded exchange rate
    return amount * rate;
}

// Function to convert from USD to CAD
function convertUSDtoCAD(amount) {
    var rate = 1.33; // Hardcoded exchange rate
    return amount * rate;
}

// Function to handle conversion when button is clicked
function convertCurrency() {
    var amount = parseFloat(document.getElementById("amount").value);
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    var result;
    if (from === "CAD" && to === "USD") {
        result = convertCADtoUSD(amount);
        alert("Converted amount: " + result.toFixed(3) + " USD");
    } else if (from === "USD" && to === "CAD") {
        result = convertUSDtoCAD(amount);
        alert("Converted amount: " + result.toFixed(3) + " CAD");
    } else {
        alert("Invalid conversion");
        return;
    }
}

// Add event listener to the convert button
document.getElementById("convert").addEventListener("click", convertCurrency);
