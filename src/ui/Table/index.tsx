import './style.scss';
import { useMemo, useState } from 'react';
import { useTable } from 'react-table';
import { ITableColumn } from 'helpers/tableConfigTypes';
import cx from 'classnames';

interface ITable {
    config: ITableColumn[];
    tableData: any[] | null;
    isClickable?: boolean;
    selectedRowIndex?: string | null;
    setSelectedRowIndex?: any;
}

const Table: React.FC<ITable> = ({ 
    config, 
    tableData, 
    isClickable = false, 
    selectedRowIndex, 
    setSelectedRowIndex 
}) => {
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

    const onChangeSelectedRow = (id: string) => {
        if (!isClickable) {
            return null;
        }

        setSelectedRowIndex(id);
    }

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
                    const checkIdentify = selectedRowIndex === row.id;
                    
                    return (
                        <tr 
                            className={cx(
                                'table__tbody_tr', 
                                isClickable && checkIdentify && 'table__tbody_tr_isSelected'
                            )}
                            {...row.getRowProps()} 
                            onClick={() => onChangeSelectedRow(row.id)}
                        >
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
