import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCard from "@/components/TestimonialCard";
import Image from "next/image";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between overflow-hidden">
      <HeroSection />
      <FeaturedCourses/>
      <WhyChooseUs />
      <TestimonialCard/>
      <UpcomingWebinar/>
      <Instructors />
      <Footer/>
    </main>
  );
}
