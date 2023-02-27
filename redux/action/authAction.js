import { errorToast, successToast } from "<prefix>/Components/helper";
import axios from "axios";
import { BASE_URL, signInUrl } from "../api/configApiURL";
import { signInAction } from "../slice/authSlice";
import { router } from 'next/router'

export function signInApi(data) {
  return async (dispatch) => {
    dispatch(signInAction({ isLoading: true }));
    const config = {
      headers: { Accept: "application/json" },
    };
    axios
      .post(`${BASE_URL}${signInUrl}`, data, config)
      .then((user) => {
        const { status, response, message } = user.data;
        console.log("API SUCESS FULL ", user);
      
        if (user.status === 200) {
          successToast("User signed in successfully");
          dispatch(signInAction({ isLoading: false, response: user }));
          sessionStorage.setItem(
            "accessToken",
            "Bearer " + user?.data?.access
          );
          sessionStorage.setItem("refreshToken", user?.data?.refresh);
          sessionStorage.setItem("userId", user?.data?.refresh);
           router.push("/home/dashboard");

        } else {
          errorToast(message);
          dispatch(signInAction({ isLoading: false }));
        }
      })
      .catch((e) => {
        errorToast("Bad Credentials");
        console.log("BAD REQUEST", e);
        dispatch(signInAction({ isLoading: false }));
      });
  };
}
