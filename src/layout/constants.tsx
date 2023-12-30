import React from 'react';
import { TeamOutlined, ShopOutlined, BarcodeOutlined, AuditOutlined } from '@ant-design/icons';
// types
import { type INavItem } from './types';

export const HEADER_HEIGHT = '80px';
export const SIDEBAR_WIDTH = '340px';

export const navItems: INavItem[] = [
  {
    idx: 0,
    title: 'Users',
    icon: <TeamOutlined />,
    children: [
      { id: 1, name: 'List', url: '/' }
    ]
  },
  {
    idx: 1,
    title: 'Stores',
    icon: <ShopOutlined />,
    children: [
      { id: 1, name: 'List', url: '/stores' }
    ]
  },
  {
    idx: 2,
    title: 'Barcodes',
    icon: <BarcodeOutlined />,
    children: [
      { id: 1, name: 'List', url: '/barcodes' }
    ]
  },
  {
    idx: 3,
    title: 'Cashboxes',
    icon: <AuditOutlined />,
    children: [
      { id: 1, name: 'List', url: '/cashboxes' }
    ]
  }
];
