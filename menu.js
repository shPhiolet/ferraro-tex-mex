// An array of item prices by ID. Each element is the price of the item whose ID
// is equal to its index.
const PRICES = [
  // Appetizers
  3,   // id 0, Nachos
  3,   // id 1, Quesadillas
  2,   // id 2, Soup
  // Entrees
  7,   // id 3, Carbon
  9,   // id 4, Pastor
  6,   // id 5, Enchiladas
  10,  // id 6, Parrillada
  // Desserts
  1,   // id 7, Churros
  1,   // id 8, Pastel
  1,   // id 9, Ice Cream
]

// Toggles the visibility of the quantity input; we don't need to see it if the
// item isn't selected!
const toggleQuantityInput = itemID => {
  // The checkbox corresponding to the passed-in item ID...
  const checkbox = document.getElementById(itemID);
  // ... and its corresponding quantity input.
  const quantityInput = document.getElementById(`${itemID}Quantity`);

  // If the box is checked, make the quantity input visible, otherwise, hide it.
  quantityInput.style.visibility = checkbox.checked ? 'visible' : 'hidden';
}

// Calculates the price of the user's order and dsiplay's it back to them.
const completeOrder = () => {
  // Running total for the items in the order.
  let total = 0;

  // Loop through the list of item prieces. Because their itemIDs correspond
  // with their index in the prices list, we can treat their index as thier item
  // ID.
  PRICES.forEach((price, id) => {
    // if the box for the corresponding item is checked...
    if (document.getElementById(id).checked) {
      // ... get its quantity from its corresponding quantity input...
      const quantity = parseInt(
        document.getElementById(`${id}Quantity`).value
      );
      // ... multiply the quantity by its price, and add it all to the running
      // total.
      total += price * quantity;
    }
  })

  // Get the tip from the tip input.
  const tip = parseInt(document.getElementById('tip').value);
  // Add the tip and the running total to get the grand total price of the
  // user's order.
  const grandTotal = total + tip;
  // Format the check for the user's order.
  const format = '---------------------------------\n' +
    `Total order: $${total}.00\n` +
    `Tip: $${tip}.00\n` +
    `Grand Total: $${grandTotal}.00\n` +
    '---------------------------------\n';
  // Show the user their check.
  console.log(format);
  alert(format);
}
