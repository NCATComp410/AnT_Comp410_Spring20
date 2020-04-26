import React from 'react'
import styled from 'styled-components'
import { useTable, useFilters, useGlobalFilter } from 'react-table'
// A great library for fuzzy filtering/sorting items
import matchSorter from 'match-sorter'
import {Table} from './components/Table/Table'

import SimpleFileUploader from './components/FileUploader/FileUploader';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'crim',
        accessor: '0' 
    },
    
    {
        Header: 'zn',
        accessor: '1'
    },
    
    {
        Header: 'indus',
        accessor: '2' 
    },
    
    {
        Header: 'chas',
        accessor: '3' 
    },
    
    {
        Header: 'nox',
        accessor: '4' 
    },
    
    {
        Header: 'rm',
        accessor: '5' 
    },
    
    {
        Header: 'age',
        accessor: '6' 
    },
    
    {
        Header: 'dis',
        accessor: '7' 
    },
    
    {
        Header: 'rad',
        accessor: '8' 
    },
    
    {
        Header: 'tax',
        accessor: '9' 
    },
    
    {
        Header: 'ptratio',
        accessor: '10' 
    },
    
    {
        Header: 'b',
        accessor: '11' 
    },
    
    {
        Header: 'lstat',
        accessor: '12' 
    },
    
    {
        Header: 'medv',
        accessor: '13' 
    },
    ],
    []
  )

 

  return (
    <div className='app'>
    <SimpleFileUploader/>
   
   
    </div>
  )
}

export default App
