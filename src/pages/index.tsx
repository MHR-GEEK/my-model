import type { NextPage } from "next";
import { Layout } from "@/components/Layout";
import { PhotoGrid } from "@/components/PhotoGrid";

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="mb-12 text-center">
        <p className="text-lg text-gray-300">
          Welcome! I’m a fashion model showcasing my latest digital looks.
        </p>
      </section>

      <PhotoGrid />
    </Layout>
  );
};

export default Home;
