import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/* you can do put this ( or what is below)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(// this will only work if i remove the (React.StrictMode)
  <>
    <App />
  </>
);
*/


/* this is what it was before (above)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/*reportWebVitals();  this seems to be something i dont need but not sure*/
