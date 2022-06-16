import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const sessionUserLogin = async () => {
  const MySwal = withReactContent(Swal);
  const router = useRouter();
  const userSession = await Cookies.get('pramunesiaAppToken');

  try {
    if (userSession) {
    } else {
      router.replace('/user/login');
      MySwal.fire({
        position: 'center',
        icon: 'error',
        title: `${'Please login first'}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {}

  return userSession;
};

export default sessionUserLogin;
