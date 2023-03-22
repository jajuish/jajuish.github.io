import React from 'react';

import { AppShelf } from './components';
import { Home, About, WorkEx, Projects, Volunteering, Hobbies, Links } from './pages';
import "./App.scss"

function App() {
  return (
    <div>
      <AppShelf>
        <Home />
        <About />
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
