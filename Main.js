document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const username = localStorage.getItem("loggedInUsername");

    const loginLink = document.getElementById("login-link");
    const userGreeting = document.getElementById("user-greeting");
    const logoutBtn = document.getElementById("logout");

    if (isLoggedIn === "true" && username) {
      // Ẩn nút đăng nhập
      loginLink.style.display = "none";

      // Hiển thị lời chào
      userGreeting.textContent = `Xin chào, ${username}`;
      userGreeting.style.display = "inline";

      // Hiện nút đăng xuất
      logoutBtn.style.display = "inline";
    }

    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("loggedInUsername");
      window.location.href = "login.html"; // Chuyển về trang đăng nhập
    });
  });

