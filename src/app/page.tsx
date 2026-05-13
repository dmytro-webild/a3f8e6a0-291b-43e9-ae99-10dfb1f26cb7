"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TeamCardTen from '@/components/sections/team/TeamCardTen';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Scissors } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Team",
          id: "team",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Harun The Barber"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "gradient-bars",
      }}
      title="More than a haircut Your signature look"
      description="Premium barber experience in Limburg Precision fades, perfect beards, and craftsmanship that keeps customers coming back for years—no appointment needed"
      buttons={[
        {
          text: "Walk In Today",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/pretty-barber-girl-cutting-hair_624325-3068.jpg?_wi=1"
      imageAlt="Luxury Barbershop Experience"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-view-man-barbershop_23-2148506245.jpg",
          alt: "Close-up view of man at barbershop",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-view-man-shaving-his-beard_23-2148506246.jpg",
          alt: "Close-up view of man shaving his beard",
        },
        {
          src: "http://img.b2bpic.net/free-photo/mid-section-barber-wiping-clients-face-with-hot-towel_107420-94798.jpg",
          alt: "Mid section on barber wiping clients face with hot towel",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-bearded-man-getting-haircut-by-hairdresser-while-sitting-chair-barbershop-barber-soul_627829-6328.jpg",
          alt: "Young bearded man getting haircut by hairdresser while sitting in chair at barbershop Barber soul",
        },
        {
          src: "http://img.b2bpic.net/free-photo/crop-person-patting-curly-puppy_23-2148144486.jpg",
          alt: "Crop person patting curly puppy",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Precision Fades",
        },
        {
          type: "text",
          text: "Hot Towel Service",
        },
        {
          type: "text",
          text: "Signature Grooming",
        },
        {
          type: "text",
          text: "Walk-In Welcome",
        },
        {
          type: "text",
          text: "Master Barbers",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Story"
      title="Precision Craftsmanship at Heart"
      description="At Harun The Barber, we don't just cut hair; we curate an experience. Since our inception, we have been dedicated to blending old-school traditional grooming techniques with modern style precision."
      subdescription="Every cut is personal, ensuring that our clients walk out not just looking good, but feeling their absolute best. We believe in the power of a signature look."
      icon={Scissors}
      imageSrc="http://img.b2bpic.net/free-photo/poodle-scenes-vanity-setting_23-2151987174.jpg?_wi=1"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSix
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Precision Fades",
          description: "Expertly executed skin fades and tapers using the highest quality tools.",
          imageSrc: "http://img.b2bpic.net/free-photo/hairstyle-supplies_1157-7704.jpg?_wi=1",
        },
        {
          title: "Signature Beards",
          description: "Sculpted beard grooming with hot towels and precision line work.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-beard-after-grooming-close-up_23-2148353466.jpg?_wi=1",
        },
        {
          title: "Walk-In Ready",
          description: "Convenient, consistent service that respects your time and needs.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-men-bachelor-party_23-2149275459.jpg?_wi=1",
        },
      ]}
      title="The Premium Standard"
      description="Experience grooming defined by meticulous attention to detail and consistent, reliable quality."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "cut",
          badge: "Popular",
          price: "€35",
          subtitle: "Precision Cut",
          features: [
            "Consultation",
            "Detailed Cut",
            "Style Finish",
          ],
        },
        {
          id: "beard",
          badge: "Add-on",
          price: "€25",
          subtitle: "Beard Sculpt",
          features: [
            "Hot Towel",
            "Edge Sculpting",
            "Conditioning",
          ],
        },
        {
          id: "combo",
          badge: "Best Value",
          price: "€55",
          subtitle: "The Full Treatment",
          features: [
            "Precision Cut",
            "Beard Sculpt",
            "Styling Advice",
          ],
        },
      ]}
      title="Grooming Investment"
      description="Transparent pricing for high-value results."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTen
      useInvertedBackground={false}
      title="The Master Barbers"
      tag="Meet The Crew"
      membersAnimation="slide-up"
      members={[
        {
          id: "1",
          name: "Harun",
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-ginger-beard-apron-gloves-holding-knife_273609-20983.jpg",
        },
        {
          id: "2",
          name: "Mehmet",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-stylish-male-who-himself-shaving-while-sitting-barber-chair-hairdressing-salon_613910-18649.jpg",
        },
        {
          id: "3",
          name: "Elias",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-pensive-man-with-receive-moustache-beard-trimming-procedure-barbershop_613910-15033.jpg",
        },
        {
          id: "4",
          name: "Kenan",
          imageSrc: "http://img.b2bpic.net/free-photo/pleased-slavic-middle-aged-male-barber-uniform-holding-barber-tools-isolated-purple-wall_141793-91610.jpg",
        },
      ]}
      memberVariant="card"
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Markus",
          date: "Jan 2025",
          title: "Professional",
          quote: "Reliable precision every time. I finally stopped searching for a good barber.",
          tag: "Regular",
          avatarSrc: "http://img.b2bpic.net/free-photo/i-owe-my-appearance-daily-hygiene_329181-4760.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-barber-girl-cutting-hair_624325-3068.jpg?_wi=2",
          imageAlt: "satisfied customer haircut",
        },
        {
          id: "2",
          name: "Lukas",
          date: "Dec 2024",
          title: "Creative",
          quote: "The atmosphere is great and the cuts are sharp. Best fade in Limburg.",
          tag: "Regular",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-sexy-handsome-fashion-male-model-man-dressed-elegant-suit-black-studio-lights-background_158538-9659.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/poodle-scenes-vanity-setting_23-2151987174.jpg?_wi=2",
          imageAlt: "satisfied customer haircut",
        },
        {
          id: "3",
          name: "David",
          date: "Nov 2024",
          title: "Father",
          quote: "Friendly with my kids, stress-free environment. Highly recommended for families.",
          tag: "Father",
          avatarSrc: "http://img.b2bpic.net/free-photo/hairdresser-straighten-beard-with-razor-hairbrush-senior-client_23-2148181919.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/hairstyle-supplies_1157-7704.jpg?_wi=2",
          imageAlt: "satisfied customer haircut",
        },
        {
          id: "4",
          name: "Peter",
          date: "Oct 2024",
          title: "Business Owner",
          quote: "Craftsmanship at its best. Honest service and always consistent.",
          tag: "Loyal",
          avatarSrc: "http://img.b2bpic.net/free-photo/handsome-fashion-businessman-model-dressed-elegant-blue-suit-posing-street_158538-14362.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/man-beard-after-grooming-close-up_23-2148353466.jpg?_wi=2",
          imageAlt: "satisfied customer haircut",
        },
        {
          id: "5",
          name: "Thomas",
          date: "Sep 2024",
          title: "Professional",
          quote: "No waiting, no friction. Just a damn good haircut every time.",
          tag: "Regular",
          avatarSrc: "http://img.b2bpic.net/free-photo/side-view-senior-man-laughing_23-2151203948.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-men-bachelor-party_23-2149275459.jpg?_wi=2",
          imageAlt: "satisfied customer haircut",
        },
      ]}
      title="Words From Our Regulars"
      description="The foundation of our reputation is your consistent satisfaction."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Do I need an appointment?",
          content: "We operate primarily on a walk-in basis, so you can drop by anytime.",
        },
        {
          id: "2",
          title: "What services do you offer?",
          content: "We specialize in precision cuts, beard shaping, and hot towel treatments.",
        },
        {
          id: "3",
          title: "Are children welcome?",
          content: "Absolutely, we love having families in the shop and offer gentle cuts for kids.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Everything you need to know about your visit."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Visit Us Today"
      description="Stop by our shop for your signature look. No appointment needed."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Your Phone (Optional)",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/mustache-guy-barbershop_140725-7723.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Menu",
          items: [
            {
              label: "Services",
              href: "#features",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
            {
              label: "Team",
              href: "#team",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Location",
              href: "#contact",
            },
            {
              label: "Walk-In",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Harun The Barber"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
