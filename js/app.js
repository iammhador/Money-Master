function getInputFieldValue(elementId) {
  const inputFieldId = document.getElementById(elementId);
  const inputFieldValue = inputFieldId.value;
  const inputFieldValueString = parseFloat(inputFieldValue);
  inputFieldId.value = "";
  return inputFieldValueString;
}

function getInputFieldValueFromIncome(id) {
  const inputFieldId = document.getElementById(id);
  const inputFieldValue = inputFieldId.value;
  const inputFieldValueString = parseFloat(inputFieldValue);
  return inputFieldValueString;
}

//# Calculate Button:
document.getElementById("calculate-btn").addEventListener("click", function () {
  const foodField = getInputFieldValue("food-field");
  const rentField = getInputFieldValue("rent-field");
  const clothesField = getInputFieldValue("clothes-field");
  const totalCost = foodField + rentField + clothesField;

  //# Total Expenses:
  const totalExpenses = document.getElementById("total-expenses");
  totalExpenses.innerText = totalCost;

  //# Balace Check:
  const income = getInputFieldValueFromIncome("income");
  const balanceId = document.getElementById("balance");
  const totalBalace = income - totalCost;
  balanceId.innerText = totalBalace;
});

//# Save Button:
document.getElementById("save-btn").addEventListener("click", function () {
  const incomeAmount = getInputFieldValue("income");
  const saveField = getInputFieldValue("save");
  const saveFieldParcentage = saveField / 100;
  const totalSaveAmount = incomeAmount * saveFieldParcentage;

  //# Find Total Expenses:
  const savingAmount = document.getElementById("saving-amount");
  savingAmount.innerText = totalSaveAmount;

  //# Remaining Balance:
  const totalBalanceId = document.getElementById("balance");
  const totalBalanceInnerText = totalBalanceId.innerText;
  const remainingBalanceAmount = totalBalanceInnerText - totalSaveAmount;
  const remainingBalance = document.getElementById("remaining-balance");
  remainingBalance.innerText = remainingBalanceAmount;
});
