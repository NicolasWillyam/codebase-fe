<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Login</title>
</head>
<body>
  <form id="loginForm">
    <input type="text" id="username" placeholder="Username" required />
    <input type="password" id="password" placeholder="Password" required />
    <button type="submit">Login</button>
  </form>

  <div id="message"></div>

  <script>
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault(); // ngăn form submit reload trang

      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value;

      if (!username || !password) {
        messageDiv.textContent = 'Vui lòng nhập đầy đủ thông tin.';
        return;
      }

      try {
        const response = await fetch('https://your-backend-api.com/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
          throw new Error('Sai tên đăng nhập hoặc mật khẩu');
        }

        const data = await response.json();

        // Giả sử backend trả về token
        const token = data.token;

        // Lưu token vào localStorage hoặc cookie để dùng cho các request sau
        localStorage.setItem('authToken', token);

        messageDiv.style.color = 'green';
        messageDiv.textContent = 'Đăng nhập thành công!';

        // Redirect hoặc thay đổi giao diện sau khi đăng nhập thành công
        // window.location.href = '/dashboard.html';

      } catch (error) {
        messageDiv.style.color = 'red';
        messageDiv.textContent = error.message;
      }
    });
  </script>
</body>
</html>
