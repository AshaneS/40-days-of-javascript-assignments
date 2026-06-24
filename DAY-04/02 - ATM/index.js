const amount = 1860;

const ifMultiplesOfHundred = amount % 100;

if(ifMultiplesOfHundred === 0){
 console.log("Withdrawal Successful")
}
else {
 console.log("Invalid Amount")
}