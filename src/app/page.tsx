import React from 'react';
import dynamic from 'next/dynamic';
import { Loading } from '@/components';

const DynamicUsersPage = dynamic(async () => await import('../features/users/pages/users'), { ssr: false, loading: () => <Loading /> });

const Home: React.FC = () => <DynamicUsersPage />;

export default Home;
