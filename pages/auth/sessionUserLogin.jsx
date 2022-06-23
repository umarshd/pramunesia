import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const sessionUserLogin = async () => {
  const MySwal = withReactContent(Swal);
  const userSession = await Cookies.get("pramunesiaAppToken");
  const idCity = await Cookies.get("idCity");

  try {
    if (userSession) {
    } else {
      const router = useRouter();

      router.replace("/user/login");
      MySwal.fire({
        position: "center",
        icon: "error",
        title: `${"Please login first"}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {}

  return userSession;
};

export default sessionUserLogin;
