import Cookies from "js-cookie";

export const storeToken = (token: string) => {
  Cookies.set("receip-token", token, { expires: 7 });
};
