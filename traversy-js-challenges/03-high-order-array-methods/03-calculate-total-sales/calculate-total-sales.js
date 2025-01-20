function calculateTotalSalesWithTax(products, taxRate) {
  const salesWithoutTax = products.reduce((sum, curr) => {
    return sum + curr.price * curr.quantity;
  }, 0);
  return salesWithoutTax + salesWithoutTax * (taxRate / 100);
}

module.exports = calculateTotalSalesWithTax;
