import React from 'react';
import { CreateCashboxesPage, UpdateCashboxesPage } from '@/features';

// types
import { type IParamsCRUD } from '@/app/types';

const BashboxesApp: React.FC<IParamsCRUD> = (props) => {
  const { params: { slug } } = props;

  return (
    <>
      {slug[0] === 'update' && <UpdateCashboxesPage cashboxId={slug[1] ?? 'none'} />}
      {slug[0] === 'create' && <CreateCashboxesPage />}
    </>
  );
};

export default BashboxesApp;
