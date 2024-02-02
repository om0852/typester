"use client";
import Link from 'next/link';
import "../../sass/index.scss";
import AppContext from './Context/store';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import Home from './component/Home';
const Page = () => {
  return (
    <>
      <Home />
    </>
  )
};

export default Page;
