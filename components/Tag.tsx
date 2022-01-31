import React from "react";

const Tag: React.FunctionComponent = ({ children }) => {
  return (
    <div
      className="ml-0.5 inline-block align-middle"
      style={{ marginTop: "-0.1rem" }}
    >
      <div
        className="text-xxs bg-gray-3 rounded-md leading-3 font-semibold tracking-wide"
        style={{ padding: "3px 6px" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Tag;
