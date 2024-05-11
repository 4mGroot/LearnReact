import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { createRoot } from 'react-dom/client';
// //การสร้าง Component
// class HelloComponent extends React.Component{
//   render(){
//     return <h1>สวัสดีค้าบบบบบ</h1>
//   }
// }
createRoot(document.getElementById('root')).render(<App />);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
