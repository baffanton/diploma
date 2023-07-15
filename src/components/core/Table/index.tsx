import React, { useMemo } from 'react';
import { useTable } from 'react-table';

import { Layout } from 'components/core/Layout';
import { Title } from 'components/core/Title';

import { ITable } from './types';
import cx from 'classnames';
import { SizeEnum } from 'enums/sizeTypes';
import { WeightEnum } from 'enums/weightTypes';

import './style.scss';

const Table: React.FC<ITable> = ({ config, tableData, isClickable = false, selectedRowIndex, setSelectedRowIndex }) => {
    const columns = useMemo(() => config, [config]);
    const data: any = useMemo(() => tableData, [tableData]);

    const tableInstance = useTable({
        columns,
        data,
    });

    if (!data.length) {
        return (
            <Layout className="table_empty">
                <Title className="table__title_empty" fontSize={SizeEnum.medium} fontWeight={WeightEnum.bold}>
                    Нет данных
                </Title>
            </Layout>
        );
    }

    const onChangeSelectedRow = (id: string) => {
        if (!isClickable || !setSelectedRowIndex) {
            return null;
        }

        if (id === selectedRowIndex) {
            return setSelectedRowIndex(null);
        }

        setSelectedRowIndex(id);
    };

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

    return (
        <Layout className="table">
            <table className="table__thead-container" {...getTableProps()}>
                <thead className="table__thead">
                    {headerGroups.map((headerGroup) => (
                        <tr className="table__thead_tr" {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th className="table__thead_th" {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
            </table>
            <Layout className="table__container">
                <table className="table__tbody-container" {...getTableProps()}>
                    <tbody className="table__tbody" {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);
                            const checkIdentify = selectedRowIndex === row.id;

                            return (
                                <tr
                                    className={cx(
                                        'table__tbody_tr',
                                        isClickable && checkIdentify && 'table__tbody_tr_isSelected',
                                    )}
                                    {...row.getRowProps()}
                                    onClick={() => onChangeSelectedRow(row.id)}
                                >
                                    {row.cells.map((cell) => (
                                        <td className="table__tbody_td" {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Layout>
        </Layout>
    );
};

export { Table };
