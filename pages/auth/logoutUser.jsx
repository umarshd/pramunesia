import Cookies from 'js-cookie';
import Router from 'next/router';

const logoutUser = async () => {
  await Cookies.remove('pramunesiaAppToken');
  await Cookies.remove('pramunesiaIdUser');
  await Cookies.remove('pramunesiaRole');
  Router.replace('/user/login');
};

export default logoutUser;
