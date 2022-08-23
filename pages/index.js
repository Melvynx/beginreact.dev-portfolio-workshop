import dynamic from "next/dynamic";
import { Header } from "../src/components/Header";
import { HeroSection } from "../src/components/hero";
import { ProjectSection } from "../src/components/project";
import { CommentSection } from "../src/components/comment";
import { Footer } from "../src/components/Footer";

// dynamic import Memory Section
const DynamicMemorySection = dynamic(() => import("../src/components/memory"), {
  ssr: false,
});

const Home = () => {
  return (
    <div className="flex gap-40 flex-col">
      <Header />
      <HeroSection />
      <ProjectSection />
      <DynamicMemorySection />
      <CommentSection />
      <Footer />
    </div>
  );
};

export default Home;
