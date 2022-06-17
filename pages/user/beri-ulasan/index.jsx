import React from 'react';
import Navigation from '../../../components/afterlogin/navbar';

export default function BeriUlasan() {
  return (
    <div className="container mx-auto">
      <Navigation />
      <h3 className="mb-5">Tulis Ulasan</h3>
        <div className="row ">
            <form>
                <button type="submit" className="btn-orange me-2 rounded-0">Tambahkan Foto/Video</button>
                <button type="submit" className="btn-orange rounded-0">Tambahkan Lokasi</button>
                <textarea className="form-control rounded-0 shadow p-3 mb-5" rows="9" placeholder='Ceritakan Pengalamanmu...'></textarea>
                <button type="submit" className="btn-orange d-flex justify-content-end align-items-end">Kirim</button>
            </form>
        </div>
    </div>
  );
}
