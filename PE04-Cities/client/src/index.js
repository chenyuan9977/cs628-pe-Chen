// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Note the change in import path
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Create a root container to render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within the root
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
