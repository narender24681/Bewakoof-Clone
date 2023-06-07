import React, { useEffect, useState } from 'react';
import Products from '../../Components/Products';
import Footer from '../Home/Footer';
import Navbar from '../Home/Navbar';

export default function ProductsMens() {

  return (
    <div>
      {<Products url={`http://localhost:8080/mens-clothing`} />}
    </div>
  )
}
