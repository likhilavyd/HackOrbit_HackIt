document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Dummy login check
    if (email === "test@example.com" && password === "password123") {
      alert("Login successful!");
      window.location.href = "../html/home.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
}); 