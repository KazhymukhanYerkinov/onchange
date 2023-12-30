import React from 'react';
import dynamic from 'next/dynamic';
import { Loading } from '@/components';

const DynamicCashboxesPage = dynamic(async () => await import('../../features/cashboxes/pages/cashboxes'), { ssr: false, loading: () => <Loading /> });

const CashboxesApp: React.FC = () => <DynamicCashboxesPage />;

export default CashboxesApp;
