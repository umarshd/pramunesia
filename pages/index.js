import Hero from '../components/hero';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <div className="vh-100">
        <Hero />
      </div>
    </Layout>
  );
}
