import Hero from '../components/hero';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <div className="" style={{ height: '56vh !important' }}>
        <Hero />
      </div>
    </Layout>
  );
}
