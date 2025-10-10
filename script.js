// Cart counter logic
let cartCount = 0;
function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
  alert("Item added to cart successfully!");
}

// Form validation
function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let address = document.getElementById("address").value.trim();
  let payment = document.getElementById("payment").value;

  if (name === "" || email === "" || address === "" || payment === "") {
    alert("Please fill all the fields before submitting!");
    return false;
  }

  // Simple Email format check
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address!");
    return false;
  }

  alert("🎉 Order placed successfully! Thank you for shopping with SmartShop!");
  return true;
}