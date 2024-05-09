import TopFive from "../../TopFive/TopFive";

import HowWork from "../About/HowWork";
import Success from "../About/Success";
import WhyUs from "../About/WhyUs";

import BannerSlider from "../BannerSlider/BannerSlider";
import ContactCard from "../Contact/ContactCard";
import Faq from "../Faq/Faq";
import HeroSection from "../HeroSection/HeroSection";
import Mediator from "../Mediator/Mediator";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <HeroSection />
      <Mediator />
      <HowWork />
      <TopFive />
      <Success />
      <WhyUs />
      <Faq />
      <ContactCard />
    </div>
  );
};

export default Home;
