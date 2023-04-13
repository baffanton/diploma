import './style.scss';
import { useMemo } from 'react';
import { useTable } from 'react-table';
import { ITableColumn } from 'helpers/tableConfigTypes';

interface ITable {
    config: ITableColumn[];
    tableData: any[] | null;
}

const Table: React.FC<ITable> = ({ config, tableData }) => {
    const columns = useMemo(() => config, [config]);
    const data = useMemo(() => tableData, [tableData]);

    if (!data) {
        return null;
    }
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const tableInstance = useTable({
        // @ts-ignore
        columns,
        data
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

    return (
        <table className='table' {...getTableProps()}>
            <thead className='table__thead'>
                {headerGroups.map(headerGroup => (
                    <tr className='table__thead_tr' {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th className='table__thead_th' {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody className='table__tbody' {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    
                    return (
                        <tr className='table__tbody_tr' {...row.getRowProps()}>
                            {row.cells.map(cell => (
                                <td className='table__tbody_td' {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            ))}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export { Table };
