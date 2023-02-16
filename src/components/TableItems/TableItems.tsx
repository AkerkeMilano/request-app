import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import './TableItems.css';

interface DataType {
  id: React.Key;
  name: string;
  tel: string;
  email: string;
  createdDate: string;
}
interface TableDataProps {
  data: DataType[];
}

type SortOrderType = 'descend' | 'ascend';

export const TableItems: React.FC<TableDataProps> = ({ data }) => {
  const [orderDirection, setOrderDirection] = React.useState<SortOrderType>('descend');

  const changeOrder = (direction: SortOrderType) => () => {
    setOrderDirection(direction);
  };
  const columns: ColumnsType<DataType> = [
    {
      title: '№',
      key: 'index',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Имя',
      dataIndex: 'name',
    },
    {
      title: 'Номер телефона',
      dataIndex: 'tel',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
    },
    {
      title: (
        <div>
          Дата добавления <button className='buttonArrow' onClick={changeOrder('ascend')}>
            <ArrowUpOutlined style={{color: orderDirection === 'ascend' ? "#17ABEB" : "#888888"}}/>
          </button>
          <button className='buttonArrow' onClick={changeOrder('descend')}>
            <ArrowDownOutlined style={{color: orderDirection === 'descend' ? "#17ABEB" : "#888888"}}/>
          </button>
        </div>
      ),
      dataIndex: 'createdDate',
      render: (date: string) =>
        new Date(date).toLocaleDateString('ru', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),

      sorter: (firtRec, scndRec) => {
        return firtRec.createdDate > scndRec.createdDate ? 1 : -1;
      },
      sortOrder: orderDirection,
    },
  ];
  return (
    <Table
      className="tableItems"
      columns={columns}
      dataSource={data}
      rowKey={(obj) => obj.id}
      pagination={{ pageSize: 6 }}
    />
  );
};
