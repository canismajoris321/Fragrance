

  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    
    const storedUser = JSON.parse(localStorage.getItem("fleurFernUser"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "account.html";
    } else {
      document.getElementById("login-status").innerText = "Invalid credentials.";
    }
  });

  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("new-name").value;
    const email = document.getElementById("new-email").value;
    const password = document.getElementById("new-password").value;

    const nameParts = fullName.trim().split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ") || "";

    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      address: "",
      phone: ""
    };

    
    localStorage.setItem("fleurFernUser", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "account.html";
  });

