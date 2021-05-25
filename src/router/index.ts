import React from 'react';

const Home = React.lazy(() => import(/* webpackChunkName: "Home" */ '@/views/Home'));
const Todo = React.lazy(() => import(/* webpackChunkName: "Todo" */ '@/views/Todo'));

type TRoutes = {
  path: string;
  exact: boolean;
  component: React.LazyExoticComponent<React.FC>;
};

const routes: TRoutes[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/todo',
    exact: true,
    component: Todo,
  },
];

export default routes;
