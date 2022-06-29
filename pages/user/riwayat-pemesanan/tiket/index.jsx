import React from "react";
import Image from "next/image";
import Brand from "../../../../public/nav-brand.png";

export default function Tiket() {
  return (
    <div>
      <div className="container-fluid mx-auto dashed p-5 mb-4">
        <div className="d-flex justify-content-between mb-5">
          <div className="p-0">
            <h1 className="h5 text-orange">E-Ticket PRAMUNESIA</h1>
            <p className="p">Nomor Tiket: xxxxxxxx-xxxx-x</p>
          </div>
          <div className="p-0">
            <Image src={Brand} width={65} height={60} alt="navbar logo" />
          </div>
        </div>
        <h1 className="h4 mb-2">Nama Wisatawan</h1>
        <div className="row info-ticket py-3 mb-2">
          <div className="col-12 ps-0">
            <p>Nama Pemandu Wisata : Harry Potter</p>
            <p>Kota Tujuan : Bandung</p>
            <p>Tanggal Pemesanan : 15-06-2022</p>
            <p>Tanggal Keberangkatan : 03-07-2022</p>
            <p>Tanggal Berakhir : 06-07-2022</p>
          </div>
        </div>
        <div className="note mb-4">
          <h1 className="h4 mb-2">Catatan:</h1>
          <ol>
            <li>
              Tunjukkan e-ticket dan identitas diri ketika transaksi bersama
              pemandu wisata
            </li>
            <li>E-ticket bersifat sah dan dapat dipertanggung jawabkan </li>
          </ol>
        </div>
        <div className="d-flex align-items-center justify-content-end">
          <small className="ms-auto">
            **Pembatalan transaksi setelah e-ticket dicetak, dilakukan
            berdasarkan persetujuan kedua belah pihak
          </small>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-end mx-3">
        <button
          type="button"
          id="printBtn"
          className="btn-orange fw-bold"
          onClick={() => window.print()}
        >
          Cetak Tiket
        </button>
      </div>
    </div>
  );
}
