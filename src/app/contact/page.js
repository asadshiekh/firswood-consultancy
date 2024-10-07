import React from 'react'
import Banner2 from '../../../components/Banner2';
import ContactSection from '../../../components/ContactSection';





export const metadata = {
  title: "About Us",
  description: "Learn more about our company and values.",
  keywords: "about us, company, business, values, mission",
  alternates: {
    canonical: "http://localhost:3000/about", // Update the URL to match your live URL when deployed
  },
  robots: {
    index: true, // Allow indexing of the page
    follow: true, // Allow search engines to follow the links on this page
  },
};

function page() {
  return (

    <>
    <Banner2
    banner_title="Get in Touch with Us"
    description="Whether you have questions, need assistance, or want to discuss your project, our team is ready to listen."
    button_text="Get Started"
    button_link="/"
    ></Banner2>
    <ContactSection></ContactSection>
   
    </>


  )
}

export default page