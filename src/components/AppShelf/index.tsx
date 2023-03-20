import React, { useState } from 'react';
import { pageElementIdGenerator } from '../../utils/helpers';

import Scroller from "../Scroller";

interface IAppShelf {
  children: JSX.Element[];
}
export default function AppShelf({ children }: IAppShelf) {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const handleClickScroll = (num: number) => {
    const element = document.getElementById(pageElementIdGenerator(num));
    setSelectedItem(num)
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Scroller
        handleClickScroll={handleClickScroll}
        selectedItem={selectedItem}
      >
        {children.map((child, i) =>
          <div
            id={pageElementIdGenerator(i)}
            key={i}
          >
            {child}
          </div>
        )}
      </Scroller>
    </div>
  )
}