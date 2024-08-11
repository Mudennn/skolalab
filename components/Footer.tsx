'use client'

import React from 'react'

const Footer = () => {
  return (
    <footer className='relative flex md:flex-row flex-col justify-between items-center w-[80%] mx-auto pb-14 '>
        <img src="/images/sekolalabs.webp" alt="" className='lg:w-[150px] w-[40%]'/>
        <div>
            <div className="flex md:justify-end justify-center items-center gap-4 cursor-pointer md:mt-0 mt-8">
                <img src="/images/linkedin.png" alt="" />
                <img src="/images/telegram.png" alt="" />
                <img src="/images/twitter.png" alt="" />
                <img src="/images/facebook.png" alt="" />
            </div>
            <p className='mt-4'>© 2024 SKOL LABS. All rights reserved.</p>
        </div>

       
    </footer>
  )
}

export default Footer