import React from 'react';
import ReactDOM from 'react-dom';
import ProductCategoryRow from '../components/ProductCategoryRow';

it('renders without crashing', () => {
  const tr = document.createElement('div');
  ReactDOM.render(<ProductCategoryRow />, tr);
});
