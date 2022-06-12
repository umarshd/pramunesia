import React from 'react';
import { useRouter } from 'next/router';
import GuideList from '../../components/afterlogin/guide-list-card';
import Navigation from '../../components/afterlogin/navbar';

function SearchUserGuide({ dataGuide }) {
  const router = useRouter();
  return (
    <div className="container mx-auto">
      <Navigation />
      <h2 className="text-center mb-4">Daftar Pemandu Wisata  Cirebon</h2>
      <div className="row">
        {dataGuide.map((guide) => (
          <div className="col-lg-6 col-md-6 col-sm-12" onClick={() => router.push(`/search-guide-user/${guide.id}`)} key={guide.id}>
            <GuideList
              namaPemandu={guide.name}
              rating={guide.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataGuide = await res.json();
  return {
    props: {
      dataGuide,
    },
  };
}

export default SearchUserGuide;
