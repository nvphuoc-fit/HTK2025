// src/components/TranslatorForm.js
import React, { useState } from 'react';
import axios from 'axios';

function TranslatorForm({ setResult }) {
  const [sourceText, setSourceText] = useState('');
  const [direction, setDirection] = useState('en-vi');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/translate', {
        source_text: sourceText,
        direction: direction,
      });

      setResult(response.data.translated_text);
    } catch (error) {
      console.error('Translation error:', error);
      setResult('Error during translation. Please check backend server.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <textarea
          className="form-control"
          rows="4"
          placeholder="Enter text to translate..."
          value={sourceText}
          onChange={(e) => setSourceText(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="mb-3">
        <select
          className="form-select"
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
        >
          <option value="en-vi">English to Vietnamese</option>
          <option value="vi-en">Vietnamese to English</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Translate
      </button>
    </form>
  );
}

export default TranslatorForm;
