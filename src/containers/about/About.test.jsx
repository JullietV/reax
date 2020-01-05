import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './About';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />, div);
  ReactDOM.unmountComponentAtNode(div);
});
