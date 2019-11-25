import React from 'react';
import ReactDOM from 'react-dom';
import ContextSon from './ContextSon';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContextSon />, div);
  ReactDOM.unmountComponentAtNode(div);
});
