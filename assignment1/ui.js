class Product {
  constructor(name, image, price) {
    this.name = name;
    this.price = price;
    this.image = image;
  }
}

class UI {
  static showAlert(message, className) {
    UI.clearAlert();
    let alertInside = document.querySelector("#product_body");
    let alertBefore = document.querySelector("#product_body>h4");
    let alertBox = document.createElement("div");
    alertBox.classList = "alert " + className;
    alertBox.setAttribute("role", "alert");
    alertBox.textContent = message;
    alertInside.insertBefore(alertBox, alertBefore);
    setTimeout(() => {
      alertBox.remove();
    }, 3000);
  }

  static clearAlert() {
    if (document.querySelector(".alert")) {
      document.querySelector(".alert").remove();
    }
  }

  static createNewProduct(item) {
    UI.clearEmptyProductText();
    productStore.checkProductExist(item);
    let products = document.querySelector("#product_wrapper");
    let product = document.createElement("div");
    product.classList = "col-md-4 my-2";
    product.innerHTML = ` 
        <div class="card">
            <a href="#" class="remove_product_from_products">X</a>
            <div class="card-body p-0">
                <img src="https://picsum.photos/200/100" class="w-100">
            </div>
            <div class="card-footer">
                <div class="title">${item.name}</div>
                <p class="price">${item.price}</p>
                <a href="#" class="btn btn-success add_to_cart">Add to cart</a>
            </div>
        </div>`;
    products.appendChild(product);
    this.clearFileds();
  }

  static clearFileds() {
    document.getElementById("product_name").value = "";
    document.getElementById("product_price").value = "";
  }

  static removeProductFromProduct(item) {
    if (item.classList.contains("remove_product_from_products")) {
      if (confirm("Are you sure you want to delete!")) {
        item.parentElement.parentElement.remove();
        this.showAlert("Product Remove Successfully", "success");
        productStore.removeProduct(item);
      }
    }
  }

  static clearEmptyProductText() {
    if (document.querySelector(".empty-product")) {
      document.querySelector(".empty-product").remove();
    }
  }

  static emptyProduct() {
    let products = document.querySelector("#product_wrapper");
    let product = document.createElement("div");
    product.classList = "col-12 empty-product";
    product.innerHTML = ` 
      <h1 class="text-center mt-5">No Product! Please Add a Product</h1>`;
    products.appendChild(product);
  }
}

// LocalStorage Class
class productStore {
  static getProucts() {
    let LSProducts = [];
    if (localStorage.getItem("LSProducts") === null) {
      LSProducts = [];
    } else {
      LSProducts = JSON.parse(localStorage.getItem("LSProducts"));
    }
    return LSProducts;
  }

  static checkProductExist(product) {
    let LSProducts = this.getProucts();
    LSProducts.forEach((item) => {
      if (item.name === product.name) {
        UI.showAlert("Prouct Name already exits :(", "error");
        return;
      }
    });
  }

  static addProductToProducts(product) {
    let LSProducts = this.getProucts();
    LSProducts.push(product);
    localStorage.setItem("LSProducts", JSON.stringify(LSProducts));
  }

  static displayProduct() {
    let LSProducts = this.getProucts();
    if (LSProducts.length > 0) {
      LSProducts.forEach((item) => {
        UI.createNewProduct(item);
      });
    } else {
      UI.emptyProduct();
    }
  }

  static removeProduct(item) {
    let LSProducts = this.getProucts();
    let product =
      item.nextElementSibling.nextElementSibling.childNodes[1].innerText;
    LSProducts.forEach((element) => {
      if (element.name === product) {
        LSProducts.splice("index", 1);
      }
      localStorage.setItem("LSProducts", JSON.stringify(LSProducts));
    });
  }
}

// Cart UI
class cartProduct {
  constructor(target) {
    this.name = target.previousElementSibling.previousElementSibling.innerText;
    this.price = target.previousElementSibling.textContent;
    this.image = "https://picsum.photos/200/100";
  }
}

class cartUI {
  static addToCart(product) {
    let table = document.querySelector("#cart_table");
    let row = document.createElement("tr");
    row.innerHTML = `
      <td class="name">${product.name}</td>
      <td class="price">${product.price}</td>
      <td><a href="#" class="remove_from_cart">X</a></td>
    `;
    table.appendChild(row);
  }
}

// MyCartLocalStorage
// class myCart {
//   static getCart() {
//     let myCart = [];
//     if (localStorage.getItem("myCart") === null) {
//       myCart = [];
//     } else {
//       myCart = JSON.parse(localStorage.getItem("myCart"));
//     }
//     return myCart;
//   }

//   static addProductToProducts(product) {
//     let LSProducts = this.getCart();
//     LSProducts.push(product);
//     localStorage.setItem("LSProducts", JSON.stringify(LSProducts));
//   }

//   static displayProduct() {
//     let LSProducts = this.getCart();
//     if (LSProducts.length > 0) {
//       LSProducts.forEach((item) => {
//         UI.createNewProduct(item);
//       });
//     } else {
//       UI.emptyProduct();
//     }
//   }

//   static removeProduct(item) {
//     let LSProducts = this.getProucts();
//     let product =
//       item.nextElementSibling.nextElementSibling.childNodes[1].innerText;
//     LSProducts.forEach((element) => {
//       if (element.name === product) {
//         LSProducts.splice("index", 1);
//       }
//       localStorage.setItem("LSProducts", JSON.stringify(LSProducts));
//     });
//   }
// }
