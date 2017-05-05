import React from 'react';
/* Como tenemos un archivo index.js donde ya tenemos los componentes
mapeados, podemos usar esta otra fórmula */
import { MainHeader, MainFooter } from '../../components';

const ViewMain = () => {
  return (
    <div className='view-main'>
      <MainHeader />
      <p>Aquí irá más contenido</p>
      <MainFooter />
    </div>
  );
};

export default ViewMain;