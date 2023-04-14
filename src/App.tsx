import React from 'react';

import { AppShelf } from './components';
import { Home, WorkEx, Projects, Volunteering, Hobbies, Links } from './pages';
import "./App.scss"

function App() {
  return (
    <div>
      <AppShelf>
        <Home />
        <WorkEx />
        <Projects />
        <Volunteering />
        <Hobbies />
        <Links />
      </AppShelf>
    </div>
  );
}

export default App;
