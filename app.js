const firstSide = document.querySelector("#input1");
const secondSide = document.querySelector("#input2");
const thirdSide = document.querySelector("#input3");
const checkButton = document.querySelector("#button-add");
const result = document.querySelector("#result");

checkButton.addEventListener("click", checkTriangle);

function checkTriangle() {
  //String to number
  side1 = +firstSide.value;
  side2 = +secondSide.value;
  side3 = +thirdSide.value;

  //   const footerDiv = document.querySelector("#footer");
  //   footerDiv.innerHTML = "";

  if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    if (side1 == side2 && side1 == side3 && side2 == side3) {
      result.innerHTML = "Your Triengle is : Equilateral";
    } else if (side1 == side2 || side1 == side3 || side2 == side3) {
      result.innerHTML = "Your Triengle is : Isosceles";
    } else {
      result.innerHTML = "Your Triangle is : Scalene";
    }
  } else {
    result.innerHTML = "İnvalid Triangle..";
  }
}

window.addEventListener("keyup", function (event) {
  if (event.code == "Enter" || event.code == "NumpadEnter") {
    event.preventDefault;
    checkTriangle(event.code);
  }
});
