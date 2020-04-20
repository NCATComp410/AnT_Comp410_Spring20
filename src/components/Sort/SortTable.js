import React from "react";

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
        data
    });

    // Render the actual table UI
    return <table {...getTableProps()} style={{border: 'solid 1px black'}}>
        <thead>
        {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                 
                 
                    //<th
                      //  {...column.getHeaderProps()}
                        //style={{
                          //  borderBottom: 'solid 3px black',
                            //background: 'lightgray',
                            //color: 'black',
                            //fontWeight: 'bold',
                        //}}
                    //>{column.render('Header')}</th>
                 
                 
                 //just junk
                 {className='sort-asc'  onClick={this.column.isSorted}>
                            ? ' 🔽'
                          className='sort-desc'  onClick={this.column.isSortedDesc}>
                            ? : ' 🔼'
                          //className={
                            //column.isSorted
                              //onClick={() => this.column.isSorted}
                              //? column.isSortedDesc
                              //? ' 🔽'
                              //: ' 🔼'
                                //? "sort-desc"
                                //: "sort-asc"
                              : ""
                          }


                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
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
};
export default TableView;
