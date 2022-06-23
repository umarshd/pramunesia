import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const sessionAdminLogin = async () => {
  const MySwal = withReactContent(Swal);
  const adminSession = await Cookies.get("pramunesiaAppTokenAdmin");

  try {
    if (adminSession) {
    } else {
      const router = useRouter();
      router.replace("/admin/login");
      MySwal.fire({
        position: "center",
        icon: "error",
        title: `${"Please login first"}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    console.log("Error", error.message);
  }

  return adminSession;
};

export default sessionAdminLogin;
