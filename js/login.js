document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Dummy login check (replace with Firebase or backend call)
  if (email === "test@example.com" && password === "password123") {
    alert("Login successful!");
    window.location.href = "appointments.html";
  } else {
    alert("Invalid credentials. Please try again.");
  }
});