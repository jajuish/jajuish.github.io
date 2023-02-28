import React, { useCallback } from 'react';

import Scroller from "../Scroller";

interface IAppShelf {
  children: JSX.Element[];
}
export default function AppShelf({ children }: IAppShelf) {
  const handleClickScroll = (number: number) => {
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
      <Scroller
        length={children.length}
        handleClickScroll={handleClickScroll}
      />
      {renderChildren()}
    </div>
  )
}