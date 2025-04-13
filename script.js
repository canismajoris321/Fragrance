const users = [];

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("new-name").value;
  const email = document.getElementById("new-email").value;
  const password = document.getElementById("new-password").value;

  users.push({ name, email, password });

  alert(`Welcome, ${name}! Your account has been created.`);

  e.target.reset();
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const foundUser = users.find(user => user.email === email && user.password === password);

  const status = document.getElementById("login-status");
  if (foundUser) {
    alert(`Welcome back, ${foundUser.name}! Redirecting`);

    window.location.href = "projet.html"; 
  } else {
    status.textContent = "Invalid email or password ";
    status.style.color = "red";
  }

  e.target.reset();
});