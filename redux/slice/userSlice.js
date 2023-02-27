import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        patientBarChartinfo: {},
        patientBarChartisLoading: false,
        patientBarChartisSuccess: false,
        patientEnrolledBarChartinfo: {},
        patientEnrolledBarChartisLoading: false,
        patientAlcoholUsedPieChartinfo: {},
        patientAlcoholUsedPieChartisLoading: false,
        patientEnrolledPieChartinfo: {},
        patientEnrolledPieChartisLoading: false,
        patientSmokeUsedPieChartinfo: {},
        patientSmokeUsedPieChartisLoading: false,
        patientAgeDeliveryBarChartinfo: {},
        patientAgeDeliveryBarChartisLoading: false,
        patientAgeGroupDeliveryPieChartinfo: {},
        patientAgeGroupDeliveryPieChartisLoading: false,
        patientHealthInsurancePieChartinfo: {},
        patientHealthInsurancePieChartisLoading: false,
        patientStressedPieChartinfo: {},
        patientStressedPieChartisLoading: false,
        patientLackOfTransportationsPieChartinfo: {},
        patientLackOfTransportationsPieChartisLoading: false,
        patientExportUserDetailsinfo: {},
        patientExportUserDetailsisLoading: false,
        patientExportTimeSpentOnArticleinfo: {},
        patientExportTimeSpentOnArticleisLoading: false,
        stateinfo: {},
        stateisLoading: false,
        patientZipCodeListinfo: {},
        patientZipCodeListisLoading: false,
        riskSurveyinfo: {},
        riskSurveyisLoading: false,
        timeSpentArticlesinfo: {},
        timeSpentArticleisLoading: false,

    },
    reducers: {
        patientBarAction: (state, { payload }) => {
            state.patientBarChartinfo = payload.response;
            state.patientBarChartisLoading = payload.isLoading;
            state.patientBarChartisSuccess = payload.isSuccess
        },
        patientEnrolledBarAction: (state, { payload }) => {
            state.patientEnrolledBarChartinfo = payload.response;
            state.patientEnrolledBarChartisLoading = payload.isLoading;
        },
        patientAlcoholUsedPieChartAction: (state, { payload }) => {
            state.patientAlcoholUsedPieChartinfo = payload.response;
            state.patientAlcoholUsedPieChartisLoading = payload.isLoading;
        },
        patientEnrolledPieChartAction: (state, { payload }) => {
            state.patientEnrolledPieChartinfo = payload.response;
            state.patientEnrolledPieChartisLoading = payload.isLoading;
        },
        patientSmokeUsedPieChartAction: (state, { payload }) => {
            state.patientSmokeUsedPieChartinfo = payload.response;
            state.patientSmokeUsedPieChartisLoading = payload.isLoading;
        },
        patientAgeDeliveryBarChartAction: (state, { payload }) => {
            state.patientAgeDeliveryBarChartinfo = payload.response;
            state.patientAgeDeliveryBarChartisLoading = payload.isLoading;
        },
        patientAgeGroupDeliveryPieChartAction: (state, { payload }) => {
            state.patientAgeGroupDeliveryPieChartinfo = payload.response;
            state.patientAgeGroupDeliveryPieChartisLoading = payload.isLoading;
        },
        patientHealthInsurancePieChartAction: (state, { payload }) => {
            state.patientHealthInsurancePieChartinfo = payload.response;
            state.patientHealthInsurancePieChartisLoading = payload.isLoading;
        },
        patientStressedPieChartAction: (state, { payload }) => {
            state.patientStressedPieChartinfo = payload.response;
            state.patientStressedPieChartisLoading = payload.isLoading;
        },
        patientLackOfTransportationsPieChartAction: (state, { payload }) => {
            state.patientLackOfTransportationsPieChartinfo = payload.response;
            state.patientLackOfTransportationsPieChartisLoading = payload.isLoading;
        },
        patientExportUserDetailsAction: (state, { payload }) => {
            state.patientExportUserDetailsinfo = payload.response;
            state.patientExportUserDetailsisLoading = payload.isLoading;
        },
        patientExportTimeSpentOnArticleAction: (state, { payload }) => {
            state.patientExportTimeSpentOnArticleinfo = payload.response;
            state.patientExportTimeSpentOnArticleisLoading = payload.isLoading;
        },
        patientstateAction: (state, { payload }) => {
            state.stateinfo = payload.response;
            state.stateisLoading = payload.isLoading;
        },
        patientZipCodeListAction: (state, { payload }) => {
            state.patientZipCodeListinfo = payload.response;
            state.patientZipCodeListisLoading = payload.isLoading;
        },
        riskSurveyAction: (state, { payload }) => {
            state.riskSurveyinfo = payload.response;
            state.riskSurveyisLoading = payload.isLoading;
        },
        timeSpentArticleAction: (state, { payload }) => {
            state.timeSpentArticlesinfo = payload.response;
            state.timeSpentArticleisLoading = payload.isLoading;
        },
    },
});

export const {
    patientBarAction,
    patientEnrolledBarAction,
    patientAlcoholUsedPieChartAction,
    patientEnrolledPieChartAction,
    patientSmokeUsedPieChartAction,
    patientAgeDeliveryBarChartAction,
    patientAgeGroupDeliveryPieChartAction,
    patientHealthInsurancePieChartAction,
    patientStressedPieChartAction,
    patientLackOfTransportationsPieChartAction,
    patientExportUserDetailsAction,
    patientExportTimeSpentOnArticleAction,
    patientstateAction,
    patientZipCodeListAction,
    riskSurveyAction,
    timeSpentArticleAction
} = userSlice.actions;

export const userSelector = (state) => state.user;
const userReducer = userSlice.reducer;
export default userReducer;
