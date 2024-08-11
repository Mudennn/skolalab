const TentangKami = () => {
  return (
    
    <div className="text-white responsive-padding lg:p-[5%] tentang-kami-container lg:w-[80%] relative ">
        <div className="absolute custom-gradient  blur-3xl -z-30  top-20 " />
      <div className="card">
        <p>Tentang Kami</p>
        <h1 className="mt-4">MySekolah Kripto</h1>
        <p className="pt-4 pr-11">
          MySekolahKripto adalah pusat Inter-Operasi ilmu yang menyediakan
          pembelajaran dan kesedaran tentang teknologi Blockchain, Aset Kripto,
          DeFi, & NFT di Malaysia. Berkembang kukuh sejak 2017, MySekolahKripto
          menyasarkan untuk menjadi pemain jangka panjang dalam dunia kripto
          Malaysia: sebagai pendidik, pengupaya komuniti & penganjur projek.
          Kami berhasrat untuk memudahkan penggunaan Web3 melalui pendidikan di
          Malaysia. Kami menyediakan pembelajaran berterusan melalui pelbagai
          platform termasuk kelas fizikal, dengan sokongan geran daripada entiti
          blockchain antarabangsa. Kami menggunakan model perniagaan Bukan Untuk
          Untung di mana jualan dan geran yang diterima digunakan untuk
          menyediakan kursus percuma untuk masyarakat Malaysia
        </p>
        {/* <img src="/images/sekolah.webp" alt="" className="absolute bottom-10 right-2 opacity-20" /> */}
      </div>
      <div className="card">
        <img src="/images/sekolah-circle.webp" alt="" />
        <h2 className="mt-4">Visi Kami</h2>
        <p>Visi kami adalah untuk berkembang di luar Malaysia dan untuk menembusi pasaran global, dengan Asia Tenggara sebagai sasaran utama.</p>
      </div>
    </div>
  );
};

export default TentangKami;
