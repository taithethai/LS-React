import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import expect from 'expect';
import { shallow } from 'enzyme';

describe('Home', () => {
  it('Should render hello world', () => {
    const home = shallow(<App />);
    expect(home.find('h2').text()).toEqual('Welcome to React');
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
