import React, { Component } from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import PRODUCTS from './data/PRODUCTS';


class App extends Component {
  render() {
    return (
      <div className="App">
      <FilterableProductTable products={PRODUCTS}/>
      </div>
    );
  }
}

export default App;
