import { Header } from "../src/components/Header";
import { HeroSection } from "../src/components/hero";
import { ProjectSection } from "../src/components/project/Project";
import { MemorySection } from "../src/components/memory";
import { CommentSection } from "../src/components/comment";
import { Footer } from "../src/components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectSection />
      <MemorySection />
      <CommentSection />
      <Footer />
    </div>
  );
};

export default Home;
