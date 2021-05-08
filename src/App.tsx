import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import routes from 'Src/router';
import ShowEasyV from 'Components/ShowEasyV';

interface IProps {
  name: string;
}

const App: React.FC<IProps> = (props) => (
  // const { name, age } = props;
  <div>
    hello react
    <ShowEasyV />
    <BrowserRouter>
      <Link to='/'>go to home</Link>
      <Link to='/todo'>go to todo</Link>
      <Suspense fallback={<div>加载中...</div>}>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
        <Switch>
          <Redirect exact from='/' to='/home' />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </div>
);

export default App;
