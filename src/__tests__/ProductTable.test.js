import React from 'react';
import { shallow } from 'enzyme';
import ProductTable from '../components/ProductTable';
import PRODUCTS from '../data/PRODUCTS';


it('ProductTable renders without crashing', () => {
  const wrapper = shallow(<ProductTable products={PRODUCTS}  />)
});

