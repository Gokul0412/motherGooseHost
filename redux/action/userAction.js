import { errorToast, successToast, warnToast } from "<prefix>/Components/helper";
import { APIService } from "redux/api/ApiService";
import { BASE_URL, patientBarChartUrl, patientEnrolledBarChartUrl, patientAlcoholUsedPieChartUrl, patientEnrolledPieChartUrl, patientSmokePieChartUrl, patientAgeGroupDeliveryPieChartUrl, patientHealthInsurancePieChartUrl, patientLackOfTransportationsPieChartUrl,patientAgeDeliveryBarChartUrl,patientStressedPieChartUrl, exportUserDetailsUrl, exportTimeSpentOnArticleUrl, stateUrl, getZipCodeListUrl, riskSurvey } from "../api/configApiURL";
import {
    patientBarAction, patientEnrolledBarAction, patientAlcoholUsedPieChartAction, patientEnrolledPieChartAction, patientSmokeUsedPieChartAction, patientAgeDeliveryBarChartAction, patientAgeGroupDeliveryPieChartAction, patientHealthInsurancePieChartAction, patientLackOfTransportationsPieChartAction, patientStressedPieChartAction, patientExportUserDetailsAction, patientExportTimeSpentOnArticleAction, patientZipCodeListAction, patientstateAction, riskSurveyAction, timeSpentArticleAction
} from "../slice/userSlice";

export function postPatientBarChatApi(params) {
    return async (dispatch) => {
        dispatch(patientBarAction({ isLoading: true }));
        APIService("POST", patientBarChartUrl, params)
            .then((res) => {
                if (res.status === "success") {
                    dispatch(patientBarAction({ isLoading: false, response: res.data,isSuccess:true }));
                } else {
                    dispatch(patientBarAction({ isLoading: false,isSuccess:false }));
                    warnToast("Failed to fetch my data");
                }
            })
            .catch((e) => {
                dispatch(patientBarAction({ isLoading: false,isSuccess:false }));
                errorToast("Failed to fetch my data");
                console.log("Error Occured", e);
            });
    };
}

export function postPatientEnrolledBarChatApi(params) {
    return async (dispatch) => {
        dispatch(patientEnrolledBarAction({ isLoading: true }));
        APIService("POST", patientEnrolledBarChartUrl, params)
            .then((res) => {

                if (res.status === "success") {
                    dispatch(patientEnrolledBarAction({ isLoading: false, response: res.data }));
                } else {
                    dispatch(patientEnrolledBarAction({ isLoading: false }));
                    warnToast("Failed to fetch my data");
                }
            })
            .catch((e) => {
                dispatch(patientEnrolledBarAction({ isLoading: false }));
                errorToast("Failed to fetch my data");
                console.log("Error Occured", e);
            });
    };
}

export function postPatientAlcoholUsedPieChartApi(params) {
    return async (dispatch) => {
        dispatch(patientAlcoholUsedPieChartAction({ isLoading: true }));
        APIService("POST", patientAlcoholUsedPieChartUrl, params)
            .then((res) => {
                if (res.status === "success") {
                    dispatch(patientAlcoholUsedPieChartAction({ isLoading: false, response: res.data }));
                } else {
                    dispatch(patientAlcoholUsedPieChartAction({ isLoading: false }));
                    warnToast("Failed to fetch my data");
                }
            })
            .catch((e) => {
                dispatch(patientAlcoholUsedPieChartAction({ isLoading: false }));
                errorToast("Failed to fetch my data");
                console.log("Error Occured", e);
            });
    };
}

export function postPatientPieChartApi(params) {
    return async (dispatch) => {
        dispatch(patientEnrolledPieChartAction({ isLoading: true }));
        APIService("POST", patientEnrolledPieChartUrl, params)
            .then((res) => {
                if (res.status === "success") {
                    dispatch(patientEnrolledPieChartAction({ isLoading: false, response: res.data }));
                } else {
                    dispatch(patientEnrolledPieChartAction({ isLoading: false }));
                    warnToast("Failed to fetch my data");
                }
            })
            .catch((e) => {
                dispatch(patientEnrolledPieChartAction({ isLoading: false }));
                errorToast("Failed to fetch my data");
                console.log("Error Occured", e);
            });
    };
}

export function postPatientSmokeUsedPieChartApi(params) {
    return async (dispatch) => {
        dispatch(patientSmokeUsedPieChartAction({ isLoading: true }));
        APIService("POST", patientSmokePieChartUrl, params)
            .then((res) => {
                // console.log("delivery",res)
                if (res.status === "success") {
                    dispatch(patientSmokeUsedPieChartAction({ isLoading: false, response: res.data }));
                } else {
                    dispatch(patientSmokeUsedPieChartAction({ isLoading: false }));
                    warnToast("Failed to fetch my data");
                }
            })
            .catch((e) => {
                dispatch(patientSmokeUsedPieChartAction({ isLoading: false }));
                errorToast("Failed to fetch my data");
                console.log("Error Occured", e);
            });
    };
}

export function postPatientAgeDeliveryBarChartApi(params) {
    return async (dispatch) => {
        dispatch(patientAgeDeliveryBarChartAction({ isLoading: true }));
        APIService("POST", patientAgeDeliveryBarChartUrl, params)
            .then((res) => {
                console.log("delivery", res)
                if (res.status === "success") {
                    dispatch(patientAgeDeliveryBarChartAction({ isLoading: false, response: res.data }));
                } else {
                    dispatch(patientAgeDeliveryBarChartAction({ isLoading: false }));
                    warnToast("Failed to fetch my data");
                }
            })
            .catch((e) => {
                dispatch(patientAgeDeliveryBarChartAction({ isLoading: false }));
                errorToast("Failed to fetch my data");
                console.log("Error Occured", e);
            });
    };
}

export function postPatientAgeGroupDeliveryPieChartApi(params) {
    return async (dispatch) => {
        dispatch(patientAgeGroupDeliveryPieChartAction({ isLoading: true }));
        APIService("POST", patientAgeGroupDeliveryPieChartUrl, params)
            .then((res) => {
                console.log("delivery", res)
                if (res.status === "success") {
                    dispatch(patientAgeGroupDeliveryPieChartAction({ isLoading: false, response: res.data }));
                } else {
                    dispatch(patientAgeGroupDeliveryPieChartAction({ isLoading: false }));
                    warnToast("Failed to fetch my data");
                }
            })
            .catch((e) => {
                dispatch(patientAgeGroupDeliveryPieChartAction({ isLoading: false }));
                errorToast("Failed to fetch my data");
                console.log("Error Occured", e);
            });
    };
}

export function postPatientHealthInsurancePieChartApi(params) {
    return async (dispatch) => {
        dispatch(patientHealthInsurancePieChartAction({ isLoading: true }));
        APIService("POST", patientHealthInsurancePieChartUrl, params)
            .then((res) => {
                // console.log("delivery",res)
                if (res.status === "success") {
                    dispatch(patientHealthInsurancePieChartAction({ isLoading: false, response: res.data }));
                } else {
                    dispatch(patientHealthInsurancePieChartAction({ isLoading: false }));
                    warnToast("Failed to fetch my data");
                }
            })
            .catch((e) => {
                dispatch(patientHealthInsurancePieChartAction({ isLoading: false }));
                errorToast("Failed to fetch my data");
                console.log("Error Occured", e);
            });
    };
}

export function postPatientStressedPieChartApi(params) {
    return async (dispatch) => {
        dispatch(patientStressedPieChartAction({ isLoading: true }));
        APIService("POST", patientStressedPieChartUrl, params)
            .then((res) => {
                // console.log("delivery",res)
                if (res.status === "success") {
                    dispatch(patientStressedPieChartAction({ isLoading: false, response: res.data }));
                } else {
                    dispatch(patientStressedPieChartAction({ isLoading: false }));
                    warnToast("Failed to fetch my data");
                }
            })
            .catch((e) => {
                dispatch(patientStressedPieChartAction({ isLoading: false }));
                errorToast("Failed to fetch my data");
                console.log("Error Occured", e);
            });
    };
}

export function postPatientLackOfTransportationsPieChartApi(params) {
    return async (dispatch) => {
        dispatch(patientLackOfTransportationsPieChartAction({ isLoading: true }));
        APIService("POST", patientLackOfTransportationsPieChartUrl, params)
            .then((res) => {
                // console.log("delivery",res)
                if (res.status === "success") {
                    dispatch(patientLackOfTransportationsPieChartAction({ isLoading: false, response: res.data }));
                } else {
                    dispatch(patientLackOfTransportationsPieChartAction({ isLoading: false }));
                    warnToast("Failed to fetch my data");
                }
            })
            .catch((e) => {
                dispatch(patientLackOfTransportationsPieChartAction({ isLoading: false }));
                errorToast("Failed to fetch my data");
                console.log("Error Occured", e);
            });
    };
}

export function postexportUserDetailsApi(params) {
    return async (dispatch) => {
        dispatch( patientExportUserDetailsAction({ isLoading: true }));
        APIService("POST", exportUserDetailsUrl, params)
            .then((res) => {
                console.log("userDetials",res)
                if (res.status === "success") {
                    dispatch( patientExportUserDetailsAction({ isLoading: false, response: res.data }));
                } else {
                    dispatch( patientExportUserDetailsAction({ isLoading: false }));
                    warnToast("Failed to fetch my data");
                }
            })
            .catch((e) => {
                dispatch( patientExportUserDetailsAction({ isLoading: false }));
                errorToast("Failed to fetch my data");
                console.log("Error Occured", e);
            });
    };
}

export function postExportTimeSpentOnArticleActionApi(params) {
    return async (dispatch) => {
        dispatch( patientExportTimeSpentOnArticleAction({ isLoading: true }));
        APIService("POST", exportTimeSpentOnArticleUrl, params)
            .then((res) => {
                console.log("timeSpent",res)
                if (res.status === "success") {
                    dispatch( patientExportTimeSpentOnArticleAction({ isLoading: false, response: res.data }));
                } else {
                    dispatch( patientExportTimeSpentOnArticleAction({ isLoading: false }));
                    warnToast("Failed to fetch my data");
                }
            })
            .catch((e) => {
                dispatch( patientExportTimeSpentOnArticleAction({ isLoading: false }));
                errorToast("Failed to fetch my data");
                console.log("Error Occured", e);
            });
    };
}

export function postZipCodeListApi(params) {
    return async (dispatch) => {
        dispatch( patientZipCodeListAction({ isLoading: true }));
        APIService("POST", getZipCodeListUrl, params)
            .then((res) => {
                console.log("zipcoderes",res)
                if (res.status === "success") {
                    dispatch( patientZipCodeListAction({ isLoading: false, response: res.data }));
                } else {
                    dispatch( patientZipCodeListAction({ isLoading: false }));
                    warnToast("Failed to fetch my data");
                }
            })
            .catch((e) => {
                dispatch( patientZipCodeListAction({ isLoading: false }));
                errorToast("Failed to fetch my data");
                console.log("Error Occured", e);
            });
    };
}

export function getStateAction() {
    return async (dispatch) => {
        dispatch(patientstateAction({ isLoading: true }));
        APIService("POST", stateUrl)
            .then((res) => {
                console.log("getStateActionApi",res)
                if (res.status === "success") {
                    dispatch( patientstateAction({ isLoading: false, response: res.data }));
                } else {
                    dispatch( patientstateAction({ isLoading: false }));
                    warnToast("Failed to fetch my data");
                }
            })
            .catch((e) => {
                dispatch( patientstateAction({ isLoading: false }));
                errorToast("Failed to fetch my data");
                console.log("Error Occured", e);
            });
    };
}

export function getrisksurveyAction(params) {
    return async (dispatch) => {
        dispatch(riskSurveyAction({ isLoading: true }));
        APIService("POST",riskSurvey,params)
            .then((res) => {
                console.log("getStateActionApi",res)
                if (res.status === "success") {
                    dispatch( riskSurveyAction({ isLoading: false, response: res.data }));
                } else {
                    dispatch( riskSurveyAction({ isLoading: false }));
                    warnToast("Failed to fetch my data");
                }
            })
            .catch((e) => {
                dispatch( riskSurveyAction({ isLoading: false }));
                errorToast("Failed to fetch my data");
                console.log("Error Occured", e);
            });
    };
}

// export function postTimeSpentArticleAction(params) {
//     return async (dispatch) => {
//         dispatch(timeSpentArticleAction({ isLoading: true }));
//         APIService("POST", riskSurvey,params)
//             .then((res) => {
//                 console.log("getStateActionApi",res)
//                 if (res.status === "success") {
//                     dispatch(timeSpentArticleAction({ isLoading: false, response: res.data }));
//                 } else {
//                     dispatch(timeSpentArticleAction({ isLoading: false }));
//                     warnToast("Failed to fetch my data");
//                 }
//             })
//             .catch((e) => {
//                 dispatch(timeSpentArticleAction({ isLoading: false }));
//                 errorToast("Failed to fetch my data");
//                 console.log("Error Occured", e);
//             });
//     };
// }

