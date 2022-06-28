import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';
import Carousel from '../../../components/afterlogin/carousel';
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
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="">
          <h3 className="h3">
            Rekomendasi Wisata di
            {' '}
            {city ? city.name : null}
            {' '}
          </h3>
        </div>
        <div className="d-none d-sm-block">
          <button type="button" className="btn-orange" onClick={searchHandler}>Cari Pemandu</button>
        </div>
      </div>
      <div className="p-0 mb-5">
        <Carousel />
      </div>

      <div className="d-flex align-items-center justify-content-center mb-5">
        <div className="d-block d-sm-none">
          <button type="button" className="btn-orange" onClick={searchHandler}>Cari Pemandu</button>
        </div>
      </div>
    </Layout>
  );
}

export default UserHomePage;
