// let sum = 0;
// function TotalExpense(inputId) {
//   var inputField = document.getElementById(inputId);
//   var inputFieldValue = inputField.value;
//   var inputFieldNumber = parseFloat(inputFieldValue);
//   for (var i = 0; i < inputFieldNumber.length; i++) {
//     console.log(inputFieldNumber[i]);
//   }

// }

//Total expense Calculate from income
document.getElementById("calculate-btn").addEventListener("click", () => {
  // TotalExpense("food-field");
  // TotalExpense("rent-field");
  // TotalExpense("clothe-field");

  const foodField = document.getElementById("food-field");
  const foodFieldValue = Number(foodField.value);
  foodField.value = "";

  const rentField = document.getElementById("rent-field");
  const rentFieldValue = Number(rentField.value);
  rentField.value = "";

  const clotheField = document.getElementById("clothe-field");
  const clotheFieldValue = Number(clotheField.value);
  clotheField.value = "";

  const totalExpenseSum = foodFieldValue + rentFieldValue + clotheFieldValue;
  // const totalExpense = document.getElementById("total-expense");
  // totalExpense.innerText = totalExpenseSum;

  const incomeField = document.getElementById("income-field");
  const incomeFieldValue = Number(incomeField.value);

  if (
    incomeFieldValue < totalExpenseSum ||
    isNaN(incomeFieldValue) === true ||
    isNaN(totalExpenseSum) === true
  ) {
    alert("Not sufficient balance Or valid number");
  } else {
    const totalExpense = document.getElementById("total-expense");
    totalExpense.innerText = totalExpenseSum;

    const incomeField = document.getElementById("income-field");
    const incomeFieldValue = incomeField.value;

    const totalExpenseValue = Number(totalExpense.innerText);
    const balance = incomeFieldValue - totalExpenseValue;

    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = balance;
  }
});

// saving amount from main income
const saveBtn = document
  .getElementById("save-btn")
  .addEventListener("click", () => {
    const incomeField = document.getElementById("income-field");
    const incomeFieldValue = Number(incomeField.value);

    const saveField = document.getElementById("save-field");
    const saveFieldValue = Number(saveField.value);

    if (
      isNaN(saveFieldValue) === true ||
      saveFieldValue < 0 ||
      saveFieldValue > 100
    ) {
      alert("Please enter valid number");
    } else {
      const saveValue = (incomeFieldValue * saveFieldValue) / 100;
      const balanceElement = document.getElementById("balance");
      const balanceElementValue = balanceElement.innerText;

      if (saveValue > balanceElementValue) {
        alert("No savings available");
      } else {
        const savingAmount = document.getElementById("saving-amount");
        savingAmount.innerText = saveValue;

        // remaining Balance Calculate
        // const balanceElement = document.getElementById("balance");
        // const balanceElementValue = balanceElement.innerText;

        const savingAmountValue = Number(savingAmount.innerText);
        const remainingBalance = balanceElementValue - savingAmountValue;

        const remainingBalanceElement =
          document.getElementById("remaining-balance");
        remainingBalanceElement.innerText = remainingBalance;
      }
    }
  });
