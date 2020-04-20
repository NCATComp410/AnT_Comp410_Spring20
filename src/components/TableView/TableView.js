import React from "react";
import { Table } from "./Table";

<<<<<<< HEAD
// https://react-table.js.org
// react-table has several useful functions for working with
// and manipulating tables
import {
  useTable, useSortBy
} from 'react-table'

// This function will display a basic table of values from the csv file
const TableView = ({ parseResult }) => {
    // https://react-table.js.org/quickstart#define-columns
    // In order to use react-table the columns must be converted into the
    // format required.  Do that here:
    const columns = parseResult.meta.fields.map(c => ({ Header: c, accessor: c }));

    // https://react-table.js.org/quickstart#define-row-shape
    // Since we used the header:true parameter data has already been parsed into the
    // correct format for react-table rows
    const data = parseResult.data;
    console.log(data);

    // https://react-table.js.org/quickstart#implement-usetable-hook
    // Build the table
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data},
        useSortBy);

    // Render the actual table UI
    return <table {...getTableProps()} style={{border: 'solid 1px black'}}>
        <thead>
        {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                 
                     // Table header styling and props to allow sorting
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}
                          className={ 
                             column.isSorted
                             ? column.isSortedDesc
                              //? ' 🔽'
                              //: ' 🔼'
                                ? "sort-desc"
                                : "sort-asc"
                              : "" }


                        style={{
                            borderBottom: 'solid 3px black',
                            background: 'lightgray',
                            color: 'black',
                            fontWeight: 'bold',
                               }} 
                                   >{column.render('Header')}
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {rows.map(row => {
            prepareRow(row);
            return (
                <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                        return <td
                            {...cell.getCellProps()}
                            style={{
                                padding: '5px',
                                border: 'solid 1px black',
                                background: 'white',
                            }}
                        >{cell.render('Cell')}</td>
                    })}
                </tr>
            )
        })}
        </tbody>
    </table>
=======
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
>>>>>>> upstream/react_base
};
export default TableView;
