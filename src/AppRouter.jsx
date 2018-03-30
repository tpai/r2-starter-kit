import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
    }
    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component,
      });
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }
  return AsyncComponent;
}

class Routes extends Component {
  constructor() {
    super();
    this.routes = [
      {
        name: 'ArticleList',
        path: '/',
        exact: true,
      },
      {
        name: 'ArticleContent',
        path: '/article/:id',
      },
    ].map((route) => ({
      ...route,
      component: asyncComponent(() => import(`./containers/${route.name}`)),
    }));
  }
  static contextName = '__routes__';
  static childContextTypes = {
    [Routes.contextName]: PropTypes.arrayOf(PropTypes.object),
  };
  getChildContext() {
    return {
      [Routes.contextName]: this.routes,
    };
  }
  renderRoutes() {
    return this.routes.map((route) => this.renderRoute(route));
  }
  renderRoute({ name, path, exact, component }) {
    if (path) {
      return (
        <Route key={name} path={path} exact={exact} component={component} />
      );
    } else {
      return <div key="404">404 not found</div>;
    }
  }
  render() {
    return <Switch>{this.renderRoutes()}</Switch>;
  }
}

function AppRouter() {
  return (
    <Router>
      <div className="ts text container" style={{ margin: '1rem' }}>
        <Routes />
      </div>
    </Router>
  );
}

export default AppRouter;
