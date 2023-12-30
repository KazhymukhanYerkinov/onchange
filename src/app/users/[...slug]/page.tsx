import React from 'react';
import { CreateUserPage, UpdateUserPage } from '@/features';

// types
import { type IParamsCRUD } from '@/app/types';

const StoresApp: React.FC<IParamsCRUD> = (props) => {
  const { params: { slug } } = props;

  return (
    <>
      {slug[0] === 'update' && <UpdateUserPage userId={slug[1] ?? 'none'} />}
      {slug[0] === 'create' && <CreateUserPage />}
    </>
  );
};

export default StoresApp;
