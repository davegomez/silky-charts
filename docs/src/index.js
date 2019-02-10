import React from 'react';
import { render } from 'react-dom';
import { Router, Redirect } from '@reach/router';
import getCurrentPath from './utils/getCurrentPath';
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
  const baseURL = '/silky-charts';
  const pathname = window.location.pathname;
  const currentPath = getCurrentPath(baseURL, pathname);

  const contentComponents = {
    Introduction,
    BarChart,
  };

  return (
    <Layout>
      <Header />
      <Navigation
        items={pages}
        baseURL={baseURL}
        initial={pathname !== currentPath ? currentPath : null}
      />
      <Router primary={false}>
        <Content path={baseURL}>
          {pages.map(({ component, path }, idx) => {
            const Component = contentComponents[component];
            return <Component key={idx} path={path} default={path === '/'} />;
          })}
        </Content>
      </Router>
    </Layout>
  );
};

render(<App />, document.getElementById('app'));
