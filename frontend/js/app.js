let currentLang = 'vi';

// Submit form
document.getElementById('predict-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const inputText = document.getElementById('input-text').value.trim();

  if (!inputText) {
    alert(currentLang === 'vi' ? 'Vui lòng nhập văn bản hoặc tải file.' : 'Please enter text or upload a file.');
    return;
  }

  document.getElementById('result').textContent = currentLang === 'vi' ? 'Đang xử lý...' : 'Processing...';

  // Giả lập kết quả
  setTimeout(() => {
    document.getElementById('result').textContent = currentLang === 'vi'
      ? 'Kết quả mẫu: Văn bản này thuộc lớp Tin tức Khoa học (giả lập)'
      : 'Sample result: This text belongs to the Science News class (mocked)';
  }, 1000);
});

// Nút Xóa (Clear)
document.getElementById('clear-btn').addEventListener('click', function() {
  document.getElementById('input-text').value = '';
  document.getElementById('file-upload').value = '';
  document.getElementById('result').textContent = currentLang === 'vi' ? 'Chưa có kết quả.' : 'No result yet.';
});

// Upload file và đọc nội dung
document.getElementById('file-upload').addEventListener('change', function() {
  const file = this.files[0];
  if (file && file.type === 'text/plain') {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('input-text').value = e.target.result;
    };
    reader.readAsText(file, 'UTF-8');
  } else {
    alert(currentLang === 'vi' ? 'Chỉ chấp nhận file .txt.' : 'Only .txt files are accepted.');
    this.value = '';
  }
});

// Đổi ngôn ngữ
document.getElementById('lang-btn').addEventListener('click', function() {
  if (currentLang === 'vi') {
    currentLang = 'en';
    document.getElementById('app-title').textContent = 'Text Classification App (Transformer)';
    document.getElementById('input-header').textContent = 'Enter text to classify';
    document.getElementById('file-label').textContent = 'Or upload a text file (.txt)';
    document.getElementById('predict-btn').textContent = 'Predict';
    document.getElementById('clear-btn').textContent = 'Clear';
    document.getElementById('result-header').textContent = 'Prediction result';
    document.getElementById('result').textContent = 'No result yet.';
    this.textContent = 'Tiếng Việt';
  } else {
    currentLang = 'vi';
    document.getElementById('app-title').textContent = 'Ứng dụng Phân loại văn bản (Transformer)';
    document.getElementById('input-header').textContent = 'Nhập văn bản cần phân loại';
    document.getElementById('file-label').textContent = 'Hoặc tải file văn bản (.txt)';
    document.getElementById('predict-btn').textContent = 'Dự đoán';
    document.getElementById('clear-btn').textContent = 'Xóa';
    document.getElementById('result-header').textContent = 'Kết quả dự đoán';
    document.getElementById('result').textContent = 'Chưa có kết quả.';
    this.textContent = 'English';
  }
});
