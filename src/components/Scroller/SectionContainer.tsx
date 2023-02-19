import React from "react";

export const SectionContainer = ({ children, height = 100 }: any) => {
  return (
    <div
      style={{
        height: `${height}%`,
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};