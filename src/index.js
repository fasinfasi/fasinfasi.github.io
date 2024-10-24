import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // You can remove this if you don't have global styles
import App from './App';  // This imports the main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Renders the App into the root div in index.html
);
