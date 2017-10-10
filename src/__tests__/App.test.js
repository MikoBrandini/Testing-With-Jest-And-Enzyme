import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('renders without crashing', () => {
  const tr = document.createElement('tr');
  ReactDOM.render(<App />, tr);
});
