import * as React from "react";
import { ParseResult } from "papaparse";
import { useTable } from "react-table";

type TableProps = {
  columns: Array<{ Header: string; accessor: string }>;
  data: Array<any>;
};
function Table({ columns, data }: TableProps) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
type Props = {
  parsedCSV: ParseResult;
};
export const TableViewComponent = (props: Props) => {
  if (props.parsedCSV.data.length > 0) {
    let { data } = props.parsedCSV;
    let [header_row, ...rows_list] = data as Array<Array<string>>;
    let columns = header_row.map(c => ({ Header: c, accessor: c }));
    let rowsData = rows_list.map(values => {
      return values.reduce((accumulator, currentValue, currentIndex) => {
        return { ...accumulator, [header_row[currentIndex]]: currentValue };
      }, {});
    });
    return <Table data={rowsData} columns={columns} />;
  }
  return <div>Nothing to show</div>;
};
