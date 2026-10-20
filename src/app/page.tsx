import { Announcement } from "@/components/sections/Announcement";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Band } from "@/components/sections/Band";
import { Intro } from "@/components/sections/Intro";
import { Programs } from "@/components/sections/Programs";
import { Facilities } from "@/components/sections/Facilities";
import { Schedule } from "@/components/sections/Schedule";
import { Coaches } from "@/components/sections/Coaches";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Trial } from "@/components/sections/Trial";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Announcement />
      <Header />
      <main>
        <Hero />
        <Band />
        <Intro />
        <Programs />
        <Facilities />
        <Schedule />
        <Coaches />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Trial />
      </main>
      <Footer />
    </>
  );
}
