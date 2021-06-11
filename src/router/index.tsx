import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ShowEasyV from '@/components/Vingo';
import routes from '@/router/routerConfig';
import Nav from '@/components/Nav';

const App: React.FC = () => (
  <div>
    hello react
    <ShowEasyV />
    <Router>
      <Nav />
      <Suspense fallback={<div>加载中...</div>}>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
        <Redirect exact from='/' to='/home' />
      </Suspense>
    </Router>
  </div>
);

export default App;
