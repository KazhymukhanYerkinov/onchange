import React from 'react';
import dynamic from 'next/dynamic';
import { Loading } from '@/components';

const DynamicBarcodesPage = dynamic(async () => await import('../../features/barcodes/pages/barcodes'), { ssr: false, loading: () => <Loading /> });

const BarcodesApp: React.FC = () => <DynamicBarcodesPage />;

export default BarcodesApp;
