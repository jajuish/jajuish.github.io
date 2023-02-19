import React from 'react';

import { Scroller } from './components';
import { Home, About, WorkEx } from './pages';

function App() {
  return (
    <div className="App">
      <Scroller>

        <Home />
        <About />
        <WorkEx />
      </Scroller>
    </div>
  );
}

export default App;
