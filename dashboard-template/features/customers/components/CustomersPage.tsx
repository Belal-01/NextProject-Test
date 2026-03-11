import React from 'react';
import CustomerPageContent from './CustomerPageContent';
import { Customer } from './CustomerTable';

const DUMMY_CUSTOMERS: Customer[] = [
  { id: '1', name: 'Emma Wilson', email: 'emma.wilson@example.com', status: 'Active', role: 'Premium User', avatar: 'https://i.pravatar.cc/150?u=1', lastLogin: '2026-03-11 09:30 AM' },
  { id: '2', name: 'Liam Johnson', email: 'liam.johnson@example.com', status: 'Inactive', role: 'Basic User', avatar: 'https://i.pravatar.cc/150?u=2', lastLogin: '2026-02-28 14:15 PM' },
  { id: '3', name: 'Olivia Martinez', email: 'olivia.m@example.com', status: 'Active', role: 'Enterprise Client', avatar: 'https://i.pravatar.cc/150?u=3', lastLogin: '2026-03-10 11:45 AM' },
  { id: '4', name: 'Noah Brown', email: 'noah.b@example.com', status: 'Suspended', role: 'Basic User', avatar: 'https://i.pravatar.cc/150?u=4', lastLogin: '2026-01-15 08:20 AM' },
  { id: '5', name: 'Ava Garcia', email: 'ava.garcia@example.com', status: 'Active', role: 'Admin', avatar: 'https://i.pravatar.cc/150?u=5', lastLogin: '2026-03-11 10:05 AM' },
  { id: '6', name: 'William Davis', email: 'william.d@example.com', status: 'Active', role: 'Premium User', avatar: 'https://i.pravatar.cc/150?u=6', lastLogin: '2026-03-09 16:30 PM' },
  { id: '7', name: 'Sophia Rodriguez', email: 'sophia.r@example.com', status: 'Inactive', role: 'Enterprise Client', avatar: 'https://i.pravatar.cc/150?u=7', lastLogin: '2026-03-01 09:00 AM' },
  { id: '8', name: 'James Martinez', email: 'james.m@example.com', status: 'Suspended', role: 'Basic User', avatar: 'https://i.pravatar.cc/150?u=8', lastLogin: '2026-02-10 13:40 PM' },
  { id: '9', name: 'Isabella Hernandez', email: 'isabella.h@example.com', status: 'Active', role: 'Premium User', avatar: 'https://i.pravatar.cc/150?u=9', lastLogin: '2026-03-11 08:15 AM' },
  { id: '10', name: 'Benjamin Lopez', email: 'benjamin.l@example.com', status: 'Active', role: 'Basic User', avatar: 'https://i.pravatar.cc/150?u=10', lastLogin: '2026-03-08 17:50 PM' },
  { id: '11', name: 'Mia Gonzalez', email: 'mia.g@example.com', status: 'Inactive', role: 'Premium User', avatar: 'https://i.pravatar.cc/150?u=11', lastLogin: '2026-03-05 10:20 AM' },
  { id: '12', name: 'Elijah Perez', email: 'elijah.p@example.com', status: 'Active', role: 'Enterprise Client', avatar: 'https://i.pravatar.cc/150?u=12', lastLogin: '2026-03-10 15:10 PM' },
  { id: '13', name: 'Charlotte Sanchez', email: 'charlotte.s@example.com', status: 'Active', role: 'Basic User', avatar: 'https://i.pravatar.cc/150?u=13', lastLogin: '2026-03-09 12:05 PM' },
  { id: '14', name: 'Lucas Ramirez', email: 'lucas.r@example.com', status: 'Suspended', role: 'Enterprise Client', avatar: 'https://i.pravatar.cc/150?u=14', lastLogin: '2025-12-20 09:30 AM' },
  { id: '15', name: 'Amelia Torres', email: 'amelia.t@example.com', status: 'Active', role: 'Premium User', avatar: 'https://i.pravatar.cc/150?u=15', lastLogin: '2026-03-11 11:25 AM' },
];

const CustomersPage = () => {
  return <CustomerPageContent customers={DUMMY_CUSTOMERS} />;
};

export default CustomersPage;