import React from 'react';
import dynamic from 'next/dynamic';
import { Loading } from '@/components';

const DynamicStoresPage = dynamic(async () => await import('../../features/stores/pages/stores'), { ssr: false, loading: () => <Loading /> });

const StoresApp: React.FC = () => <DynamicStoresPage />;

export default StoresApp;
