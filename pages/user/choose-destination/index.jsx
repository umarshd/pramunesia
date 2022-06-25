import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Layout from '../../../components/afterlogin/layout';
import Jumbotron from '../../../components/afterlogin/jumbotron';
import sessionUserLogin from '../../auth/sessionUserLogin';

export default function index() {
  sessionUserLogin();
  const router = useRouter();
  const MySwal = withReactContent(Swal);

  const [cities, setCities] = useState(false);
  const [input, setInput] = useState(false);

  const handleChange = async (e) => {
    await setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleCity = async (e) => {
    e.preventDefault();
    if (!input) {
      MySwal.fire({
        position: 'center',
        icon: 'error',
        title: `${'Please choose destination'}`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      console.log(input.city);
      Cookies.set('idCity', input.city);
      router.push('/user/home');
    }
  };

  const getCities = async () => {
    const api = `${process.env.NEXT_PUBLIC_ENDPOINT}/cities`;

    try {
      const response = await axios({
        method: 'GET',
        url: api,
        headers: {
          authorization: `Bearer ${Cookies.get('pramunesiaAppToken')}`,
        },
      });

      await setCities(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(input.city);

  useEffect(() => {
    getCities();
  }, []);
  sessionUserLogin();
  return (
    <Layout pageTitle="Welcome">
      <div className="">
        <Jumbotron
          cities={cities}
          handleChange={handleChange}
          handleCity={handleCity}
        />
      </div>
    </Layout>
  );
}
