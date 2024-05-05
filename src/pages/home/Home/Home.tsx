import HowWork from "../About/HowWork";
import SuccessStory from "../About/SuccessStory";
import BannerSlider from "../BannerSlider/BannerSlider";
import ContactCard from "../Contact/ContactCard";
import Faq from "../Faq/Faq";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <HeroSection />
      <HowWork />
      <SuccessStory />
      <Faq />
      <ContactCard />
    </div>
  );
};

export default Home;
