"use client";

import Revolusi from "./components/revolusi";
import MengapaWeb3Penting from "./components/mengapa-web3";



export default function Home() {
 
  return (
    <div>
      <div className="flex xl:flex-row flex-col justify-around items-center xl:text-left text-center  relative   px-[5%] responsive-padding overflow-hidden">
        <div className="absolute custom-gradient  blur-3xl -z-30  top-auto left-0 md:left-auto " />
        <div>
          <h1 className="w-[100%]">
            Memperkasakan <br className="xl:block hidden" /> Pendidikan{" "}
            <br className="xl:block hidden" /> Web3 di Malaysia
          </h1>
          <p className="mt-4">
            Buka potensi teknologi blockchain bersama Skolalabs. Sertai kami{" "}
            <br className="xl:block hidden" /> dalam merevolusikan pendidikan
            untuk masa depan.
          </p>
        </div>

        <img
          src="/images/Hero Image.png"
          alt=""
          className="xl:w-[40%] xl:h-[40%] object-cover xl:mt-0 mt-8"
        />
      </div>

      {/* MENGAPA WEB3 PENTING  */}
      <MengapaWeb3Penting />
      

      {/* TENTANG SKOLALABS */}
      <div className="flex flex-col justify-center items-center md:mt-56 mt-40 text-center relative responsive-padding">
        <div className="title-button">
          <p>Tentang SkolaLabs</p>
        </div>
        <h2 className="mt-4 lg:text-[50px] md:text-[32px] text-[24px] leading-[100%]">
          Kami Bukan Sekadar Pendidik. <br /> Kami Adalah Pemangkin Web3.
        </h2>
        <p className="xl:w-[30%] w-[100%] mt-4">
          SkolaLabs lahir dari visi untuk menjadikan Malaysia sebagai hub Web3
          Asia Tenggara. Kami percaya bahawa revolusi digital ini bukan hanya
          tentang teknologi, tetapi tentang memberdayakan individu.
        </p>
      </div>

      {/* REVOLUSI DIGITAL ANDA */}
      <Revolusi/>
    

      {/* CTA */}
      <div className=" flex flex-col justify-center items-center  text-center relative ">
        <div className="flex flex-col justify-center items-center mt-56 text-center relative responsive-padding">
          <div className="title-button">
            <p>Kolaborasi Strategik</p>
          </div>
          <h2 className="mt-4 lg:text-[50px] text-[32px] leading-[100%]">
            Membina Ekosistem Web3 Malaysia
          </h2>
        </div>


        {/* CTA */}
        <div className="responsive-padding flex flex-col justify-center items-center  text-center relative mb-40">
          <h2 className=" lg:text-[64px] text-[32px] leading-[100%] lg:w-[70%] w-[100%] mt-72">
            Buka Pintu Ke Dunia Web3 Bersama Kami!
          </h2>
          <p className="xl:w-[30%] w-[100%] mt-4">
            Langkah Pertama Anda Ke Arah Revolusi Digital Bermula Di Sini
          </p>
          <button className="primary-button mt-4"> Daftar Sekarang</button>
        </div>
       
      </div>
    </div>
  );
}
