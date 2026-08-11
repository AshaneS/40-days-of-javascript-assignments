function clickButton() {
  let clickCount = 0;

  document.getElementById("myButton").addEventListener("click", function () {
    clickCount++;
    console.log("click count is", clickCount);
  });
}

clickButton();
