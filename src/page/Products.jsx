import React from 'react';

import data from '../data';
import Singlepro from './Singlepro';
import Wrapper from '../Wrappers/Products';




const Products = () => {
  return (
    <Wrapper>
    <Singlepro data={data} />
    </Wrapper>
  )
}

export default Products