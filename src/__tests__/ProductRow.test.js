
import React from 'react';
import { shallow } from 'enzyme';
import ProductRow from '../components/ProductRow';
product =

it('renders ProductRow without crashing without crashing', () => {
  shallow(<ProductRow product={product} key={product.name} />);
});

//this object below exists in order to pass the smoke test above.
var product = { name: "Peter Pan The Dark Lord"}
