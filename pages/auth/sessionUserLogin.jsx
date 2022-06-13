import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const sessionUserLogin = async () => {
  const router = useRouter();
  const userSession = await Cookies.get("pramunesiaAppToken");

  try {
    if (userSession) {
      router.replace("/user-choose-page");
    } else {
      router.replace("/login-wisatawan");
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
