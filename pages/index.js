import dynamic from "next/dynamic";
import Head from "next/head";
import { CommentSection } from "../src/components/comment";
import { DrawSection } from "../src/components/draw";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { HeroSection } from "../src/components/hero";
import { ProjectSection } from "../src/components/project";

// dynamic import Memory Section
const DynamicMemorySection = dynamic(() => import("../src/components/memory"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="flex flex-col gap-40">
        <Header />
        <HeroSection />
        <ProjectSection />
        <DynamicMemorySection />
        <DrawSection />
        <CommentSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
