// Function to calculate total petrol cost
function calculateTotal() {
    // Get values from input fields
    const costPerLiter = parseFloat(document.getElementById('costPerLiter').value);
    const litersPurchased = parseFloat(document.getElementById('litersPurchased').value);
  
    // Calculate total
    const total = costPerLiter * litersPurchased;
  
    // Display result, rounded to 2 decimal places
    document.getElementById('totalCost').textContent = `Total Cost: aed ${total.toFixed(2)}`;
  }
  