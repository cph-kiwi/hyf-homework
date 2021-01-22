const ulElement = document.querySelector("#ul");
const userPElement = document.querySelector("#username");
const totalPElement = document.querySelector("#total");
const selectElement = document.querySelector("#product-options");
const addButton = document.querySelector("#add-to-cart");

let availableProducts = [];

function renderSearchOptions() {
  availableProducts.forEach((product) => {
    const optionElement = document.createElement("option");
    optionElement.textContent = `${product.name}`;
    optionElement.value = `${product.name}`;
    selectElement.appendChild(optionElement);
  });
}

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
    return this.products.filter((product) => product.name === productName);
  }

  getTotal() {
    let initialValue = 0;
    return this.products.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      initialValue
    );
  }

  removeItem(index) {
    this.products.splice(index, 1);
  }

  renderProducts() {
    ulElement.innerHTML = "";
    this.products.forEach((product, productIndex) => {
      const liElement = document.createElement("li");
      liElement.classList.add("list-item");
      liElement.textContent = `Name: ${product.name}
        Price: ${product.price}`;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete?";
      deleteButton.classList.add("delete-button");
      liElement.appendChild(deleteButton);
      ulElement.appendChild(liElement);
      deleteButton.addEventListener("click", () => {
        shoppingCart.removeItem(productIndex);
        totalPElement.textContent = `Shopping cart total: ${shoppingCart.getTotal()}`;
        shoppingCart.renderProducts();
      });
    });
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
availableProducts.push(flatscreen);

const laptop = new Product("laptop", 30000);
availableProducts.push(laptop);

const coffeeMachine = new Product("coffee machine", 800);
availableProducts.push(coffeeMachine);

const playstation = new Product("playstation", 5000);
availableProducts.push(playstation);

const stereo = new Product("stereo", 2000);
availableProducts.push(stereo);

const headphones = new Product("headphones", 1200);
availableProducts.push(headphones);

const mouse = new Product("mouse", 500);
availableProducts.push(mouse);

const keyboard = new Product("keyboard", 300);
availableProducts.push(keyboard);

const charger = new Product("charger", 400);
availableProducts.push(charger);

const gameController = new Product("game controller", 600);
availableProducts.push(gameController);

const speaker = new Product("speaker", 3000);
availableProducts.push(speaker);

const cable = new Product("cable", 600);
availableProducts.push(cable);

const adapter = new Product("adapter", 100);
availableProducts.push(adapter);

renderSearchOptions();

// console.log(shoppingCart.searchProduct("adapter"));

shoppingCart.getUser();

addButton.addEventListener("click", () => {
  shoppingCart.addProduct(
    availableProducts.find((product) => {
      return selectElement.value === product.name;
    })
  );
  totalPElement.textContent = `Shopping cart total: ${shoppingCart.getTotal()}`;
  shoppingCart.renderProducts();
});

// currency examples: EUR, GBP, NZD, USD
// SInce I've used an API, convertToCurrency returns a promise and this is how I have to call it.
laptop.convertToCurrency("GBP").then(console.log);
