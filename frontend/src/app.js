// src/App.js
import React, { useState } from 'react';
import TranslatorForm from './components/TranslatorForm';
import TranslationResult from './components/TranslationResult';

function App() {
  const [result, setResult] = useState('');

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Translation App</h1>
      <TranslatorForm setResult={setResult} />
      <TranslationResult result={result} />
    </div>
  );
}

export default App;
