import React from 'react'
import Banner2 from '../../../components/Banner2';
import AboutUsSection from '../../../components/AboutUsSection';




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
    <div>

      <>
      <Banner2
      banner_title="About Us"
      description="Leverage our expertise to navigate complexities, optimize operations, and achieve sustainable growth."
      button_text="Get Started"
      button_link="/"
      ></Banner2>
      <AboutUsSection/>
     
      </>

    </div>
  )
}

export default page