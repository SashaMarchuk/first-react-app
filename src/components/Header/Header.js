import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/rocket.png';

import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="Header">
    <div className="Header__logo">
      <img src={logo} alt="Logo" className="Header__logo__icon" />
    </div>
    <nav className="Header__nav">
      <ul className="Header__nav__list">
        <li className="Header__nav__list__item">
          <Link to="/">Home</Link>
        </li>
        <li className="Header__nav__list__item">
          <Link to="/game">Game</Link>
        </li>
        <li className="Header__nav__list__item">
          <Link to="/todo">ToDo</Link>
        </li>
      </ul>
      <div className="Header__nav__login">
        <Link to="/">Login</Link>
      </div>
    </nav>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
