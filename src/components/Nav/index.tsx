import React from 'react';
import { Link } from 'react-router-dom';
import cn from './index.scss';

const Nav: React.FC = () => (
  <ul className={cn.container}>
    <li>
      <Link to='/home'>go to home</Link>
    </li>
    <li>
      <Link to='/todo'>go to todo</Link>
    </li>
  </ul>
);
export default Nav;
