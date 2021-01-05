const bodyElement = document.querySelector("body");
const userPElement = document.querySelector("#username");
const totalPElement = document.querySelector("#total");

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  convertToCurrency(currency) {
    if (this.rates) {
      const rate = this.rates[currency];
      return Promise.resolve(Math.round(this.price * rate));
    }

    const url = `https://api.exchangeratesapi.io/latest?base=DKK`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.rates = data.rates;
        const rate = data.rates[currency];
        return Math.round(this.price * rate);
      })
      .catch((error) => {
        console.error(error);
      });
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
    const url = "https://jsonplaceholder.typicode.com/users/1";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        userPElement.textContent = `Username: ${data.username}`;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatscreen);

const laptop = new Product("laptop", 30000);
shoppingCart.addProduct(laptop);

const coffeeMachine = new Product("coffee machine", 800);
shoppingCart.addProduct(coffeeMachine);

const playstation = new Product("playstation", 5000);
shoppingCart.addProduct(playstation);
shoppingCart.removeProduct(playstation);

const stereo = new Product("stereo", 2000);
shoppingCart.addProduct(stereo);

const headphones = new Product("headphones", 1200);
shoppingCart.addProduct(headphones);

const mouse = new Product("mouse", 500);
shoppingCart.addProduct(mouse);

const keyboard = new Product("keyboard", 300);
shoppingCart.addProduct(keyboard);

const charger = new Product("charger", 400);
shoppingCart.addProduct(charger);

const gameController = new Product("gameController", 600);
shoppingCart.addProduct(gameController);
shoppingCart.removeProduct(gameController);

const speaker = new Product("speaker", 3000);
shoppingCart.addProduct(speaker);

const cable = new Product("cable", 600);
shoppingCart.addProduct(cable);

const adapter = new Product("adapter", 100);
shoppingCart.addProduct(adapter);

shoppingCart.getUser();
totalPElement.textContent = `Shopping cart total: ${shoppingCart.getTotal()}`;
shoppingCart.renderProducts();

// currency examples: EUR, GBP, NZD, USD
// SInce I've used an API, convertToCurrency returns a promise and this is how I have to call it.
laptop.convertToCurrency("GBP").then(console.log);
