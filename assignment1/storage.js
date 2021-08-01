class Store {
  constructor() {
    let LSProducts = [],
      myCart = [];
    if (localStorage.getItem("LSProducts") === null) {
      LSProducts = [];
    } else {
      LSProducts = JSON.parse(localStorage.getItem("LSProducts"));
    }
    if (localStorage.getItem("myCart") === null) {
      myCart = [];
    } else {
      myCart = JSON.parse(localStorage.getItem("myCart"));
    }
    return LSProducts, myCart;
  }

  addProductToProducts() {
    
  }
}
