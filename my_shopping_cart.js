const cartItems = [
    {
      title: "Giáo trình Toán cao cấp",
      description: "Tài liệu đầy đủ và chi tiết về Toán cao cấp cho sinh viên khối kỹ thuật.",
      price: 50000,
      quantity: 1
    },
    {
      title: "Báo cáo thực tập ngành CNTT",
      description: "Mẫu báo cáo thực tập chi tiết, dễ chỉnh sửa và phù hợp với nhiều đề tài.",
      price: 70000,
      quantity: 1
    },
    {
      title: "Đồ án Quản lý sinh viên bằng React",
      description: "Source code + báo cáo đầy đủ, dễ triển khai và chỉnh sửa.",
      price: 120000,
      quantity: 1
    }
  ];
  
  const cartContainer = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('total');
  const modal = document.getElementById('modal');
  const paymentMessage = document.getElementById('payment-message');
  const successAlert = document.getElementById('success-alert');
  
  function formatCurrency(value) {
    return value.toLocaleString('vi-VN') + '₫';
  }
  
  function loadCart() {
    cartContainer.innerHTML = '';
    let total = 0;
  
    cartItems.forEach((item, index) => {
      total += item.price * item.quantity;
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="price">${formatCurrency(item.price)}</div>
        <div class="quantity-controls">
          <button onclick="changeQuantity(${index}, -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="changeQuantity(${index}, 1)">+</button>
        </div>
        <div class="total-price">${formatCurrency(item.price * item.quantity)}</div>
        <button onclick="removeItem(${index})">Xoá</button>
      `;
      cartContainer.appendChild(card);
    });
  
    totalDisplay.textContent = formatCurrency(total);
  }
  
  function changeQuantity(index, delta) {
    const item = cartItems[index];
    item.quantity = Math.max(1, item.quantity + delta);  // Ensure quantity doesn't go below 1
    loadCart();
  }
  
  function removeItem(index) {
    cartItems.splice(index, 1);
    loadCart();
  }
  
  document.getElementById('checkout-btn').addEventListener('click', () => {
    modal.style.display = 'flex';
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    paymentMessage.innerHTML = `Cảm ơn bạn đã chọn EDUHIGHT!<br>Tổng thanh toán của bạn là <strong>${formatCurrency(total)}</strong>`;
  });
  
  document.getElementById('confirm-payment').addEventListener('click', () => {
    modal.style.display = 'none';
    successAlert.classList.remove('hidden');
  });
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
  
  loadCart();
  