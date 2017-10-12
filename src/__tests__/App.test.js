import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('App (Snapshot)', () => {
  it('App renders without crashing', () => {
    const component = renderer.create(<App />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
