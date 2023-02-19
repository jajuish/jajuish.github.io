import React from 'react';

import { AppShelf } from './components';
import { Home, About, WorkEx } from './pages';
import "./App.scss"

function App() {
  return (
    <div className="App">
      <AppShelf>
        <Home />
        <About />
        <WorkEx />
      </AppShelf>
    </div>
  );
}

export default App;
