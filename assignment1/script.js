console.log("Happy JS :)");

let form = document.querySelector("#add_product");
let products = document.querySelector("#product_wrapper");

form.addEventListener("submit", function getList(e) {
  e.preventDefault();
  let p_name = document.getElementById("product_name").value;
  let image = document.getElementById("product_image").value;
  let price = document.getElementById("product_price").value;
  let product = new Product(p_name, image, price);
  if (p_name != "" && image != "" && price != "") {
    UI.createNewProduct(product);
    productStore.addProductToProducts(product);
    UI.showAlert("Product Created Successfully", "success");
  } else {
    UI.showAlert("Please fill Out the fileds", "error");
  }
});

document.addEventListener("DOMContentLoaded", (e) => {
  productStore.displayProduct();
});

products.addEventListener("click", (e) => {
  e.preventDefault();
  UI.removeProductFromProduct(e.target);
});

products.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("add_to_cart")) {
    let product = new cartProduct(e.target);
    cartUI.addToCart(product);
    UI.showAlert("Product Added To Cart", "success");
  }
});
