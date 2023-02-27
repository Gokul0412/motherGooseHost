import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BadgeIcon from "@mui/icons-material/Badge";
import Navbar from "./Navbar";
import { Bargraph } from "./bargraph";
import PieChart from "./PieChart";




const Formtype = () => {
  const [startdate, setStartDate] = React.useState(null);
  const [enddate, setEndDate] = React.useState(null);
  return (
    <>
      <Navbar />
      <div>
        <div className="bg-img">
       
          <div className="col-lg-5 col-md-8 col-xs-12 divcenter">
            
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
                  <Stack direction="row" spacing={4}>
                    <DatePicker
                      label="From Date"
                      value={startdate}
                      onChange={(newValue) => {
                        setStartDate(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          // InputProps={{
                          //   endAdornment: <CalendarMonthIcon />,
                          // }}
                          className="datePick"
                        />
                      )}
                    />
                    <DatePicker
                      label="To Date"
                      value={enddate}
                      className="datePick"
                      onChange={(newValue) => {
                        setEndDate(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          // InputProps={{
                          //   endAdornment: <CalendarMonthIcon />,
                          // }}
                        />
                      )}
                    />
                  </Stack>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 1, sm: 2, md: 6 }}
                    sx={{ marginTop: "20px", width: "100%" }}
                  >
                    <TextField
                      id="outlined-basic"
                      label="MG Patient Id"
                      variant="outlined"
                      InputProps={{
                        endAdornment: <BadgeIcon />,
                      }}
                      sx={{ width: "100%" }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Provider"
                      variant="outlined"
                      InputProps={{
                        endAdornment: <PersonIcon />,
                      }}
                      sx={{ width: "100%" }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Enter You ZIP code"
                      variant="outlined"
                      InputProps={{
                        endAdornment: <LocationOnIcon />,
                      }}
                      sx={{ width: "100%" }}
                    />
                  </Stack>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 1, sm: 2, md: 6 }}
                    sx={{ marginTop: "20px", width: "100%" }}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Insurance Payer"
                      variant="outlined"
                      InputProps={{
                        endAdornment: <PersonIcon />,
                      }}
                      sx={{ width: "100%" }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="State"
                      variant="outlined"
                      InputProps={{
                        endAdornment: <LocationOnIcon />,
                      }}
                      sx={{ width: "100%" }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Mode of Delivery"
                      variant="outlined"
                      select
                      sx={{ width: "100%" }}
                    />
                  </Stack>
                  <div class="col-sm-4 col-md-4" style={{ margin: "auto" }}>
                    <a class="dedcription-btn" href="#">
                      <span class="name-descripeion">Find</span>
                      <div class="btn-icon">
                        <i class="fa-solid fa-magnifying-glass-arrow-right"></i>{" "}
                      </div>
                    </a>
                  </div>
                </LocalizationProvider>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <br />
      <br />
      <div className="row" style={{ width: "100%" }}>
        <div className="col-lg-6">
          <div className="card">
            <PieChart />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <PieChart />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="row" style={{ width: "100%" }}>
        <div className="col-lg-6">
          <div className="card">
            <PieChart />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <PieChart />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="row" style={{ width: "100%" }}>
        <div className="col-lg-6">
          <div className="card">
            <Bargraph />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <Bargraph />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="row" style={{ width: "100%" }}>
        <div className="col-lg-6">
          <div className="card">
            <PieChart />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <PieChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Formtype;
