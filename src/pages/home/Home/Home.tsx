import TopFive from '../../TopFive/TopFive';

import HowWork from '../About/HowWork';
import Success from '../About/Success';
// import WhyUs from "../About/WhyUs";
import WhyUsNew from '../About/WhyUs/WhyUsNew';

import ContactCard from '../Contact/ContactCard';
import Faq from '../Faq/Faq';
import HeroSection from '../HeroSection/HeroSection';
import Mediator from '../Mediator/Mediator';

const Home = () => {
  return (
    <div>
      <HeroSection />

      <Mediator />
      <HowWork />
      <TopFive />
      <Success />
      {/* <WhyUs /> */}

      <WhyUsNew />
      <Faq />
      <ContactCard />
    </div>
  );
};

export default Home;
