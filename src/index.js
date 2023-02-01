import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{
      textAlign: "center",
      backgroundColor: "aqua"
    }}>
      <h1>Available Products</h1>
    </div>
    <App />
  </React.StrictMode>
);
reportWebVitals();
