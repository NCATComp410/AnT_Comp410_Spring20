import React from "react";

// https://react-table.js.org
// react-table has several useful functions for working with
// and manipulating tables
import { useTable, useSortBy } from "react-table";

/**
 * A component in charge of displaying the table and handling other table manipulations (sorting, filtering, etc.)
 * Refer to the react-table documentation to understand the structure/format of the data and columns or `console.log` them
 * to view how they are formatted.
 * @param columns - columns object as expected by react-table
 * @param data - data object as expected by react-table
 * @returns {*}
 * @constructor
 */
export const Table = ({ columns, data }) => {
  // https://react-table.js.org/quickstart#implement-usetable-hook
  // Build the table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useSortBy
  );

  // Render the actual table UI
  return (
    <table {...getTableProps()} style={{ border: "solid 1px black" }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              // Table header styling and props to allow sorting
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className={
                  column.isSorted
                    ? column.isSortedDesc
                      ? //? ' 🔽'
                        //: ' 🔼'
                        "sort-desc"
                      : "sort-asc"
                    : ""
                }
                style={{
                  borderBottom: "solid 3px black",
                  background: "lightgray",
                  color: "black",
                  fontWeight: "bold"
                }}
              >
                {column.render("Header")}
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
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "5px",
                      border: "solid 1px black",
                      background: "white"
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
