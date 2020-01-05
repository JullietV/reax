import React from 'react';
import ReactDOM from 'react-dom';
import PostSummarized from './PostSummarized';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostSummarized />, div);
  ReactDOM.unmountComponentAtNode(div);
});
