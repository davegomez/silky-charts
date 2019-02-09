import React from 'react';
import { render } from 'react-dom';
import { Router, Redirect } from '@reach/router';
import Layout from './containers/Layout';
import Header from './containers/Header';
import Navigation from './containers/Navigation';
import Content from './containers/Content';
import Introduction from './components/Introduction';
import BarChart from './components/BarChart';
import pages from './pages.json';
import 'normalize.css';
import './styles.css';

const App = () => {
  const pathname = window.location.pathname;
  const defaultPath = '/';
  const currentPath =
    pathname !== defaultPath ? pathname.replace(defaultPath, '') : pathname;
  const isInvalidPath = !pages
    .map(({ pathname }) => pathname)
    .includes(currentPath);

  const contentComponents = {
    Introduction,
    BarChart,
  };

  return (
    <Layout>
      <Header />
      <Navigation
        items={pages}
        initialPath={isInvalidPath ? defaultPath : currentPath}
      />
      <Content>
        <Router>
          {isInvalidPath && (
            <Redirect from={currentPath} to={defaultPath} noThrow />
          )}
          {pages.map(({ component, pathname }, idx) => {
            const Component = contentComponents[component];
            return (
              <Component
                key={idx}
                path={pathname}
                default={pathname === defaultPath}
              />
            );
          })}
        </Router>
      </Content>
    </Layout>
  );
};

render(<App />, document.getElementById('app'));
