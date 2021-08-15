// ITERATION 1

function updateSubtotal(product) {

  //Esto es lo mismo que lo de arriba pero resumido
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const suma = price * quantity;
  const subTotal = product.querySelector('.subtotal span').innerHTML = suma;
  //... your code goes here

}

function calculateAll() {

  // ITERATION 2

  const products = document.getElementsByClassName('product');

  let sumTotal = 0;

  document.querySelectorAll('.product').forEach(function (products) {

  sumTotal += updateSubtotal(products);
  })

  //... your code goes here

  // ITERATION 3

  document.querySelector('#total-value span').innerText = sumTotal;
  return sumTotal;

  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
