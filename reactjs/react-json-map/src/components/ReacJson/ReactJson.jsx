import React from "react";
import menuJSon from "../../mock/data.json";

const ReactJson = () => {
  const menu = menuJSon.menu.map((data) => {
    return <li>{data.name}</li>;
  });
  return (
    <>
      <ul>{menu}</ul>;
    </>
  );
};

export default ReactJson;
