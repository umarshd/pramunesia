import React from 'react';
import Navigation from '../../../components/afterlogin/navbar';

export default function BeriUlasan() {
  return (
    <div className="container mx-auto">
      <Navigation />
      <h3 className="mb-5">Tulis Ulasan</h3>
      <div className="row ">
        <form>
          <div className="card shadow-custom-2 border-radius-20-bottom">
            {/* <div>
              <button
                type="submit"
                className="d-inline btn-orange me-2 rounded-0"
              >
                Tambahkan Foto/Video
              </button>
              <button type="submit" className="btn-orange rounded-0">
                Tambahkan Lokasi
              </button>
            </div> */}

            <textarea
              style={{ resize: 'none' }}
              className="form-control border-0 form-ulasan shadow-none mt-3"
              rows="9"
              placeholder="Ceritakan Pengalamanmu..."
            />
            <div className="text-end p-4">
              <button type="submit" className="btn-orange mr-4">
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
