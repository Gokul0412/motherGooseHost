import { Button } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function NetworkIssue() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>404 ERROR !!! </title>
      </Head>
           <div className="centeredd">
        <section className="page_404">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 ">
                <div className="col-sm-10 col-sm-offset-1  text-center">
                  <div className="four_zero_four_bg">
                    <h1 className="text-center ">404</h1>
                  </div>
                  <div className="contant_box_404">
                    <h3 className="h2">Look like youre lost</h3>
                    <p>the page you are looking for not avaible!</p>
                    <Button
                      sx={{ padding: "10px 20px" }}
                      onClick={() => router.back()}
                      variant="contained"
                      className="link_404"
                    >
                      REFRESH
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default NetworkIssue;
