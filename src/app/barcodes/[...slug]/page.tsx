import React from 'react';
import { CreateBarcodePage, UpdateBarcodePage } from '@/features';

// types
import { type IParamsCRUD } from '@/app/types';

const BarcodesApp: React.FC<IParamsCRUD> = (props) => {
  const { params: { slug } } = props;

  return (
    <>
      {slug[0] === 'update' && <UpdateBarcodePage barcodeId={slug[1] ?? 'none'} />}
      {slug[0] === 'create' && <CreateBarcodePage />}
    </>
  );
};

export default BarcodesApp;
