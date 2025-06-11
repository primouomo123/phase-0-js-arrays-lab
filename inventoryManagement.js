// Write your code here

//Declaration of the products array
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

//Function to log the first product in the array
function logFirstProduct() {
  if (products.length > 0) {
    console.log(products[0]);
  } else {
    console.log("No products available.");
  }
}

//Function to add a new product
function addProduct(product) {
  if (product && typeof product === 'string') {
    products.push(product);
  } else {
    console.log("Invalid product name.");
  }
}

//Function to update a product name
function updateProductName(index, newName) {
  if (index >= 0 && index < products.length) {
    products[index] = newName;
  } else {
    console.log("Invalid index.");
  }
}

//Function to remove the last product
function removeLastProduct() {
  if (products.length > 0) {
    products.pop();
  } else {
    console.log("No products to remove.");
  }
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
