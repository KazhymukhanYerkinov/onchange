import React from 'react';
import { CreateStorePage, UpdateStorePage } from '@/features';

// types
import { type IParamsCRUD } from '@/app/types';

const UsersApp: React.FC<IParamsCRUD> = (props) => {
  const { params: { slug } } = props;

  return (
    <>
      {slug[0] === 'update' && <UpdateStorePage storeId={slug[1] ?? 'none'} />}
      {slug[0] === 'create' && <CreateStorePage />}
    </>
  );
};

export default UsersApp;
