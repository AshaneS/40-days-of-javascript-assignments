// 2. Write a function processPayment(amount) that checks
// if the amount is positive and not exceeding balance.
// If any condition fails, throw appropriate errors.

function processPayment(amount) {
  const balance = 2000;
  try {
    if (amount <= 0) throw new Error("amount should be positive");
    if (amount > balance) throw new Error("insufficiant balance");

    console.log("new balance", balance - amount);
  } catch (error) {
    console.error("error occured", error.message);
  }
}

processPayment(3500);
