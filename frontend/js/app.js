// Hàm reset active menu
function resetActiveMenu() {
    document.querySelectorAll('.menu button').forEach(btn => btn.classList.remove('active'));
}

// Hàm cập nhật vùng nhập liệu
function setInputArea(type) {
    const inputArea = document.getElementById('inputArea');
    inputArea.innerHTML = ''; // Xóa nội dung cũ

    if (type === 'text') {
        inputArea.innerHTML = `<textarea placeholder="Nhập văn bản..."></textarea>`;
    } else if (type === 'image') {
        inputArea.innerHTML = `
            <input type="file" id="imageInput" accept="image/*">
            <img id="imagePreview" src="" alt="Xem trước ảnh">
        `;
        document.getElementById('imageInput').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(evt) {
                    document.getElementById('imagePreview').src = evt.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    } else if (type === 'document') {
        inputArea.innerHTML = `<input type="file" id="documentInput" accept=".pdf,.doc,.docx,.txt">`;
    } else if (type === 'website') {
        inputArea.innerHTML = `<input type="text" id="websiteInput" placeholder="Nhập link trang web...">`;
    }
}

// Xử lý nút menu
document.getElementById('btnText').addEventListener('click', function() {
    resetActiveMenu();
    this.classList.add('active');
    setInputArea('text');
});
document.getElementById('btnImage').addEventListener('click', function() {
    resetActiveMenu();
    this.classList.add('active');
    setInputArea('image');
});
document.getElementById('btnDocument').addEventListener('click', function() {
    resetActiveMenu();
    this.classList.add('active');
    setInputArea('document');
});
document.getElementById('btnWebsite').addEventListener('click', function() {
    resetActiveMenu();
    this.classList.add('active');
    setInputArea('website');
});

// Xoá nội dung input hiện tại
document.getElementById('clearBtn').addEventListener('click', function() {
    const inputArea = document.getElementById('inputArea');
    const currentInput = inputArea.querySelector('textarea, input');
    if (currentInput) currentInput.value = '';

    const imgPreview = document.getElementById('imagePreview');
    if (imgPreview) imgPreview.src = '';
});

// Hoán đổi ngôn ngữ
document.getElementById('swapBtn').addEventListener('click', function() {
    const leftLang = document.querySelector('.left-panel .lang-select .active');
    const rightLang = document.querySelector('.right-panel .lang-select .active');

    let leftText = leftLang.textContent;
    let rightText = rightLang.textContent;

    leftLang.textContent = rightText;
    rightLang.textContent = leftText;
});
