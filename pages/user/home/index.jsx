import React, { useState, useEffect } from 'react';
import { FiUsers, FiDollarSign } from 'react-icons/fi';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';
import Carousel from '../../../components/afterlogin/carousel';
import Card from '../../../components/afterlogin/home-card';
import Layout from '../../../components/afterlogin/layout';
import sessionUserLogin from '../../auth/sessionUserLogin';

function UserHomePage() {
  sessionUserLogin();
  const router = useRouter();
  const searchHandler = () => {
    router.push('/user/search-guide');
  };

  const [city, setCity] = useState(false);

  const getCity = async () => {
    const api = `${process.env.NEXT_PUBLIC_ENDPOINT}/cities/${Cookies.get(
      'idCity',
    )}`;

    try {
      const response = await axios({
        url: api,
        method: 'GET',
        headers: {
          authorization: `Bearer ${Cookies.get('pramunesiaAppToken')}`,
        },
      });

      await setCity(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCity();
  }, []);

  return (
    <Layout pageTitle="user-home">
      <h3 className="h3 my-3">
        Rekomendasi Wisata di
        {' '}
        {city ? city.name : null}
        {' '}
      </h3>
      <Carousel />
      <div className="my-5">
        <h3 className="h3">Pilih sesuai kebutuhanmu</h3>
        <div className="row my-3">
          <div className="col-sm-12 col-md-6 col-lg-6  mb-4">
            <div data-bs-toggle="modal" data-bs-target="#modalPemandu">
              <Card
                icons={<FiUsers size="4rem" color="white" />}
                title="Cari Pemandu Wisata"
                desc="Temukan pemandu wisata andalanmu disini!"
              />
            </div>
            {/* popup */}
            <div className="modal fade" id="modalPemandu" tabIndex="-1" role="dialog">
              <div className="modal-dialog modal-dialog-centered mx-auto" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Pilih waktunya dulu ya!</h5>
                    <button className="btn-close" type="button" data-bs-dismiss="modal" />
                  </div>
                  <div className="modal-body">
                    <form action="">
                      <div className="mb-3">
                        <label htmlFor="departure">Tanggal Keberangkatan</label>
                        <input type="date" className="form-control" id="departure" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="arrival">Tanggal Berakhir</label>
                        <input type="date" className="form-control" id="arrival" />
                      </div>
                    </form>
                    <div className="d-flex align-items-center justify-content-center my-3">
                      <button type="button" className="btn-abu me-2" data-bs-dismiss="modal">Batal</button>
                      <button type="button" className="btn-orange" onClick={searchHandler} data-bs-dismiss="modal">Simpan</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* popup */}
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6  mb-4">
            <Card
              icons={<FiDollarSign size="4rem" color="white" />}
              title="Pembayaran"
              desc="Lakukan pembayaran disini!"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserHomePage;
