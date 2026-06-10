const units = 20;
const unitCost = 150;

const monthlyBill = units * unitCost;
let annualBill = monthlyBill * 12;
const finalAnnualBill = (annualBill * 80) / 100;

console.log("annual bill is", finalAnnualBill);
