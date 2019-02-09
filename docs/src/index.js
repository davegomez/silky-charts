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
  const baseURL = '/silky-charts';
  const pathname = window.location.pathname;
  const currentPath = pathname.includes(baseURL)
    ? pathname.replace(baseURL, '')
    : '/';
  const isValidPathname =
    currentPath && pages.map(({ path }) => path).includes(currentPath);

  console.log(currentPath);

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
        initial={isValidPathname ? currentPath : '/'}
      />
      <Router primary={false}>
        {currentPath === '/' && (
          <Redirect from={currentPath} to={baseURL} noThrow />
        )}
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
