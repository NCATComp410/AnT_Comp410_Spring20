import React from "react";

const TableView = ({ data }) => {
  return <pre>{JSON.stringify(data, undefined, 2)}</pre>;
};
export default TableView;
