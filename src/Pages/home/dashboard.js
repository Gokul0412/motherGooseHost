import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Head from "next/head";
import Stack from "@mui/material/Stack";
import Navbar from "<prefix>/components/Navbar";
import dynamic from "next/dynamic";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import DownloadIcon from "@mui/icons-material/Download";
import {
  errorToast,
  successToast,
  warnToast,
} from "<prefix>/Components/helper";
import {
  postPatientBarChatApi,
  postPatientEnrolledBarChatApi,
  postPatientAlcoholUsedPieChartApi,
  postPatientPieChartApi,
  postPatientSmokeUsedPieChartApi,
  postPatientAgeDeliveryBarChartApi,
  postPatientAgeGroupDeliveryPieChartApi,
  postPatientHealthInsurancePieChartApi,
  postPatientStressedPieChartApi,
  postPatientLackOfTransportationsPieChartApi,
  postexportUserDetailsApi,
  postExportTimeSpentOnArticleActionApi,
  getStateAction,
  postZipCodeListApi,
  getrisksurveyAction,
} from "redux/action/userAction";
import LoaderState from "<prefix>/Components/Loader";
import LogoutHandlerModal from "<prefix>/Components/logOutModal";
import { router } from "next/router";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
// import Nodata from "../../assets/images/nodata.png"

const Bargraph = dynamic(() => import("../../components/Bargraph"), {
  ssr: false,
});
const PieChart = dynamic(() => import("../../components/PieChart"), {
  ssr: false,
});
const AreaBargraph = dynamic(() => import("../../components/areabargraph"), {
  ssr: false,
});

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const patientBarResponse = useSelector(
    (state) => state.user.patientBarChartinfo
  );
  const patientEnrolledBarResponse = useSelector(
    (state) => state.user.patientEnrolledBarChartinfo
  );
  const patientAgeDeliveryResponse = useSelector(
    (state) => state.user.patientAgeDeliveryBarChartinfo
  );
  const patientLackOfTransportationsPieResponse = useSelector(
    (state) => state.user.patientLackOfTransportationsPieChartinfo
  );
  const patientLackOfTransportationsPieChartisLoading = useSelector(
    (state) => state.user.patientLackOfTransportationsPieChartisLoading
  );
  const patientAlcoholUsedPieResponse = useSelector(
    (state) => state.user.patientAlcoholUsedPieChartinfo
  );
  const PatientPieResponse = useSelector(
    (state) => state.user.patientEnrolledPieChartinfo
  );
  const PatientSmokeUsedPieResponse = useSelector(
    (state) => state.user.patientSmokeUsedPieChartinfo
  );
  const PatientAgeGroupDeliveryPieResponse = useSelector(
    (state) => state.user.patientAgeGroupDeliveryPieChartinfo
  );
  const PatientHealthInsurancePieResponse = useSelector(
    (state) => state.user.patientHealthInsurancePieChartinfo
  );
  const PatientStressedPieResponse = useSelector(
    (state) => state.user.patientStressedPieChartinfo
  );
  const PatientexportUserDetailsResponse = useSelector(
    (state) => state.user.patientExportUserDetailsinfo
  );
  const PatientexportTimeSpentOnArticleResponse = useSelector(
    (state) => state.user.patientExportTimeSpentOnArticleinfo
  );
  const stateinfoResponse = useSelector((state) => state.user.stateinfo);
  const stateisLoadingResponse = useSelector(
    (state) => state.user.stateisLoading
  );
  const patientZipCodeResponse = useSelector(
    (state) => state.user.patientZipCodeListinfo
  );
  const patientZipCodeListisLoading = useSelector(
    (state) => state.user.patientZipCodeListisLoading
  );
  const riskSurveyResponse = useSelector((state) => state.user.riskSurveyinfo);

  const [startdate, setStartDate] = React.useState("");
  const [enddate, setEndDate] = React.useState("");
  const [PatientBarChat, setPatientBarChat] = useState([]);
  const [patientEnrolledBarChat, setpatientEnrolledBarChat] = useState([]);
  const [PatientAgeDelivertBarChat, setPatientAgeDelivertBarChat] = useState(
    []
  );
  const [isSearchClick, setisSearchClick] = useState(false);
  const [
    patientLackOfTransportationsPieChart,
    setpatientLackOfTransportationsPieChart,
  ] = useState([]);
  const [patientAlcoholUsedPieChart, setpatientAlcoholUsedPieChart] = useState(
    []
  );
  const [patientPieChart, setpatientPieChart] = useState([]);
  const [patientSmokePieChart, setPatientSmokePieChart] = useState([]);
  const [patientAgeGroupDeliveryPieChart, setPatientAgeGroupDeliveryPieChart] =
    useState([]);
  const [patientHealthInsurancePieChart, setpatientHealthInsurancePieChart] =
    useState([]);
  const [patientStressedPieChart, setPatientStressedPieResponse] = useState([]);
  const [ExportUserDetail, setExportUserDetail] = useState([]);
  const [ExportTimeSpentArticle, setExportTimeSpentArticle] = useState([]);
  const [filter, setFilter] = React.useState(1);
  const [RiskSurveyURL, setRiskSurveyURL] = useState("");
  // const [patientEnrolledUrl, setRiskSurveyURL] = useState('')
  const [DownloadUrl, setDowlaodUrl] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [isDataAvailable, setisDataAvailable] = useState(false);
  const [
    PatientexportTimeSpentOnArticlePiechart,
    setPatientexportTimeSpentOnArticlePiechart,
  ] = useState([]);
  const [RiskSurveyBargraph, setRiskSurveyBargraph] = useState([]);


  let group = [
    {
      id: 0,
      key: "Select",
      value: "Select",
    },
    {
      id: 1,
      key: "patient",
      value: "Patient",
    },
    {
      id: 2,
      key: "age",
      value: "Age",
    },
    {
      id: 3,
      key: "icd",
      value: "ICD Code",
    },
  ];

  const formik = useFormik({
    // enableReinitialize: true,

    initialValues: {
      startdate: "",
      enddate: "",
      patientID: "",
      provider: "",
      zipcode: 0,
      insurancepayer: "",
      state: 0,
      groupby: "Select",
    },

    validateOnChange: (values) => {
      console.log("value", values);
      getZipcode(values.target.value === 0 ? 1 : values.target.value);
      formik.handleChange(values);
      validateApiCall(
        filter,
        startdate,
        enddate,
        values.target.value === 0 ? '' : values.target.value,
        formik.values.zipcode,
        formik.values.groupby
      );
    },

    onSubmit: (values) => {
      console.log("value", values);
      _onFindPress(values.state, values.zipcode, values.groupby);
    },
  });

  useEffect(() => {
    checkingForLogin();
    const date = new Date();
    let day = String(date.getDate()).padStart(2, "0");
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let year = date.getFullYear();
    var priorDate = new Date(new Date().setDate(date.getDate() - 30));
    let Pday = String(priorDate.getDate()).padStart(2, "0");
    let Pmonth = String(priorDate.getMonth() + 1).padStart(2, "0");
    let Pyear = priorDate.getFullYear();
    let currentDate = `${year}-${month}-${day}`;
    let PriorDatevalue = `${Pyear}-${Pmonth}-${Pday}`;
    // setStartDate(PriorDatevalue);
    setEndDate(currentDate);
    setStartDate("2021-01-01");
    dispatch(getStateAction());
    // getZipcode(37);
    validateApiCall(
      filter,
      "2021-01-01",
      currentDate,
      formik.values.state,
      formik.values.zipcode,
      formik.values.groupby
    );
  }, []);

  const handleChange = (event) => {
    setisLoading(true);
    setFilter(event.target.value);
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
    validateApiCall(
      event.target.value,
      startdate,
      enddate,
      formik.values.state,
      formik.values.zipcode,
      formik.values.groupby
    );
  };
  const validateApiCall = (
    value,
    startdate,
    enddate,
    state,
    zipcode,
    groupby
  ) => {
    setisSearchClick(true);
    if (value == 1 || value == 3) {
      const param = {
        fromDate: startdate,
        toDate: enddate,
        stateId: state == 0 ? "" : state,
        zipCode: zipcode === 0 ? "" : zipcode,
        groupBy: groupby === "Select" ? "" : groupby,
        isRegistered: "false",
      };
      dispatch(postPatientBarChatApi(param));
      dispatch(postPatientPieChartApi(param));
      dispatch(postexportUserDetailsApi(param));
    } else if (value == 2) {
      const reqBodywithTruestate = {
        fromDate: startdate,
        toDate: enddate,
        stateId: state == 0 ? "" : state,
        zipCode: zipcode === 0 ? "" : zipcode,
        groupBy: groupby === "Select" ? "" : groupby,
        isRegistered: "true",
      };
      dispatch(postPatientEnrolledBarChatApi(reqBodywithTruestate));
      dispatch(postexportUserDetailsApi(reqBodywithTruestate));
    } else if (value == 4) {
      const reqBody = {
        fromDate: startdate,
        toDate: enddate,
        stateId: "",
        zipCode: "",
      };
      dispatch(postPatientAlcoholUsedPieChartApi(reqBody));
      const param = {
        fromDate: startdate,
        toDate: enddate,
        stateId: state == 0 ? "" : state,
        zipCode: zipcode === 0 ? "" : zipcode,
        groupBy: groupby === "Select" ? "" : groupby,
        isRegistered: "false",
      };
      dispatch(postexportUserDetailsApi(param));
    } else if (value == 5) {
      const reqBody = {
        fromDate: startdate,
        toDate: enddate,
        stateId: "",
        zipCode: "",
      };
      dispatch(postPatientSmokeUsedPieChartApi(reqBody));
    } else if (value == 6) {
      const reqBody = {
        fromDate: startdate,
        toDate: enddate,
        stateId: "",
        zipCode: "",
      };
      dispatch(postPatientAgeDeliveryBarChartApi(reqBody));
    } else if (value == 7) {
      const reqBody = {
        fromDate: startdate,
        toDate: enddate,
        stateId: "",
        zipCode: "",
      };
      dispatch(postPatientAgeGroupDeliveryPieChartApi(reqBody));
    } else if (value == 8) {
      const reqBody = {
        fromDate: startdate,
        toDate: enddate,
        stateId: "",
        zipCode: "",
      };
      dispatch(postPatientHealthInsurancePieChartApi(reqBody));
    } else if (value == 9) {
      const reqBody = {
        fromDate: startdate,
        toDate: enddate,
        stateId: "",
        zipCode: "",
      };
      dispatch(postPatientStressedPieChartApi(reqBody));
    } else if (value == 10) {
      const reqBody = {
        fromDate: startdate,
        toDate: enddate,
        stateId: "",
        zipCode: "",
      };
      dispatch(postPatientLackOfTransportationsPieChartApi(reqBody));
    } else if (value == 11) {
      const reqBodywithnewstate = {
        fromDate: startdate,
        toDate: enddate,
        stateId: state == 0 ? "" : state,
        zipCode: zipcode === 0 ? "" : zipcode,
        groupBy: groupby === "Select" ? "" : groupby,
        resType: "file",
      };
      dispatch(postExportTimeSpentOnArticleActionApi(reqBodywithnewstate));
      const reqBodywithnewstate1 = {
        fromDate: startdate,
        toDate: enddate,
        stateId: state == 0 ? "" : state,
        zipCode: zipcode === 0 ? "" : zipcode,
        groupBy: groupby === "Select" ? "" : groupby,
        resType: "data",
      };
      dispatch(postExportTimeSpentOnArticleActionApi(reqBodywithnewstate1));
    } else if (value == 12) {
      const reqBodywithnewstate = {
        fromDate: startdate,
        toDate: enddate,
        stateId: state == 0 ? "" : state,
        zipCode: zipcode === 0 ? "" : zipcode,
        groupBy: groupby === "Select" ? "" : groupby,
        resType: "file",
      };
      dispatch(getrisksurveyAction(reqBodywithnewstate));
      const reqBodywithnewstate1 = {
        fromDate: startdate,
        toDate: enddate,
        stateId: state == 0 ? "" : state,
        zipCode: zipcode === 0 ? "" : zipcode,
        groupBy: groupby === "Select" ? "" : groupby,
        resType: "data",
      };

      dispatch(getrisksurveyAction(reqBodywithnewstate1));

    }
    scrollToBottom()

  };

  const getZipcode = (value) => {
    console.log("value", value);
    let params = {
      stateId: value,
    };
    dispatch(postZipCodeListApi(params));
  };

  const checkingForLogin = () => {
    const accessToken =
      typeof window !== "undefined"
        ? sessionStorage.getItem("accessToken")
        : "";
    console.log("checkingForLogin", accessToken);
    if (accessToken === null) {
      router.push("/auth/Login");
    }
  };

  //   const _onFindPress = (stateId, zipCode, groupby) => {
  //     const reqBody = {
  //       fromDate: startdate,
  //       toDate: enddate,
  //       stateId: "",
  //       zipCode: "",
  //     };
  //     setisSearchClick(true);

  //     // const reqBodywithfalsestate = {
  //     //     fromDate: startdate,
  //     //     toDate: enddate,
  //     //     stateId: stateId,
  //     //     zipCode: zipCode === 0 ? '' : zipCode,
  //     //     groupBy: groupby === "Select" ? "" : groupby,
  //     //     isRegistered: "false"
  //     // };

  //     // dispatch(postPatientBarChatApi(reqBodywithfalsestate));

  //     // const reqBodywithTruestate = {
  //     //   fromDate: startdate,
  //     //   toDate: enddate,
  //     //   stateId: stateId,
  //     //   zipCode: zipCode === 0 ? "" : zipCode,
  //     //   groupBy: groupby === "Select" ? "" : groupby,
  //     //   isRegistered: "true",
  //     // };

  //     // dispatch(postPatientEnrolledBarChatApi(reqBodywithTruestate));
  //     // dispatch(postPatientAlcoholUsedPieChartApi(reqBody));
  //     // dispatch(postPatientPieChartApi(reqBodywithfalsestate));
  //     // dispatch(postPatientSmokeUsedPieChartApi(reqBody));
  //     // dispatch(postPatientAgeDeliveryBarChartApi(reqBody));
  //     // dispatch(postPatientAgeGroupDeliveryPieChartApi(reqBody));
  //     // dispatch(postPatientHealthInsurancePieChartApi(reqBody));
  //     // dispatch(postPatientStressedPieChartApi(reqBody));
  //     // dispatch(postPatientLackOfTransportationsPieChartApi(reqBody));

  //     const reqBodywithstate = {
  //       fromDate: startdate,
  //       toDate: enddate,
  //       stateId: stateId,
  //       zipCode: zipCode === 0 ? "" : zipCode,
  //       groupBy: groupby === "Select" ? "" : groupby,
  //       isRegistered: "false",
  //     };

  //     const reqBodywithnewstate = {
  //       fromDate: startdate,
  //       toDate: enddate,
  //       stateId: state,
  //       zipCode: formik.values.zipcode === 0 ? "" : formik.values.zipcode,
  //       groupBy: formik.values.groupby === "Select" ? "" : formik.values.groupby,
  //       resType: "file",
  //     };

  //     // dispatch(postexportUserDetailsApi(reqBodywithstate));
  //     // dispatch(postExportTimeSpentOnArticleActionApi(reqBodywithnewstate));
  //     dispatch(getrisksurveyAction(reqBodywithnewstate));
  //   };

  useEffect(() => {
    let dataPoints = [];
    if (patientBarResponse?.data) {
      patientBarResponse?.data.labels?.map((item, i) => {
        dataPoints.push({
          label: item,
          y: patientBarResponse?.data?.datasets[0]?.data[i],
        });
      });
      setPatientBarChat(dataPoints);
      setisDataAvailable(true);
    }
  }, [patientBarResponse]);

  useEffect(() => {
    let dataPoints = [];
    if (patientEnrolledBarResponse?.data) {
      patientEnrolledBarResponse?.data.labels?.map((item, i) => {
        dataPoints.push({
          label: item,
          y: patientEnrolledBarResponse?.data?.datasets[0]?.data[i],
        });
      });
      setpatientEnrolledBarChat(dataPoints);
      setisDataAvailable(true);
    }
  }, [patientEnrolledBarResponse]);

  useEffect(() => {
    let dataPoints = [];
    if (patientAgeDeliveryResponse?.data) {
      patientAgeDeliveryResponse?.data.labels?.map((item, i) => {
        dataPoints.push({
          label: item,
          y: patientAgeDeliveryResponse?.data?.datasets[0]?.data[i],
        });
      });
      setPatientAgeDelivertBarChat(dataPoints);
      setisDataAvailable(true);
    }
  }, [patientAgeDeliveryResponse]);

  useEffect(() => {
    let dataPoints = [];
    if (patientLackOfTransportationsPieResponse?.data) {
      patientLackOfTransportationsPieResponse?.data.labels?.map((item, i) => {
        dataPoints.push({
          name: item,
          y: patientLackOfTransportationsPieResponse?.data?.datasets[0]?.data[
            i
          ],
        });
      });

      setpatientLackOfTransportationsPieChart(dataPoints);
      setisDataAvailable(true);
    }
  }, [patientLackOfTransportationsPieResponse]);

  useEffect(() => {
    let dataPoints = [];
    if (patientAlcoholUsedPieResponse?.data) {
      patientAlcoholUsedPieResponse?.data.labels?.map((item, i) => {
        dataPoints.push({
          name: item,
          y: patientAlcoholUsedPieResponse?.data?.datasets[0]?.data[i],
        });
      });

      setpatientAlcoholUsedPieChart(dataPoints);
      setisDataAvailable(true);
    }
  }, [patientAlcoholUsedPieResponse]);

  useEffect(() => {
    let dataPoints = [];
    if (PatientPieResponse?.data) {
      PatientPieResponse?.data.labels?.map((item, i) => {
        dataPoints.push({
          name: item,
          y: PatientPieResponse?.data?.datasets[0]?.data[i],
        });
      });

      setpatientPieChart(dataPoints);
      setisDataAvailable(true);
    }
  }, [PatientPieResponse]);

  useEffect(() => {
    let dataPoints = [];
    if (PatientSmokeUsedPieResponse?.data) {
      PatientSmokeUsedPieResponse?.data.labels?.map((item, i) => {
        dataPoints.push({
          name: item,
          y: PatientSmokeUsedPieResponse?.data?.datasets[0]?.data[i],
        });
      });

      setPatientSmokePieChart(dataPoints);
      setisDataAvailable(true);
    }
  }, [PatientSmokeUsedPieResponse]);

  useEffect(() => {
    let dataPoints = [];
    if (PatientAgeGroupDeliveryPieResponse?.data) {
      PatientAgeGroupDeliveryPieResponse?.data.labels?.map((item, i) => {
        dataPoints.push({
          name: item,
          y: PatientAgeGroupDeliveryPieResponse?.data?.datasets[0]?.data[i],
        });
      });
      setPatientAgeGroupDeliveryPieChart(dataPoints);
      setisDataAvailable(true);
    }
  }, [PatientAgeGroupDeliveryPieResponse]);

  useEffect(() => {
    let dataPoints = [];
    if (PatientHealthInsurancePieResponse?.data) {
      PatientHealthInsurancePieResponse?.data.labels?.map((item, i) => {
        dataPoints.push({
          name: item,
          y: PatientHealthInsurancePieResponse?.data?.datasets[0]?.data[i],
        });
      });

      setpatientHealthInsurancePieChart(dataPoints);
      setisDataAvailable(true);
    }
  }, [PatientHealthInsurancePieResponse]);

  useEffect(() => {
    let dataPoints = [];
    if (PatientStressedPieResponse?.data) {
      PatientStressedPieResponse?.data.labels?.map((item, i) => {
        dataPoints.push({
          name: item,
          y: PatientStressedPieResponse?.data?.datasets[0]?.data[i],
        });
      });
      setPatientStressedPieResponse(dataPoints);
      setisDataAvailable(true);
    }
  }, [PatientStressedPieResponse]);

  useEffect(() => {
    if (PatientexportUserDetailsResponse?.msg == "success") {
      console.log(
        "PatientexportUserDetailsResponse",
        PatientexportUserDetailsResponse.url
      );
      setDowlaodUrl(PatientexportUserDetailsResponse.url);
      setExportUserDetail(PatientexportUserDetailsResponse.url);
    } else {
      setDowlaodUrl("");
      setExportUserDetail("");
    }
  }, [PatientexportUserDetailsResponse]);

  useEffect(() => {
    if (PatientexportTimeSpentOnArticleResponse?.msg == "success") {
      console.log(
        "PatientexportTimeSpentOnArticleResponse",
        PatientexportTimeSpentOnArticleResponse.url
      );
      setExportTimeSpentArticle(PatientexportTimeSpentOnArticleResponse.url);
      setDowlaodUrl(PatientexportTimeSpentOnArticleResponse.url);
    } else {
      //   setExportTimeSpentArticle("");
      //   setDowlaodUrl("");
      let dataPoints = [];
      if (PatientexportTimeSpentOnArticleResponse?.data) {
        PatientexportTimeSpentOnArticleResponse?.data.labels?.map((item, i) => {
          var splitString = PatientexportTimeSpentOnArticleResponse?.data?.datasets[0]?.data[i].split(":");
          let y =
            (+splitString[0]) * 60 + (+splitString[1]);

          dataPoints.push({
            label: item,
            y: y,
          });
        });
        console.log("PatientexportTimeSpentOnArticleResponse", dataPoints);

        setPatientexportTimeSpentOnArticlePiechart(dataPoints);
        setisDataAvailable(true);
      }
    }
  }, [PatientexportTimeSpentOnArticleResponse]);

  useEffect(() => {
    if (riskSurveyResponse?.msg == "success") {
      console.log("riskSurveyResponse", riskSurveyResponse.url);
      setRiskSurveyURL(riskSurveyResponse.url);
      setDowlaodUrl(riskSurveyResponse.url);
    } else {
      //   setRiskSurveyURL("");
      //   setDowlaodUrl("");
      let dataPoints = [];

      if (riskSurveyResponse?.data) {
        riskSurveyResponse?.data.labels?.map((item, i) => {
          var splitString = riskSurveyResponse?.data?.datasets[0]?.data[i].split(":");
          let y =
            (+splitString[0]) * 60 + (+splitString[1]);

          dataPoints.push({
            label: item,
            y: y,
          });
        });
        console.log("riskSurveyResponse", dataPoints);
        setRiskSurveyBargraph(dataPoints);
        setisDataAvailable(true);
      }
    }
  }, [riskSurveyResponse]);
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [isLoading]);

  return (
    <>
      <Head>
        <title>Mother Goose - Dashboard</title>
      </Head>

      <Navbar />

      <div ref={messagesEndRef}>
        <div className="bg-img">
          <div className="col-lg-5 col-md-8 col-xs-12 divcenter ">
            <Card
              sx={{
                minWidth: 275,
                borderRadius: "10px",
                boxShadow: "rgb(0 0 0 / 24%) 0px 3px 8px",
                alignSelf: "left",
                backgroundColor: "#fffdff",
              }}
            >
              <h2
                style={{
                  fontWeight: "600",
                  fontSize: "2rem",
                  textAlign: "center",
                  margin: "0.5rem 1rem",
                  color: "#46adef",
                }}
              >
                Mother Goose{" "}
              </h2>
              <h4
                style={{
                  textAlign: "center",
                  color: "grey",
                  fontSize: "16px",
                  margin: "0.5rem 1rem",
                }}
              >
                Please fill the details to find your report{" "}
              </h4>
              <CardContent>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Stack direction="row" spacing={6}>
                    <TextField
                      id="date"
                      label="From Date"
                      type="date"
                      value={startdate}
                      fullWidth
                      defaultValue={startdate}
                      onChange={(newValue) => {
                        console.log("sss", newValue.target.value);
                        setStartDate(newValue.target.value);
                        validateApiCall(
                          filter,
                          newValue.target.value,
                          enddate,
                          formik.values.state,
                          formik.values.zipcode,
                          formik.values.groupby
                        );
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      id="date"
                      label="To Date"
                      type="date"
                      value={enddate}
                      defaultValue={enddate}
                      fullWidth
                      onChange={(newValue) => {
                        console.log("sss", newValue.target.value);
                        setEndDate(newValue.target.value);
                        validateApiCall(
                          filter,
                          startdate,
                          newValue.target.value,
                          formik.values.state,
                          formik.values.zipcode,
                          formik.values.groupby
                        );
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Stack>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 1, sm: 2, md: 6 }}
                    sx={{ marginTop: "20px", width: "100%" }}
                  >
                    <TextField
                      fullWidth
                      name="state"
                      onBlur={formik.handleBlur}
                      onChange={(e) => formik.validateOnChange(e)}
                      value={formik.values.state + ""}
                      id="outlined-basic"
                      label="State"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      select
                    >
                      <MenuItem key={0} value={0}>
                        {"Select"}
                      </MenuItem>
                      {stateinfoResponse?.data?.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>

                    <TextField
                      fullWidth
                      name="zipcode"
                      onBlur={formik.handleBlur}
                      onChange={(e) => {
                        formik.handleChange(e);
                        validateApiCall(
                          filter,
                          startdate,
                          enddate,
                          formik.values.state,
                          e.target.value,
                          formik.values.groupby
                        );
                      }}
                      value={formik.values.zipcode}
                      id="outlined-basic"
                      label="ZIP code"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      select
                    >
                      <MenuItem key={0} value={0}>
                        {"Select"}
                      </MenuItem>
                      {patientZipCodeResponse?.zip_codes?.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>

                  </Stack>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 1, sm: 2, md: 6 }}
                    sx={{ marginTop: "20px", width: "100%" }}
                  >
                    <TextField
                      fullWidth
                      name="groupby"
                      onBlur={formik.handleBlur}
                      onChange={(e) => {
                        formik.handleChange(e);
                        validateApiCall(
                          filter,
                          startdate,
                          enddate,
                          formik.values.state,
                          formik.values.zipcode,
                          e.target.value
                        );
                      }}
                      value={formik.values.groupby}
                      id="outlined-basic"
                      label="Group by"
                      variant="outlined"
                      select
                    >
                      {/* <MenuItem key={0} value={0}>
                                                {''}
                                            </MenuItem> */}
                      {group?.map((option) => (
                        <MenuItem key={option.id} value={option.key}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </TextField>

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-helper-label">
                        Filter
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={filter}
                        label="Age"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        fullWidth
                      >
                        <MenuItem value={1}>Patient Invited</MenuItem>
                        <MenuItem value={2}>Patient Enrolled</MenuItem>
                        <MenuItem value={3}>Patient Enrolled vs Invited</MenuItem>
                        <MenuItem value={4}>Patient Alcohol Use </MenuItem>
                        <MenuItem value={5}>Patient Smoke Use </MenuItem>
                        <MenuItem value={6}>Patient age at delivery</MenuItem>
                        <MenuItem value={7}>Patient age group at delivery </MenuItem>
                        <MenuItem value={8}>Patient Health Insurance</MenuItem>
                        <MenuItem value={9}>How Patient Stressed</MenuItem>
                        <MenuItem value={10}>Patient Lack of transportation </MenuItem>
                        <MenuItem value={11}>Time spent on articles report</MenuItem>
                        <MenuItem value={12}>Risk Survey Report</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                </LocalizationProvider>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {!isDataAvailable ? (
        <div style={{ textAlign: "center" }}>
          {isSearchClick && !patientLackOfTransportationsPieChartisLoading ? (
            <>
              <img
                src="/assets/images/nodata.png"
                alt="No data found"
                style={{ width: "30%" }}
              />
              <h2>No data found</h2>
            </>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div ref={messagesEndRef} className="bar">
          <br />
          <div
            className="gridcenter"
            style={{
              marginBottom: "1rem",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
            }}
          >
            {filter == 1 ||
              filter == 11 ||
              filter == 12 ||
              filter == 2 ||
              filter == 3 ? (
              <div className="last">
                <a
                  className="dedcription-btn exp-btn"
                  onClick={() => {
                    DownloadUrl === "" ? warnToast("Report not available") : "";
                  }}
                  href={DownloadUrl}
                  download={DownloadUrl === "" ? false : true}
                  style={{ marginRight: "2rem" }}
                >
                  <span className="name-descripeion">
                    {" "}
                    <DownloadIcon /> Export
                  </span>
                  <div className="btn-icon">
                    <i className="fa-solid fa-magnifying-glass-arrow-right"></i>{" "}
                  </div>
                </a>
              </div>
            ) : (
              <div className="last"></div>
            )}
          </div>

          <div style={{ marginBottom: "3rem" }}>
            <div className="row" style={{ width: "100%" }}>
              {filter === 1 && (
                <div className="col-lg-12">
                  <div
                    className="card"
                    style={{ width: "80%", margin: "auto" }}
                  >
                    <Bargraph
                      {...props}
                      title={patientBarResponse?.title}
                      datasets={PatientBarChat}
                    />
                  </div>
                </div>
              )}

              {filter === 2 && (
                <div className="col-lg-12">
                  <div
                    className="card"
                    style={{ width: "80%", margin: "auto" }}
                  >
                    <Bargraph
                      {...props}
                      title={patientEnrolledBarResponse?.title}
                      datasets={patientEnrolledBarChat}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="row" style={{ width: "100%" }}>
              {filter === 3 && (
                <div className="col-lg-12">
                  <div
                    className="card"
                    style={{ width: "80%", margin: "auto" }}
                  >
                    <PieChart
                      {...props}
                      title={PatientPieResponse?.title}
                      datasets={patientPieChart}
                    />
                  </div>
                </div>
              )}
              {filter === 4 && (
                <div className="col-lg-12">
                  <div
                    className="card"
                    style={{ width: "80%", margin: "auto" }}
                  >
                    <PieChart
                      {...props}
                      title={patientAlcoholUsedPieResponse?.title}
                      datasets={patientAlcoholUsedPieChart}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="row" style={{ width: "100%" }}>
              {filter === 5 && (
                <div className="col-lg-12">
                  <div
                    className="card"
                    style={{ width: "80%", margin: "auto" }}
                  >
                    <PieChart
                      {...props}
                      title={PatientSmokeUsedPieResponse?.title}
                      datasets={patientSmokePieChart}
                    />
                  </div>
                </div>
              )}
              {filter === 6 && (
                <div className="col-lg-12">
                  <div
                    className="card"
                    style={{ width: "80%", margin: "auto" }}
                  >
                    <Bargraph
                      {...props}
                      title={patientAgeDeliveryResponse?.title}
                      datasets={PatientAgeDelivertBarChat}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="row" style={{ width: "100%" }}>
              {filter === 7 && (
                <div className="col-lg-12">
                  <div
                    className="card"
                    style={{ width: "80%", margin: "auto" }}
                  >
                    <PieChart
                      {...props}
                      title={PatientAgeGroupDeliveryPieResponse?.title}
                      datasets={patientAgeGroupDeliveryPieChart}
                    />
                  </div>
                </div>
              )}
              {filter === 8 && (
                <div className="col-lg-12">
                  <div
                    className="card"
                    style={{ width: "80%", margin: "auto" }}
                  >
                    <PieChart
                      {...props}
                      title={PatientHealthInsurancePieResponse?.title}
                      datasets={patientHealthInsurancePieChart}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="row" style={{ width: "100%" }}>
              {filter === 9 && (
                <div className="col-lg-12">
                  <div
                    className="card"
                    style={{ width: "80%", margin: "auto" }}
                  >
                    <PieChart
                      {...props}
                      title={PatientStressedPieResponse?.title}
                      datasets={patientStressedPieChart}
                    />
                  </div>
                </div>
              )}
              {filter === 10 && (
                <div className="col-lg-12">
                  <div
                    className="card"
                    style={{ width: "80%", margin: "auto" }}
                  >
                    <PieChart
                      {...props}
                      title={patientLackOfTransportationsPieResponse?.title}
                      datasets={patientLackOfTransportationsPieChart}
                    />
                  </div>
                </div>
              )}
              {filter === 11 && (
                <div className="col-lg-12">
                  <div
                    className="card"
                    style={{ width: "80%", margin: "auto" }}
                  >
                    <AreaBargraph
                      {...props}
                      title={PatientexportTimeSpentOnArticleResponse?.title}
                      datasets={PatientexportTimeSpentOnArticlePiechart}
                    />
                  </div>
                </div>
              )}
              {filter === 12 && (
                <div className="col-lg-12">
                  <div
                    className="card"
                    style={{ width: "80%", margin: "auto" }}
                  >
                    <AreaBargraph
                      {...props}
                      title={riskSurveyResponse?.title}
                      datasets={RiskSurveyBargraph}
                    />
                  </div>
                </div>
              )}
              {patientLackOfTransportationsPieChartisLoading ||
                stateisLoadingResponse ||
                patientZipCodeListisLoading ||
                isLoading ? (
                <LoaderState />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      )}
      <p style={{textAlign:"center"}}>© 2023 All Rights Reserved By Mother Goose</p>
    </>
  );
};

export default Dashboard;
