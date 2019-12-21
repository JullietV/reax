import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Context from './Context';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.scss';

import { PrivateRoute } from './components/private-route/PrivateRoute';

import routes from './routes';

import Auth from './containers/Auth/Auth';
import Blog from './containers/blog/Blog';
import Admin from './containers/admin/Admin';
import SiteConfig from './components/site-config/SiteConfig';

import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        theme: 'light',
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => {
        const ls = localStorage
        const THEME_VAR = 'theme'

        const newTheme = prevState.theme !== 'dark' ? 'dark' : 'light'

        ls.setItem(THEME_VAR, newTheme)

        return { theme:  newTheme};
    });
  }

  componentDidMount () {
    const ls = localStorage
    const THEME_VAR = 'theme'
    const themeSelected = ls.getItem(THEME_VAR)

    if (themeSelected) this.setState((prevState) => {
      return {...prevState, theme: themeSelected}
    })
  }

  render () {
    const ctx = {
        data: this.state,
        toggleTheme: this.toggleTheme,
    };

    return (
      <Provider store={store}>
        <Context.Provider value={ctx}>
          <div className={`reax-app ${this.state.theme}`}>
            <Router>
              <Switch>
                <Route path={routes.home} exact component={Blog} />
                <Route path={routes.login} exact component={Auth} />
                <PrivateRoute path={routes.admin} exact component={Admin} />
              </Switch>
            </Router>
            <SiteConfig />
          </div>
        </Context.Provider>
      </Provider>
    )
  };
}

export default App;
