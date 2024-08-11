"use client";

import Image from 'next/image';

const images = [
  '/images/Gallery 1.jpeg',
  '/images/Gallery 2.jpeg',
  '/images/Gallery 3.jpeg',
  '/images/Gallery 4.jpeg',
  '/images/Gallery 5.jpeg',
];
const TentangKami = () => {
  return (
    <section>
    <div className="text-white responsive-padding lg:p-[5%] tentang-kami-container lg:w-[80%] relative ">
      <div className="absolute custom-gradient  blur-3xl -z-30  top-20 " />
      <div className="card">
        <p>Tentang Kami</p>
        <h1 className="mt-4">MySekolah Kripto</h1>
        <p className="pt-4 md:pr-11 pr-0">
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
        <p>
          Visi kami adalah untuk berkembang di luar Malaysia dan untuk menembusi
          pasaran global, dengan Asia Tenggara sebagai sasaran utama.
        </p>
      </div>
    </div>

    <div className="responsive-padding lg:p-[5%] lg:w-[80%] relative mx-auto">
      <h2>Galeri</h2>
      <div className="masonry mt-4">
      {images.map((src, index) => (
        <div key={index} className="masonryItem">
          {/* <Image src={src} alt={`Image ${index + 1}`} layout="responsive" width={300} height={400} /> */}
          <img src={src} alt="" />
        </div>
      ))}
    </div>
    </div>
    </section>
  );
};

export default TentangKami;
