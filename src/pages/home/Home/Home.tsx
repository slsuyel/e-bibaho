import HowWork from "../About/HowWork";
import SuccessStory from "../About/SuccessStory";
import ContactCard from "../Contact/ContactCard";
import Faq from "../Faq/Faq";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HowWork />
      <SuccessStory />
      <Faq />
      <ContactCard />
    </div>
  );
};

export default Home;
