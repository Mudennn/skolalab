"use client";

import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HomeLayout = ({children} : {
    children: React.ReactNode
}) => {
  return (
    <div className='relative'>
        <Navbar />
        {children}
        <Footer />
        <div className='footer-gradient absolute -z-10 inset-x-0 top-auto bottom-0 h-[90vh]' />
        </div>
  )
}


export default HomeLayout
