import React from 'react';
import ReactDOM from 'react-dom';
import PostsEdit from './PostsEdit';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostsEdit />, div);
  ReactDOM.unmountComponentAtNode(div);
});
