import Cookies from "js-cookie";
import Router from "next/router";

const logoutUser = async () => {
  await Cookies.remove("pramunesiaAppToken");
  await Cookies.remove("pramunesiaAppTokenAdmin");
  await Cookies.remove("pramunesiaIdUser");
  await Cookies.remove("pramunesiaRole");
  await Cookies.remove("idCity");
  Router.replace("/user/login");
};

export default logoutUser;
