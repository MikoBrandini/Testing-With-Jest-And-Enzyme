import React from 'react';
import ReactDOM from 'react-dom';
import ProductCategoryRow from '../components/ProductCategoryRow';

test('the props in Product Category Row are defined', () => {
  expect(ProductCategoryRow('these are hypothetical props')).toBeDefined();
});
