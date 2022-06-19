import React from 'react';
import { useRouter } from 'next/router';
import Navigation from '../../../components/afterlogin/navbar';
import GuideList from '../../../components/afterlogin/guide-list-card';

function SearchUserGuide({ dataGuide }) {
  const router = useRouter();
  return (
    <div className="container mx-auto">
      <Navigation />
      <h2 className="text-center mb-4">Daftar Pemandu Wisata  Cirebon</h2>
      <div className="row">
        {dataGuide.map((guide) => (
          <div className="col-lg-6 col-md-6 col-sm-12" onClick={() => router.push(`/user/search-guide/${guide.id}`)} key={guide.id}>
            <GuideList
              picture="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              namaPemandu={guide.firstName}
              title={guide.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://dummyapi.io/data/v1/user', {
    headers: {
      'Content-Type': 'application/json',
      'app-id': '62aed33d9e68d01b5b186d7f',
    },

  });
  const dataGuide = await res.json();
  return {
    props: {
      dataGuide: dataGuide.data,
    },
  };
}

export default SearchUserGuide;
