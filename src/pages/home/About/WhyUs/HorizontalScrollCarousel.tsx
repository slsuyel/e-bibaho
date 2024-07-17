import diverse_member from '../../../../assets/whyus/diverse_member Base.gif';
import personalized from '../../../../assets/whyus/personalized-matching.gif';
import privacy from '../../../../assets/whyus/privacy-and-security.gif';
import friendly from '../../../../assets/whyus/user-friendly-interface.gif';
import verified from '../../../../assets/whyus/verified-profiles.gif';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Card from './Card';
import useIsMobile from '../../../../hooks/useIsMobile';

const data = [
  {
    title: 'Personalized Matching',
    description:
      'At Ebibah , we understand that finding the right partner is about unique compatibility. Our platform uses advanced algorithms and personalized questionnaires to match you with individuals who share your values, interests, and life goals, ensuring a higher chance of meaningful connections.',
    img: personalized,
  },
  {
    title: 'Verified Profiles',
    description:
      'We prioritize your safety and trust. Each profile on Ebibah  undergoes a stringent verification process, including ID checks and personal interviews, to ensure that all members are genuine and serious about marriage.',
    img: verified,
  },
  {
    title: 'Privacy and Security',
    description:
      'Your privacy is paramount. Ebibah  employs state-of-the-art security measures to protect your personal information and communication. Our privacy options allow you to control who sees your information and how they interact with you, giving you peace of mind.',
    img: privacy,
  },
  {
    title: 'User-Friendly Interface',
    description:
      "Whether you're tech-savvy or not, our platform is designed for ease of use. The intuitive design and straightforward navigation of Ebibah  make your search for a life partner a hassle-free experience, accessible on both desktop and mobile devices.",
    img: friendly,
  },
  {
    title: 'Diverse Member Base',
    description:
      'Diversity is our strength. Ebibah  hosts a wide array of profiles from different cultural, religious, and professional backgrounds, enriching your options and increasing the likelihood of finding someone who truly suits your personal preferences.',
    img: diverse_member,
  },
];

const HorizontalScrollCarousel = () => {
  const isMobile = useIsMobile();

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-395%']);

  return (
    <>
      {isMobile ? (
        <div className="stack">
          {data.map(data => {
            return <Card data={data} key={data.title} />;
          })}
        </div>
      ) : (
        <section ref={targetRef} className="HorizontalScrollCarousel">
          <div className="sticky_horizontal">
            <motion.div style={{ x }} className="d-flex gap-5">
              {data.map(data => {
                return <Card data={data} key={data.title} />;
              })}
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
};
export default HorizontalScrollCarousel;
