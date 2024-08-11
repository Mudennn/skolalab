'use client'

import React from 'react'
import { BsTwitterX } from 'react-icons/bs'

import { LiaTelegram } from 'react-icons/lia'
import { RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiTiktokFill, RiYoutubeLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className='relative flex md:flex-row flex-col justify-between items-center w-[80%] mx-auto pb-14 '>
        <img src="/images/sekolalabs.webp" alt="" className='lg:w-[150px] md:w-[30%] w-[40%]'/>
        <div>
            <div className="flex md:justify-end justify-center items-center gap-4 cursor-pointer md:mt-0 mt-8 text-white text-xl">
                <a href="https://www.linkedin.com/company/sekolahkripto" target='_blank'><RiLinkedinFill /></a>                
                <a href="https://t.me/mysekolahkripto" target='_blank'><LiaTelegram /></a>
                <a href="https://twitter.com/MySekolahKripto" target='_blank'><BsTwitterX /></a>
                <a href="https://www.facebook.com/mysekolahkripto" target='_blank'><RiFacebookFill /></a>
                <a href="https://www.instagram.com/mysekolahkripto/" target='_blank'><RiInstagramLine /></a>
                <a href="https://www.tiktok.com/@mysekolahkripto" target='_blank'><RiTiktokFill /></a>
                <a href="https://www.youtube.com/@MySekolahKriptoTV" target='_blank'><RiYoutubeLine /></a>
            </div>
            <p className='mt-4'>© 2024 SKOL LABS. All rights reserved.</p>
        </div>

       
    </footer>
  )
}

export default Footer