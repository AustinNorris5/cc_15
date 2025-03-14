//Task 1: Creating the Base Structure

//Select the riskDashboard container
const riskDashboard = document.getElementById("riskDashboard");
const riskInput = document.getElementById("riskInput");
const riskLevel = document.getElementById("riskLevel");
const departmentInput = document.getElementById("department");
const riskList = document.getElementById("riskList");


//Print "Risk Dashboard Loaded" to the console
console.log("Risk Dashboard Loaded");

//Task 2: Adding Risk Items Dynamically

//Write a function addRiskItem(riskName, riskLevel, department)
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div"); //Creates a new risk card (div)
    riskCard.classList.add("riskCard"); //Assigns a class "riskCard" to each card
   riskDashboard.appendChild(riskCard);
};

//Test Case
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
