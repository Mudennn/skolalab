"use client";
const MengapaWeb3Penting = () => {
    return ( 
        <div className="flex flex-col justify-center items-center lg:py-[10%] text-center relative responsive-padding-2">
        <div className="title-button">
          <p>Mengapa Web3 Penting</p>
        </div>
        <h2 className="mt-4">Membentuk Semula Dunia Digital</h2>
        <div className="grid xl:grid-cols-3 md:grid-cols-1 lg:grid-cols-1 grid-cols-1 gap-5 xl:w-[1150px]  w-[100%] md:mt-14 mt-8 h-[100%]">
          {/* CARD 1 */}
          <div className="demokrasi-card relative text-left md:h-auto  ">
            <div>
            <h3>Demokrasi Digital</h3>
            <p>
              Kuasa Kembali kepada Pengguna Tidak lagi bergantung pada syarikat
              besar. Anda mengawal data dan aset digital anda sendiri.
            </p>
            </div>
            
            <img
              src="/images/Wallet.png"
              alt=""
              className=" "
            />
          </div>
          {/* CARD 2 */}
          <div className="transaksi-card flex flex-col justify-between items-start text-left md:h-auto  w-[100%]">
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
            <div className="kreative-card relative flex flex-col justify-between items-start text-left ">
              <img
                src="/images/Connect Wallet.png"
                alt=""
                className="mx-auto"
              />
              <div className="">
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
              <img src="/images/Circle coin.png" alt="" className="absolute top-0 left-0 xl:w-[40%] md:w-[150px] w-[150px]" />
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
     );
}
 
export default MengapaWeb3Penting;