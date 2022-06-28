import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './App.scss';
import Game from './components/Game/Game';
import Header from './components/Header/Header';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route exact path="/tic-tac-toe" element={<Game />}></Route>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<Navigate to="/tic-tac-toe" replace />} />
    </Routes>
  </div>
);

App.propTypes = {};

App.defaultProps = {};

export default App;
