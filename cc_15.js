//Task 1: Creating the Base Structure

//Select the riskDashboard container
const riskDashboard = document.getElementById("riskDashboard");
const riskInput = document.getElementById("riskInput");
const riskLevel = document.getElementById("riskLevel");
const departmentInput = document.getElementById("department");
const riskList = document.getElementById("riskList");
const riskTemplate = document.getElementById("riskTemplate");

//Print "Risk Dashboard Loaded" to the console
console.log("Risk Dashboard Loaded");

//Task 2: Adding Risk Items Dynamically

//Write a function addRiskItem(riskName, riskLevel, department)
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div"); //Creates a new risk card (div)
    riskCard.style.display = "block";
    riskCard.removeAttribute("id");

    riskCard.querySelector(".riskName").textContent = riskName;
    riskCard.querySelector(".riskLevel").textContent = riskLevel;
    riskCard.querySelector(".department").textContent = department;

//Task 4: Categorizing Risks by Level

//Modify addRiskItem to apply different background colors based on risk level
if (riskLevel === "Low") {
    riskCard.classList.add("lowRisk");
} else if (riskLevel === "Medium") {
    riskCard.classList.add("mediumRisk");
} else if (riskLevel === "High") {
    riskCard.classList.add("highRisk");
};

//Task 3: Removing Risk Items

//Modify addRiskItem to include a "Resolve" button
const resolveButtonn = riskCard.querySelector(".resolveButton");
    resolveButtonn.addEventListener("click", function() {
        riskCard.remove(); 
    });

// Appends it to the riskDashboard
    riskList.appendChild(newRiskCard);
};

//Task 5: Implementing Bulk Updates

//Add a button to the dashboard labeled "Increase Risk Levels"
increaseRiskButton.addEventListener("click", function() {
    document.querySelectorAll(".riskCard").forEach(riskCard => {
        const level = riskCard.querySelector(".riskLevel");
        const currentLevel = level.textContent;
    });
});   

//Test Case
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
addRiskItem("Market Fluctuations", "High", "Finance");
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");
addRiskItem("Employee Retention", "Low", "HR")