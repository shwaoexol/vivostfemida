import About from "@/components/About";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";





export default function Home() {
  return (
    <>
      <Navbar/>
      <Main/>
      <About/>
      <WhyUs/>
      <Services/>
      <Footer/>
    </>
  );
}
