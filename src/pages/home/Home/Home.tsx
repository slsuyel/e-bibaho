import TopFive from "../../TopFive/TopFive";

import HowWork from "../About/HowWork";
import Success from "../About/Success";
import WhyUs from "../About/WhyUs";

import ContactCard from "../Contact/ContactCard";
import Faq from "../Faq/Faq";
import HeroSection from "../HeroSection/HeroSection";
import Mediator from "../Mediator/Mediator";

const Home = () => {
  return (
    <div>
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
