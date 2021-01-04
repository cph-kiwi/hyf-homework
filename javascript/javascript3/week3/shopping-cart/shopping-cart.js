class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    this.products = this.products.filter((item) => item !== product);
  }

  searchProduct(productName) {
    return this.products.filter((product) => product === productName);
  }

  getTotal() {
    let initialValue = 0;
    return this.products.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      initialValue
    );
  }

  renderProducts() {
    const bodyElement = document.querySelector("body");
    const productsUlElement = document.createElement("ul");
    this.products.forEach((product) => {
      const liElement = document.createElement("li");
      liElement.classList.add("list-item");
      liElement.textContent = `Name: ${product.name}
        Price: ${product.price}`;
      productsUlElement.appendChild(liElement);
    });
    bodyElement.appendChild(productsUlElement);
  }

  getUser() {
    // Implement functionality here
    const url = "https://jsonplaceholder.typicode.com/users/1";
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatscreen);
shoppingCart.renderProducts();
