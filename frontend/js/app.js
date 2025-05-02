// Swap languages
document.getElementById('swapBtn').addEventListener('click', () => {
    const source = document.getElementById('sourceLang');
    const target = document.getElementById('targetLang');
    const temp = source.value;
    source.value = target.value;
    target.value = temp;
});

// Clear input and output
document.getElementById('clearBtn').addEventListener('click', () => {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
});

// Upload file content to input
document.getElementById('fileUpload').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('inputText').value = e.target.result;
    };
    reader.readAsText(file);
});

// Fake translation (bạn sẽ nối API/model backend ở đây)
document.getElementById('translateBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const sourceLang = document.getElementById('sourceLang').value;
    const targetLang = document.getElementById('targetLang').value;

    // Demo: Đảo ngược chuỗi để giả lập kết quả dịch (sau này thay bằng model thực tế)
    const translated = inputText.split('').reverse().join('');
    document.getElementById('outputText').value = `[${sourceLang} → ${targetLang}]:\n${translated}`;
});
