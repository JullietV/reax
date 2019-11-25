import React, {Component} from 'react';
import Context from './Context';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.scss';

import Auth from './components/Auth/Auth';
import Blog from './components/blog/Blog';
import SiteConfig from './components/site-config/SiteConfig';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        theme: 'light',
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => {
        return { theme: prevState.theme !== 'dark' ? 'dark' : 'light' };
    });
  }

  render () {
    const ctx = {
        data: this.state,
        toggleTheme: this.toggleTheme,
    };

    return (
      <Context.Provider value={ctx}>
        <div className={`reax-app ${this.state.theme}`}>
          <SiteConfig />
          <Blog />
        </div>
      </Context.Provider>
    )
  };
}

export default App;
