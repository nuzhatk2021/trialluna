document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    // Dummy credentials
    const validUsername = "moonwalker";
    const validPassword = "trail123";

    if (username === validUsername && password === validPassword) {
      alert("Login successful! Redirecting...");
      window.location.href = "dashboard.html"; // Replace with your actual page
    } else {
      alert("Invalid username or password.");
    }
  });
});
