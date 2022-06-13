import React from 'react';
import Jumbotron from '../../components/afterlogin/jumbotron';
import Layout from '../../components/afterlogin/layout';
import sessionUserLogin from '../auth/sessionUserLogin';

function UserChoosePage() {
  sessionUserLogin();
  return (
    <Layout pageTitle="Welcome">
      <div className="" style={{ height: '56vh !important' }}>
        <Jumbotron />
      </div>
    </Layout>
  );
}

export default UserChoosePage;
