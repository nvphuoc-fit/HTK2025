// src/components/TranslationResult.js
import React from 'react';

function TranslationResult({ result }) {
  if (!result) return null;

  return (
    <div className="alert alert-success mt-4" role="alert">
      <h5>Translated Text:</h5>
      <p>{result}</p>
    </div>
  );
}

export default TranslationResult;
