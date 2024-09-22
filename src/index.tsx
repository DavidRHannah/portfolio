import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BackgroundTop from './background-top.png';
import BackgroundBottom from './background-bottom.png';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="gradient-top">
      <img 
          alt="Gradient background"
          src={BackgroundTop} 
      />
    </div>
    <App />
    <div className="gradient-bottom">
      <img 
          alt="Gradient background"
          src={BackgroundBottom} 
      />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
