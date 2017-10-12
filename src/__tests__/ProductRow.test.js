
import React from 'react';
import { shallow } from 'enzyme';
import ProductRow from '../components/ProductRow';

it('renders without crashing', () => {
  shallow(<ProductRow product={product} key={product.name} />);
});
