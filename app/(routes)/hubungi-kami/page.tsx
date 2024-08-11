"use client";

import { AiOutlineHome, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const HubungiKami = () => {
  return (
    <div className="lg:p-[5%] hubungi-kami-container responsive-padding lg:w-[80%] relative">
      <div className="absolute custom-gradient  blur-3xl -z-30  lg:top-20 lg:bottom-auto bottom-20 right-0" />
      <div>
        <h1 className="lg:text-[48px] text-[32px]">Hubungi Kami</h1>
        <p className="mt-4 pr-10">
          Maklumat lanjut atau ingin tahu sebarang penyertaan boleh hubungi
          kami. Kami sentiasa bersedia membantu anda.
        </p>
        <div className="card mt-8">
          <div>
            <div className="mb-4 text-white flex justify-start items-center gap-6">
              <div>
                <AiOutlineHome className="text-2xl" />
              </div>
              <div>
                <h3>Lokasi Kami</h3>
                <p>
                  No. 28A, Jalan 4/12B, Seksyen 4 Tambahan, 43650 Bandar Baru
                  Bangi, Selangor Darul Ehsan
                </p>
              </div>
            </div>
            <div className="mb-4 text-white flex justify-start items-center gap-6">
              <div>
                <AiOutlinePhone className="text-2xl" />
              </div>
              <div>
                <h3>No. Telefon</h3>
                <p>(+60) 12345678</p>
              </div>
            </div>
            <div className="text-white flex justify-start items-center gap-6">
              <div>
                <AiOutlineMail className="text-2xl" />
              </div>
              <div>
                <h3>Alamat Emel</h3>
                <p>kampusmysekolahkripto@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <form action="">
          <div className="input-form">
            <label className="form-label">Nama Penuh</label>
            <input
              type="text"
              placeholder=""
              name="nama-penuh"
              className="form-control"
            />
          </div>
          <div className="input-form">
            <label className="form-label">Email</label>
            <input
              type="text"
              placeholder=""
              name="email"
              className="form-control"
            />
          </div>
          <div className="input-form">
            <label className="form-label">Tajuk</label>
            <input
              type="text"
              placeholder=""
              name="tajuk"
              className="form-control"
            />
          </div>
          <div className="input-form">
            <label className="form-label">Mesej</label>
            <textarea
              name="mesej"
              id="mesej"
              className="form-control"
            ></textarea>
          </div>

          <button type="submit" className="primary-button">
            Hantar
          </button>
        </form>
      </div>
    </div>
  );
};

export default HubungiKami;
