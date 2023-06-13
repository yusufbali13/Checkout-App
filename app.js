// ******selectors

const main = document.getElementById("products-preview");
const nav = document.querySelector("nav");

const amountOfProducts = document.querySelector(".amount-of-product");

const selectedProducts = document.querySelector(".main__sum-price");

const mainTitle = document.querySelector(".main__title");

const shipping = document
  .getElementById("cart-shipping")
  .querySelector(".dollar");
const tax = document.getElementById("cart-tax").querySelector(".dollar");
const total = document.getElementById("cart-total").querySelector(".dollar");

// ******** events

window.addEventListener("load", () => {
  selectedProducts.innerHTML = updateAmount();
  finishOreder();
  mainTitle.remove();
});

main.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-minus")) {
    if (e.target.nextElementSibling.innerText > 1) {
      e.target.nextElementSibling.innerText--;

      e.target
        .closest(".main__product")
        .querySelector(".main__product-line-price").innerText = (
        e.target.nextElementSibling.innerText *
        e.target.closest(".main__product-info").querySelector(".dollar")
          .innerText
      ).toFixed(2);
    }
  } else if (e.target.classList.contains("fa-plus")) {
    e.target.previousElementSibling.innerText++;

    e.target
      .closest(".main__product")
      .querySelector(".main__product-line-price").innerText = (
      e.target.previousElementSibling.innerText *
      e.target.closest(".main__product-info").querySelector(".dollar").innerText
    ).toFixed(2);
  } else if (e.target.classList.contains("fa-trash-can")) {
    if (confirm("are you sure???") == true) {
      e.target.closest(".main__product").remove();

      amountOfProducts.innerText--;
    } else {
    }
  }
  selectedProducts.innerHTML = updateAmount();
  finishOreder();
});

nav.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash-can")) {
    document.querySelectorAll(".main__product");
    for (let i of document.querySelectorAll(".main__product")) {
      i.remove();
      selectedProducts.innerText = updateAmount();
      finishOreder();
      amountOfProducts.innerText--;
    }
    if (confirm("Are you sure you want to delete all???") == true) {
      e.target.closest(".main__product").remove();
    }
  }
});
// function subTotal(position) {
//     e.target.closest(".main__product").querySelector(".main__product-line-price").innerText = (e.target.{position}.innerText * e.target.closest(".main__product-info").querySelector(".dollar").innerText).toFixed(2)
// }

function updateAmount() {
  let totalAmount = document.getElementsByClassName("main__product-line-price");

  let sum = 0;
  for (let i of totalAmount) {
    sum += +i.innerText;
  }
  return sum.toFixed(2);
}

function finishOreder() {
  Number(selectedProducts.innerText) >= 3000 ||
  Number(selectedProducts.innerText) == 0
    ? (shipping.innerText = "0")
    : (shipping.innerText = "25.99");
  tax.innerText = (Number(selectedProducts.innerText) * 0.18).toFixed(2);
  total.innerText = (
    Number(shipping.innerText) +
    Number(tax.innerText) +
    Number(selectedProducts.innerText)
  ).toFixed(2);
}
