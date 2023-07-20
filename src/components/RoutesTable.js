import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import { selectRoute } from '../redux/routesSlice';

const RoutesTable = () => {
    const dispatch = useDispatch();
    const selectedRouteKey = useSelector((state) => state.route.selectedRouteKey);
    const routes = useSelector((state) => state.route.routes);

    const columns = [
        {
            title: 'Таблица 1 - список маршрутов',
            dataIndex: 'name',
            key: 'name',
        },
    ];

    const handleRowClick = (record) => {
        dispatch(selectRoute(record.key));
    };

    return (
        <Table
            dataSource={routes}
            columns={columns}
            pagination={false}
            rowClassName={(record) => (record.key === selectedRouteKey ? 'active-row' : 'non-active')}
            onRow={(record) => {
                return {
                    onClick: () => handleRowClick(record),
                };
            }}
        />
    );
};

export default RoutesTable;
