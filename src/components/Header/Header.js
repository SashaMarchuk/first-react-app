import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/rocket.png';

import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="Header">
    <div className="Header__logo">
      <NavLink to="/">
        <img src={logo} alt="Logo" className="Header__logo__icon" />
      </NavLink>
    </div>
    <nav className="Header__nav">
      <ul className="Header__nav__list">
        <li className="Header__nav__list__item">
          <NavLink activeclassname="active" to="/">
            Home
          </NavLink>
        </li>
        <li className="Header__nav__list__item">
          <NavLink activeclassname="active" to="/game">
            Game
          </NavLink>
        </li>
        <li className="Header__nav__list__item">
          <NavLink activeclassname="active" to="/todo">
            ToDo
          </NavLink>
        </li>
      </ul>
      <div className="Header__nav__login">
        <NavLink to="/">Login</NavLink>
      </div>
    </nav>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
