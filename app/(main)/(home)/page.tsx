"use client";

import { slideIn, staggerContainer, textVariant } from "@/utils/motion";
import Revolusi from "./components/revolusi";



export default function Home() {
 
  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-around items-center lg:text-left text-center  relative   px-[5%] responsive-padding overflow-hidden">
        <div className="absolute custom-gradient  blur-3xl -z-30  top-auto left-0 md:left-auto " />
        <div>
          <h1 className="w-[100%]">
            Memperkasakan <br className="lg:block hidden" /> Pendidikan{" "}
            <br className="lg:block hidden" /> Web3 di Malaysia
          </h1>
          <p className="mt-4">
            Buka potensi teknologi blockchain bersama Skolalabs. Sertai kami{" "}
            <br className="lg:block hidden" /> dalam merevolusikan pendidikan
            untuk masa depan.
          </p>
        </div>

        <img
          src="/images/Hero Image.png"
          alt=""
          className="lg:w-[40%] lg:h-[40%] object-cover lg:mt-0 mt-8"
        />
      </div>

      {/* MENGAPA WEB3 PENTING  */}

      <div className="flex flex-col justify-center items-center lg:py-[10%] text-center relative responsive-padding-2">
        <div className="title-button">
          <p>Mengapa Web3 Penting</p>
        </div>
        <h2 className="mt-4">Membentuk Semula Dunia Digital</h2>
        <div className="grid xl:grid-cols-3  grid-cols-1 gap-5 lg:w-[60%] w-[100%] md:mt-14 mt-8 h-[100%]">
          {/* CARD 1 */}
          <div className="card relative text-left lg:h-auto h-[460px] ">
            <h3>Demokrasi Digital</h3>
            <p>
              Kuasa Kembali kepada Pengguna Tidak lagi bergantung pada syarikat
              besar. Anda mengawal data dan aset digital anda sendiri.
            </p>
            <img
              src="/images/Wallet.png"
              alt=""
              className="absolute bottom-0 w-[87%] "
            />
          </div>
          {/* CARD 2 */}
          <div className="card flex flex-col justify-between items-start text-left lg:h-auto h-[430px] w-[100%]">
            <img
              src="/images/Transaction.png"
              alt=""
              className="w-[100%] p-0 m-0 object-cover"
            />
            <div>
              <h3>Integriti Tanpa Kompromi</h3>
              <p>
                Transaksi Boleh Disahkan Blockchain memastikan semua transaksi
                boleh dilihat dan diaudit, mengurangkan penipuan.
              </p>
            </div>
          </div>
          {/* CARD 3 */}
          <div>
            <div className="card relative flex flex-col justify-between items-start text-left ">
              <img
                src="/images/Connect Wallet.png"
                alt=""
                className="absolute top-0 w-[87%]"
              />
              <div className="mt-[98px]">
                <h3>Kreativiti Tanpa Batas</h3>
                <p>
                  Inovasi Tanpa Sempadan Platform terbuka membolehkan
                  pembangunan aplikasi terdesentralisasi (DApps) yang
                  revolusioner, mendorong kreativiti tanpa had.
                </p>
              </div>
            </div>
            {/* CARD 4 */}
            <div className="card relative text-left mt-4">
              <img src="/images/Circle coin.png" alt="" className="absolute top-0 left-0 w-[40%]" />
              <div className="ml-[93px]">
                <h3>Ekonomi Masa Depan</h3>
                <p>
                  Peluang Kewangan Baru Matawang Kripto, NFT, dan DeFi membuka
                  aliran pendapatan dan pelaburan yang inovatif.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TENTANG SKOLALABS */}
      <div className="flex flex-col justify-center items-center md:mt-56 mt-40 text-center relative responsive-padding">
        <div className="title-button">
          <p>Tentang SkolaLabs</p>
        </div>
        <h2 className="mt-4 lg:text-[50px] md:text-[32px] text-[24px] leading-[100%]">
          Kami Bukan Sekadar Pendidik. <br /> Kami Adalah Pemangkin Web3.
        </h2>
        <p className="lg:w-[30%] w-[100%] mt-4">
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
          <p className="lg:w-[30%] w-[100%] mt-4">
            Langkah Pertama Anda Ke Arah Revolusi Digital Bermula Di Sini
          </p>
          <button className="primary-button mt-4"> Daftar Sekarang</button>
        </div>
       
      </div>
    </div>
  );
}
