import React, {useMemo} from 'react'
// import styled from 'styled-components'
import { useTable, useSortBy } from 'react-table'

// const data = useMemo(() => items); 

// const columns = useMemo( () => [
//     {
//         Header: 'Name', 
//         accessor: 'name',
//     },
//     {
//         Header: 'Category', 
//         accessor: 'category',
//     },
//     {
//         Header: 'Location', 
//         accessor: 'location',
//     },
//     {
//         Header: 'Amount',
//         accessor: 'amount',
//     },
//     {
//         Header: 'Expiry', 
//         accessor: 'expiry'
//     },
// ])

function Table({ columns, data}) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns, data})

    return (
        <table > 

        </table>
    )
}


export default Table;