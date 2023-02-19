import React, { useState } from 'react';
import Pager from "react-bootstrap/Pagination";
import PageItem from 'react-bootstrap/PageItem'

import { Scroller } from './components';
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
          {i+1}
        </PageItem>,
      );
    }

    return [...pageNumbers];
  };

  const handleBeforePageChange = (number: any) => {
    console.log(number);
  };

  const pagesNumbers = getPagesNumbers();
  return (
    <div className="App">
      <Scroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
      >
        <Home />
        <About />
        <WorkEx />
      </Scroller>
      <Pager className="pagination-additional-class" size="lg">
        {pagesNumbers}
      </Pager>
    </div>
  );
}

export default App;
