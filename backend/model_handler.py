from transformers import T5ForConditionalGeneration, T5Tokenizer
import torch

# Đường dẫn đến mô hình đã huấn luyện
model_path = "./my_t5_translation_model"

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Load mô hình và tokenizer
tokenizer = T5Tokenizer.from_pretrained(model_path)
model = T5ForConditionalGeneration.from_pretrained(model_path)

model.to(device)
model.eval()

# Hàm dịch 2 chiều
def translate_text(source_text, direction):
    if direction == "en-vi":
        input_text = f"translate English to Vietnamese: {source_text}"
    elif direction == "vi-en":
        input_text = f"translate Vietnamese to English: {source_text}"
    else:
        return "Unsupported translation direction."

    inputs = tokenizer(input_text, return_tensors="pt", max_length=256, truncation=True).to(device)

    with torch.no_grad():
        outputs = model.generate(**inputs, max_length=256, num_beams=5, early_stopping=True)

    translated_text = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return clean_translation_output(translated_text, direction)

# Hàm làm sạch ouput
def clean_translation_output(translated_text, direction):
    if direction == "en-vi":
        # Loại bỏ từ 'vi:' (nếu có) trong trường hợp dịch từ tiếng Anh sang tiếng Việt
        if translated_text.startswith("vi:"):
            translated_text = translated_text[3:].strip()
    elif direction == "vi-en":
        # Loại bỏ từ 'en:' (nếu có) trong trường hợp dịch từ tiếng Việt sang tiếng Anh
        if translated_text.startswith("en:"):
            translated_text = translated_text[3:].strip()

    return translated_text

