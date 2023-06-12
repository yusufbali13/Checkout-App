const quantity = document.getElementsByClassName(
  "main__quantity-controller--text"
);
const productsQuantity = document.getElementById("span");
const cartShipping = document.getElementById("cart-shipping");
const cartTax = document.getElementById("cart-tax");
const cartTotal = document.getElementById("cart-total");

const deleteBtn = document.querySelector(".delete");
const deleteAll = document.querySelector("#delete-all");
const card = document.querySelector("#product-painel");
const mainPoductPrice = document.querySelector("#main-price");

deleteBtn.addEventListener("click", () => {
  card.remove();
});

deleteAll.addEventListener("click", () => {
  card.remove();
});

//**********TOTAL************/

const shipping = () => {
  if (Number(sumSelectedPrice.textContent) > 3000) {
    cartShipping.textContent = 0;
  } else {
    cartShipping.textContent = 25.99;
  }
};

const tax = () => {
  cartTax.textContent = Number(
    (Number(sumSelectedPrice.textContent) * 0.18).toFixed(2)
  );
};

const total = () => {
  cartTotal.textContent = Number(
    (
      Number(sumSelectedPrice.textContent) +
      Number(cartShipping.textContent) +
      Number(cartTax.textContent)
    ).toFixed(2)
  );
};
