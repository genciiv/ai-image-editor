import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import CTAFooter from "@/components/CTAFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Reviews />
        <CTAFooter />
      </main>
    </>
  );
}