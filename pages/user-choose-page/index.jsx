import React from 'react';
import Jumbotron from '../../components/afterlogin/jumbotron';
import Layout from '../../components/afterlogin/layout';

function UserChoosePage() {
  return (
    <Layout pageTitle="Home">
      <div className="" style={{ height: '56vh !important' }}>
        <Jumbotron />
      </div>
    </Layout>
  );
}

export default UserChoosePage;
