'use client';

import KpiCard from '@/components/ui/KpiCard'
import { Col, Row } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'
import { motion } from 'framer-motion'
import {
  DollarOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  ArrowUpOutlined,

} from "@ant-design/icons";

const HomePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
         {/* Section 1: KpiCard */}
      <Title level={3}>1. KpiCard - Metric Cards</Title>
      <Row gutter={[16, 16]} className="mb-8">
        <Col xs={24} sm={12} lg={6}>
          <KpiCard
            title="Total Revenue"
            value={45231.89}
            prefix="$"
            precision={2}
            icon={<DollarOutlined />}
            iconBgColor="#e6f7ff"
            trend="up"
            trendValue="12%"
          />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <KpiCard
            title="Total Orders"
            value={2350}
            icon={<ShoppingCartOutlined />}
            iconBgColor="#f6ffed"
            trend="up"
            trendValue="8%"
          />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <KpiCard
            title="Active Users"
            value={12234}
            icon={<UserOutlined />}
            iconBgColor="#fff7e6"
            trend="down"
            trendValue="3%"
            progress={75}
            progressColor="#fa8c16"
          />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <KpiCard
            title="Conversion Rate"
            value={3.24}
            suffix="%"
            precision={2}
            icon={<ArrowUpOutlined />}
            iconBgColor="#f9f0ff"
            trend="up"
            trendValue="1.2%"
          />
        </Col>
      </Row> 


      </motion.div>
  )
}

export default HomePage;