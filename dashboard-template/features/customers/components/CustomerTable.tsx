'use client';

import React, { useState } from 'react';
import { Table, Tag, Space, Input, Button, Avatar, Typography } from 'antd';
import { Search, Edit, Trash2 } from 'lucide-react';
import { motion, HTMLMotionProps } from 'framer-motion';
import type { ColumnsType } from 'antd/es/table';

const { Text } = Typography;

export interface Customer {
  id: string;
  name: string;
  email: string;
  status: 'Active' | 'Inactive' | 'Suspended';
  role: string;
  avatar: string;
  lastLogin: string;
}

interface CustomerTableProps {
  initialData: Customer[];
}

const BodyWrapper = (props: React.HTMLAttributes<HTMLTableSectionElement>) => {
  return (
    <motion.tbody
      {...(props as unknown as HTMLMotionProps<"tbody">)}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.05 }
        }
      }}
    />
  );
};

const RowWrapper = (props: React.HTMLAttributes<HTMLTableRowElement>) => {
  const { className, style, children, ...rest } = props;
  
  if (!className?.includes('ant-table-row')) {
    return <tr className={className} style={style} {...rest}>{children}</tr>;
  }

  return (
    <motion.tr
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.3 }}
      {...(rest as unknown as HTMLMotionProps<"tr">)}
    >
      {children}
    </motion.tr>
  );
};

export default function CustomerTable({ initialData }: CustomerTableProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = initialData.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns: ColumnsType<Customer> = [
    {
      title: 'Customer',
      key: 'name',
      render: (_, record) => (
        <Space size="middle">
          <Avatar src={record.avatar} size="large">{record.name.charAt(0)}</Avatar>
          <div className="flex flex-col">
            <Text strong>{record.name}</Text>
            <Text type="secondary" className="text-sm">{record.email}</Text>
          </div>
        </Space>
      ),
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (status: Customer['status']) => {
        let color = 'default';
        if (status === 'Active') color = 'success';
        if (status === 'Suspended') color = 'error';
        if (status === 'Inactive') color = 'warning';
        return <Tag color={color}>{status}</Tag>;
      },
      filters: [
        { text: 'Active', value: 'Active' },
        { text: 'Inactive', value: 'Inactive' },
        { text: 'Suspended', value: 'Suspended' },
      ],
      onFilter: (value, record) => record.status === value as string,
    },
    {
      title: 'Last Login',
      dataIndex: 'lastLogin',
      key: 'lastLogin',
      render: (text) => <Text type="secondary">{text}</Text>
    },
    {
      title: 'Actions',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="text" icon={<Edit size={16} className="text-gray-500" />} aria-label={`Edit ${record.name}`} />
          <Button type="text" danger icon={<Trash2 size={16} />} aria-label={`Delete ${record.name}`} />
        </Space>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center mb-4">
        <Input
          placeholder="Search customers by name or email..."
          prefix={<Search size={16} className="text-gray-400" />}
          className="max-w-md shadow-sm hover:shadow-md transition-shadow"
          size="large"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          allowClear
        />
      </div>
      
      <div className="overflow-hidden">
        <Table 
          columns={columns} 
          dataSource={filteredData} 
          rowKey="id"
          scroll={{ x: 800 }}
          pagination={{ pageSize: 10, position: ['bottomRight'] }}
          components={{
            body: {
              wrapper: BodyWrapper,
              row: RowWrapper
            }
          }}
          className="customers-table"
        />
      </div>
    </div>
  );
}
