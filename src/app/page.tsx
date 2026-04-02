import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ActivitiesSection from "@/components/home/Activities";
import BookingSection from "@/components/home/Booking";
import ContactSection from "@/components/home/ContactCTA";
import GallerySection from "@/components/home/GalleryPreview";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/Intro";
import TestimonialsSection from "@/components/home/Testimonials";



export default function HomePage() {
  return (
    <div className="relative">
      <Navbar />
      <main >
        <Hero />
        <AboutSection />
        <ActivitiesSection />
        <GallerySection />
        <BookingSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
