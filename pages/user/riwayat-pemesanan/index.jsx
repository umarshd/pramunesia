import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Navigation from "../../../components/afterlogin/navbar";

export default function BookingHistory() {
  const router = useRouter();
  const seeTicketHandler = () => {
    router.push("/user/riwayat-pemesanan/tiket");
  };
  // const feedBackHandler = () => {
  //   router.push("/user/beri-ulasan");
  // };
  return (
    <div className="container mx-auto">
      <Navigation />
      <h3 className="mb-5">Pemesanan Saya</h3>
      <div className="row">
        <div className="col-lg6 col-md-6 col-sm-12 p-0">
          <div className="bg-firefly p-4 shadow-custom-2 rounded">
            <div className="">
              <div className="mb-3">
                <div className="d-flex justify-content-center rounded-circle">
                  <div className="rounded-circle overflow-hidden">
                    <Image
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      width="100"
                      height="100"
                    />
                  </div>
                </div>
                <h6 className="font-weight-bold text-center text-white mb-3">
                  Nama Pemandu Wisata
                </h6>
              </div>
              <div className="mb-5 text-white">
                <p>Kota Tujuan : Bandung</p>
                <p>Tanggal Pemesanan : 15 Juni 2022</p>
                <p>Tanggal Keberangkatan : 22 Juni 2022</p>
              </div>
              <div className="d-flex justify-content-end mt-2">
                {/* <button
                  type="button"
                  className="btn-abu fw-bold me-2"
                  onClick={feedBackHandler}
                >
                  Beri Ulasan
                </button> */}
                <button
                  type="button"
                  className="btn-orange fw-bold"
                  onClick={seeTicketHandler}
                >
                  Lihat Tiket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
