import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './App.scss';
import Header from './components/Header/Header';
import GamePage from './pages/GamePage/GamePage';
import TodoPage from './pages/TodoPage/TodoPage';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route exact path="/game" element={<GamePage />}></Route>
      <Route exact path="/todo" element={<TodoPage />}></Route>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<Navigate to="/game" replace />} />
    </Routes>
  </div>
);

App.propTypes = {};

App.defaultProps = {};

export default App;
