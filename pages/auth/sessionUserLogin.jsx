import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

const sessionUserLogin = async () => {
  const MySwal = withReactContent(Swal);
  const router = useRouter();
  const api = `${process.env.NEXT_PUBLIC_ENDPOINT}/auth`;
  try {
    const response = await axios({
      url: api,
      method: "GET",
      headers: {
        authorization: `Bearer ${Cookies.get("pramunesiaAppToken")}`,
      },
    });
  } catch (error) {
    router.replace("/user/login");
    MySwal.fire({
      position: "center",
      icon: "error",
      title: `${"Please login first"}`,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export default sessionUserLogin;
