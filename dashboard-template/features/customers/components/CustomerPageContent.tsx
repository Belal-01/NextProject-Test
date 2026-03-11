'use client';

import React from 'react';
import { Typography } from 'antd';
import { motion } from 'framer-motion';
import CustomerTable, { Customer } from './CustomerTable';

const { Title, Text } = Typography;

interface CustomerPageContentProps {
  customers: Customer[];
}

const CustomerPageContent = ({ customers }: CustomerPageContentProps) => {


  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-6 md:p-8 flex flex-col gap-6 w-full pb-20"
    >
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <Title level={2} style={{ margin: 0 }}>Customers</Title>
          <Text type="secondary" className="mt-1">
            Manage your customer database and analyze metrics.
          </Text>
        </div>
    
      </div>



      {/* Main Table Area */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 mt-2">
        <CustomerTable initialData={customers} />
      </div>
    </motion.div>
  );
};

export default CustomerPageContent;
