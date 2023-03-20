import React, { useState } from 'react';
import { pageElementIdGenerator } from '../../utils/helpers';

import Scroller from "../Scroller";

interface IAppShelf {
  children: JSX.Element[];
}
export default function AppShelf({ children }: IAppShelf) {
  return (
    <div>
      <Scroller>
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