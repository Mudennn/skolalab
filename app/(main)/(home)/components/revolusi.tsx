"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CardType {
    title: string;
    description: string;
    imgSrc: string;
    imgAlt: string;
    id: string;
    imgWidth: string;
}

const cards: CardType[] = [
    {
        title: "Blockchain",
        description: "Teknologi lejar digital yang menyimpan maklumat dalam blok-blok yang bersambung. Ia bersifat terdesentralisasi, selamat, dan sukar diubah. Blockchain menjadi asas kepada mata wang kripto seperti Bitcoin.",
        imgSrc: "/images/Blockchain.png",
        imgAlt: "Blockchain",
        id: '1',
        imgWidth: '100%'
    },
    {
        title: "NFT",
        description: "Aset digital unik yang disahkan keasliannya menggunakan blockchain. NFT boleh mewakili karya seni, muzik, atau barangan koleksi digital. Setiap NFT mempunyai nilai tersendiri dan tidak boleh ditukar ganti.",
        imgSrc: "/images/NFT.png",
        imgAlt: "Blockchain",
        id: '2',
        imgWidth: '100%'
    },
    {
        title: "Mata Wang Kripto",
        description: "Mata wang digital yang menggunakan kriptografi untuk keselamatan dan berfungsi secara bebas daripada bank pusat. Ia beroperasi di atas teknologi blockchain, membolehkan transaksi peer-to-peer tanpa perantara.",
        imgSrc: "/images/Crypto circle.png",
        imgAlt: "Blockchain",
        id: '3',
        imgWidth: '80%'
    },
    {
        title: "DeFi",
        description: "Sistem kewangan digital yang menggunakan blockchain untuk menawarkan perkhidmatan kewangan tanpa perantara tradisional seperti bank. DeFi membolehkan aktiviti seperti pinjaman, simpanan, dan perdagangan aset kripto secara langsung antara pengguna.",
        imgSrc: "/images/Swap.png",
        imgAlt: "Blockchain",
        id: '4',
        imgWidth: '80%'
    }
  ];

const Revolusi = () => {
    return ( 
        <>
        <div className="md:mt-56 mt-40 flex flex-col justify-center items-center text-center relative xl:w-[66vw] mx-auto   responsive-padding">
        <h2 className="mt-4 lg:text-[64px] text-[32px] leading-[100%]">
            Revolusi Digital Anda <br />
            Bermula Di Sini
          </h2>
          <p className="mt-4">Antara Tonggak Utama Dunia Web3</p>
        </div>
      
      <HorizontalScrollCarousel />
      </>
   
     );
}

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if the screen is mobile size
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024); // Mobile breakpoint
        };

        // Run the check on mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Clean up event listener on unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const x = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile ? ["1%", "-80%"] : ["1%", "-35%"]
    );
  
    return (
      <section ref={targetRef} className="relative lg:h-[300vh] h-[200vh] ">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden px-[5%] responsive-padding">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    );
  };
  
  const Card: React.FC<{ card: CardType }> = ({ card }) => {
    return (
      <div
        key={card.id}
        className="group relative  lg:w-[530px] w-screen overflow-hidden card  flex flex-col justify-between items-center"
      >
        <div className="">
          <h3 className="!text-[36px]">{card.title}</h3>
          <p className="mt-4">{card.description}</p>
        </div>
        <img src={card.imgSrc} alt="" className="mx-auto" 
                style={{ width: card.imgWidth }} />
      </div>
    );
  };
 
export default Revolusi;

