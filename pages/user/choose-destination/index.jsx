import React from "react";
import sessionUserLogin from "../../auth/sessionUserLogin";
import Jumbotron from "../../../components/afterlogin/jumbotron";
import Layout from "../../../components/afterlogin/layout";

export default function index() {
  sessionUserLogin();
  return (
    <>
      <Layout pageTitle="Welcome">
        <div className="" style={{ height: "56vh !important" }}>
          <Jumbotron />
        </div>
      </Layout>
    </>
  );
}
