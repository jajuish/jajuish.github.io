import React, { useState } from 'react';
import Pager from "react-bootstrap/Pagination";
import PageItem from 'react-bootstrap/PageItem'

import { Home, About, WorkEx } from './pages';

import "./App.scss"

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (number: any) => {
    console.log(number)
    setCurrentPage(number);
  };

  const getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 0; i < 3; i++) {
      pageNumbers.push(
        <PageItem
          key={i}
          onClick={() => handlePageChange(i)}
        >
          {i + 1}
        </PageItem>,
      );
    }

    return [...pageNumbers];
  };

  const pagesNumbers = getPagesNumbers();

  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="App">
      <Home id="section-1" />
      <About />
      <WorkEx />
      <Pager className="pagination-additional-class" size="lg">
        {pagesNumbers}
        <button className="btn-scroll" onClick={handleClickScroll}>
          Scroll Down
        </button>
      </Pager>
    </div>
  );
}

export default App;
