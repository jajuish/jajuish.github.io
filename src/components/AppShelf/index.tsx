import React, { useCallback } from 'react';
import Pager from "react-bootstrap/Pagination";
import PageItem from 'react-bootstrap/PageItem'

interface IAppShelf {
  children: JSX.Element[];
}
export default function AppShelf({ children }: IAppShelf) {
  const getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 0; i < children.length; i++) {
      pageNumbers.push(
        <PageItem
          key={i}
          onClick={() => handleClickScroll(i)}
        >
          {i + 1}
        </PageItem>,
      );
    }

    return [...pageNumbers];
  };

  const pagesNumbers = getPagesNumbers();

  const handleClickScroll = (number: any) => {
    const element = document.getElementById(`section-${number}`);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderChildren = useCallback(() => {
    let i = 0;
    const componentsToRender = []
    while (i < children.length) {
      componentsToRender.push(
        <React.Fragment key={i}>
          <div
            id={`section-${i}`}
            style={{
              transition: `transform ${1000}ms ${"ease-in-out"}`,
              outline: "none",
            }}
          >
            {children[i]}
          </div>
        </React.Fragment>
      )
      i++;
    }
    return componentsToRender;
  }, [children]);

  return (
    <div>
      <Pager className="pagination-additional-class" size="lg">
        {pagesNumbers}
      </Pager>
      {renderChildren()}
    </div>
  )
}