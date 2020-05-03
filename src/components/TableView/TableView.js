import React from "react";
import { Table } from "../Table/Table";
/**
 * This function will extract the column headers and the data from the given parameter and
 * forward it to the `Table` component for displaying the overall data.
 * @param parsedResult: An object containing details about the data and the data itself
 * @returns {*}
 * @constructor
 */
const TableView = ({ parseResult: parsedResult }) => {
  // https://react-table.js.org/quickstart#define-columns
  // In order to use react-table the columns must be converted into the
  // format required.
  // Note: We are using `useMemo` function from React to memoize/cache the value returned by the function in order
  // to avoid calling that function for every single update. The `parsedResult` object is included in the dependency
  // list of the `useMemo` so the latter knows that when the value of that object changes, it should invalidate its
  // cache and rerun the function to get an updated value for columns. Read the React documentation for more details on
  // the behavior of the `useMemo` function.
  // Do that here:
  const columns = React.useMemo(
    () => parsedResult.meta.fields.map(c => ({ Header: c, accessor: c })),
    [parsedResult]
  );

  // https://react-table.js.org/quickstart#define-row-shape
  // Since we used the header:true parameter data has already been parsed into the
  // correct format for react-table rows
  const data = React.useMemo(() => parsedResult.data, [parsedResult]);
  // Once the column and the data has been retrieved from the parsedResult object. We provide them to the `Table`
  // component whose responsibility is to display the table
  return <Table data={data} columns={columns} />;
};
export default TableView;
