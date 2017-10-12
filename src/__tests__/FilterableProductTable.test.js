import React from 'react';
import { shallow } from 'enzyme';
import FilterableProductTable from '../components/FilterableProductTable';
import PRODUCTS from '../data/PRODUCTS';


it('FilterableProductTable renders without crashing', () => {
  shallow(<FilterableProductTable products={PRODUCTS}  />)
});

