import React from 'react';
import ReactDOM from 'react-dom';
import SiteConfig from './SiteConfig';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SiteConfig />, div);
  ReactDOM.unmountComponentAtNode(div);
});
