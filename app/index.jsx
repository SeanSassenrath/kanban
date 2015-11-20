import './main.css';
import 'array.prototype.findindex';
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';

main();

function main() {
  const app = document.createElement('div')

  document.body.appendChild(app);

  ReactDom.render(<App />, app);
}
