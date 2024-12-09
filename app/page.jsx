import Navbar from "@/components/layout/navbar";
import Jumbotron from "@/components/layout/jumbotron";
import FeatureList from "@/components/layout/feature-list";
import FeaturedProjects from "@/components/layout/featured-projects";
import Skills from "@/components/layout/skills";
import FAQ from "@/components/layout/faq";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Jumbotron/>
      <FeatureList/>
      <FeaturedProjects/>
      <Skills/>
      <FAQ/>
      <Footer/>
    </div>
  );
}