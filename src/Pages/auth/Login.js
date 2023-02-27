
import React from "react";
import Box from "@mui/material/Box";
import Head from "next/head";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { router } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { signInApi } from "redux/action/authAction";
import { useFormik } from 'formik';
import * as yup from "yup";
import LoaderState from "<prefix>/Components/Loader";
import { errorToast } from "<prefix>/Components/helper";
import 'animate.css';



// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//   </Box>
// );

const Login = () => {
  const dispatch = useDispatch();
  const LoginDataLoading = useSelector(
    (state) => state.auth.isLoading
  );
  // const rdnav = () => {
  //   // navigate("/formpage");
  //   router.push("/home/dashboard")
  // };

  // const loginFunction = () => {
  //   const reqBody = {
  //     username: "mg_admin",
  //     password: "Admin@123"
  //   }
  //   console.log("HELLO WROLD", reqBody)
  //   dispatch(signInApi(reqBody))
  // }


  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup.string().required("Name is required"),
      password: yup
        .string()
        .required('Please Enter your password')
      // .matches(passRegExp,"Enter strong password")
      // .matches(passRegExp, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
    }),
    onSubmit: (data) => {

      const reqBody = {
        username: data.username,
        password: data.password
      }
      console.log("HELLO WROLD", reqBody)
      dispatch(signInApi(reqBody))
      //  router.push("/home/dashboard")

    },
  });

  const HelloWorld = () => {
    console.log("HELLO WORLD")
  }
  
  return (
    <>
      <Head>
        <title>Mother Goose - Login</title>
      </Head>
      <div style={{ backgroundColor: '#e8f7fe' }}>
        <div className="container">
          <div className="img animate__animated animate__backInLeft">
            <img src="/assets/images/newedwer.jpg" alt="#sdsdsd" />
          </div>
          <div className="login-content">

            <Card className="animate__animated animate__backInRight" sx={{ minWidth: 400, padding: "20px", backgroundColor: "#f2faff" }}>
              <CardContent>
                <img src="/assets/images/loginimg.png" alt="TOP IMAGE" />
                <h2 className="title" style={{ fontSize: '18px' }}>LOG In</h2>
                <div>
                  <Box>
                    <TextField
                      error={Boolean(
                        formik.touched.username &&
                        formik.errors.username
                      )}
                      fullWidth

                      id="standard-basic"
                      label="User name"
                      name="username"
                      type="text"
                      variant="standard"
                      value={formik.values.username}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}

                    />
                  </Box>
                </div>
                <div style={{ marginTop: "12px" }}>
                  <Box>
                    <TextField
                      error={Boolean(
                        formik.touched.password && formik.errors.password
                      )}
                      fullWidth

                      id="standard-basic"
                      label="Password"
                      variant="standard"
                      type="password"
                      name="password"
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}

                    />
                  </Box>
                </div>
                <div className="col-sm-8 col-md-8" style={{ margin: "auto" }}>
                  <a className="dedcription-btn" href="#" onClick={formik.handleSubmit}>
                    <span className="name-descripeion">Login</span>
                    <div className="btn-icon">
                      <i className="fa-solid fa-magnifying-glass-arrow-right"></i>{" "}
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
        {LoginDataLoading ? <LoaderState /> : ""}

      </div>
      
    </>
  );
};

export default Login;
