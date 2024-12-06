import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ValidationModal from './lib/ValidationModal.tsx';
export { default as ValidationModal } from './lib/ValidationModal.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ValidationModal></ValidationModal>
  </React.StrictMode>
);
