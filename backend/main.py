from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Có thể thay "*" bằng danh sách các URL nếu cần
    allow_credentials=True,
    allow_methods=["*"],  # Cho phép tất cả các phương thức HTTP
    allow_headers=["*"],  # Cho phép tất cả các headers
)

class TranslationRequest(BaseModel):
    source_text: str
    direction: str  

@app.post("/translate")
async def translate(data: TranslationRequest):
    from model_handler import translate_text  
    result = translate_text(data.source_text, data.direction)
    return {"translated_text": result}

