import Image from 'next/image';
import Navigation from '../../../components/afterlogin/navbar';

function SertifTamuGuide() {
  return (
    <div className="container mx-auto">
      <Navigation />
      <div className="d-flex flex-column justify-content-center align-items-center bg-soft-peace p-3 soft-shadow rounded">
        <div className="rounded-circle overflow-hidden soft-shadow border border-5">
          <Image
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            width="100"
            height="100"
          />
        </div>
        <h4 className="text-center">
          Leanne Graham
          {' '}
          <span className="fw-light">Sincere@april.biz</span>
        </h4>
        <p>Laki-Laki</p>
        <p>221234567891</p>
        <p>Bandung, Jawa Barat 089678564320</p>
      </div>
      <div className="row gap-0 mt-5">
        <div className="col-lg-3 col-md-3 col-sm-12 p-0 mb-3">
          <div className=" d-flex justify-content-center flex-column align-items-center bg-soft-peace soft-shadow rounded h-100 p-4">
            <h4 className="mb-2">Sertifikat</h4>
            <div className="d-flex justify-content-center flex-md-column align-items-center gap-2 h-100 w-100 mb-3">
              <div className="col bg-dark-grey d-flex justify-content-center align-items-center p-1 w-100 rounded mh-12rm">Sertifikat 1</div>
              <div className="col bg-dark-grey d-flex justify-content-center align-items-center p-1 w-100 rounded mh-12rm">Sertifikat 2</div>
            </div>
            <button type="button" className="btn-orange">Unggah</button>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 p-0 ms-auto">
          <div className="d-flex flex-column">
            <div className="bg-white">
              <div className="form-floating mb-3">
                <textarea className="form-control" placeholder="Leave a comment here" id="inputUlasan" />
                <label htmlFor="inputUlasan" className="text-muted">Ceritakan pengalamanmu.....</label>
              </div>
              <div className="mb-3 d-flex justify-content-end">
                <button type="submit" className="btn-orange">Kirim</button>
              </div>
            </div>
            <div className="col bg-soft-peace p-3 soft-shadow rounded">
              <div className="d-flex flex-column">
                <div className="col">
                  <div className="d-flex gap-2 mb-2">
                    <Image
                      src="https://cdn.pixabay.com/photo/2021/07/25/08/03/account-6491185_960_720.png"
                      width="45"
                      height="30"
                    />
                    <div className="">
                      <h5> Leanne Graham</h5>
                      <p>Lokasi wisata bersama @wisatawan</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita deserunt cumque ex quisquam ut, provident aliquam nulla
                    debitis ducimus saepe ea reprehenderit nesciunt placeat modi
                    sint excepturi sapiente possimus dolor veritatis dolorum aperiam
                    magnam necessitatibus temporibus! Dolores cumque nihil
                    cupiditate?
                  </p>
                </div>
              </div>
            </div>
            <div className="col bg-soft-peace p-3 soft-shadow rounded mt-3">
              <div className="d-flex flex-column">
                <div className="col">
                  <div className="d-flex gap-2 mb-2">
                    <Image
                      src="https://cdn.pixabay.com/photo/2021/07/25/08/03/account-6491185_960_720.png"
                      width="45"
                      height="30"
                    />
                    <div className="">
                      <h5> Leanne Graham</h5>
                      <p>Lokasi wisata bersama @wisatawan</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita deserunt cumque ex quisquam ut, provident aliquam nulla
                    debitis ducimus saepe ea reprehenderit nesciunt placeat modi
                    sint excepturi sapiente possimus dolor veritatis dolorum aperiam
                    magnam necessitatibus temporibus! Dolores cumque nihil
                    cupiditate?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SertifTamuGuide;
