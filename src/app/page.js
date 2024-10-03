import Image from "next/image";
import Banner from "../../components/Banner";
import GeneralService from "../../components/GeneralService";
import WhyChooseUs from "../../components/WhyChooseUs";
import HelpDeskBanner from "../../components/HelpDeskBanner";
import BlogSection from "../../components/BlogSection";
import GovernmentAgenciesSection from "../../components/GovernmentAgenciesSection";
import TestimonialSection from "../../components/TestimonialSection";
import ContactSection from "../../components/ContactSection";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <GeneralService></GeneralService>
      <WhyChooseUs></WhyChooseUs>
      <HelpDeskBanner></HelpDeskBanner>
      <BlogSection></BlogSection>
      <GovernmentAgenciesSection></GovernmentAgenciesSection>
      <TestimonialSection></TestimonialSection>
      <ContactSection></ContactSection>
    </>
  );
}
