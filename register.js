document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const email = document.querySelector('input[type="email"]').value.trim();
      const password = document.querySelectorAll('input[type="password"]')[0].value.trim();
      const confirmPassword = document.querySelectorAll('input[type="password"]')[1].value.trim();
      const agree = document.querySelector('input[type="checkbox"]').checked;
  
      if (!email || !password || !confirmPassword) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
      }
  
      if (password !== confirmPassword) {
        alert("Mật khẩu không khớp.");
        return;
      }
  
      if (!agree) {
        alert("Bạn cần đồng ý với chính sách của trang web.");
        return;
      }
  
      // Giả lập lưu dữ liệu đăng ký vào localStorage
      localStorage.setItem("registeredEmail", email);
      localStorage.setItem("registeredPassword", password);
  
      alert("Đăng ký thành công! Bây giờ bạn có thể đăng nhập.");
      window.location.href = "login.html";
    });
  });
  