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
          name: "Over ons",          id: "about"},
        {
          name: "Diensten",          id: "features"},
        {
          name: "Prijzen",          id: "pricing"},
        {
          name: "Team",          id: "team"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Harun The Barber"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "gradient-bars"}}
      title="Meer dan alleen een knipbeurt, jouw kenmerkende look"
      description="Premium kapperservaring in Limburg. Precisie fades, perfecte baarden en vakmanschap waar klanten jarenlang voor terugkomen—zonder afspraak."
      buttons={[
        {
          text: "Kom vandaag nog langs",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-bearded-man-getting-haircut-by-hairdresser-while-sitting-chair-barbershop-barber-soul_627829-6328.jpg"
      imageAlt="Luxe kapperservaring"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-view-man-barbershop_23-2148506245.jpg",          alt: "Close-up view of man at barbershop"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-view-man-shaving-his-beard_23-2148506246.jpg",          alt: "Close-up view of man shaving his beard"},
        {
          src: "http://img.b2bpic.net/free-photo/mid-section-barber-wiping-clients-face-with-hot-towel_107420-94798.jpg",          alt: "Mid section on barber wiping clients face with hot towel"},
        {
          src: "http://img.b2bpic.net/free-photo/young-bearded-man-getting-haircut-by-hairdresser-while-sitting-chair-barbershop-barber-soul_627829-6328.jpg",          alt: "Young bearded man getting haircut by hairdresser while sitting in chair at barbershop Barber soul"},
      ]}
      marqueeItems={[
        {
          type: "text",          text: "Precisie Fades"},
        {
          type: "text",          text: "Hot Towel Service"},
        {
          type: "text",          text: "Signature Grooming"},
        {
          type: "text",          text: "Loop zo binnen"},
        {
          type: "text",          text: "Meester Barbers"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Ons Verhaal"
      title="Vakmanschap met passie"
      description="Bij Harun The Barber knippen we niet alleen haar; we creëren een ervaring. Sinds het begin zijn we toegewijd aan het combineren van traditionele kniptechnieken met moderne precisie."
      subdescription="Elke knipbeurt is persoonlijk, zodat onze klanten niet alleen goed uitzien, maar zich ook op hun best voelen. Wij geloven in de kracht van een signature look."
      icon={Scissors}
      mediaAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/man-beard-after-grooming-close-up_23-2148353466.jpg"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSix
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Precisie Fades",          description: "Expertly uitgevoerde skin fades en tapers met hoogwaardig gereedschap.",          imageSrc: "http://img.b2bpic.net/free-photo/hairstyle-supplies_1157-7704.jpg?_wi=1"},
        {
          title: "Signature Baarden",          description: "Gevormde baardverzorging met hot towels en strakke lijnen.",          imageSrc: "http://img.b2bpic.net/free-photo/man-beard-after-grooming-close-up_23-2148353466.jpg?_wi=1"},
        {
          title: "Loop zo binnen",          description: "Handige, consistente service die uw tijd respecteert.",          imageSrc: "http://img.b2bpic.net/free-photo/happy-men-bachelor-party_23-2149275459.jpg?_wi=1"},
      ]}
      title="De Premium Standaard"
      description="Ervaar verzorging gedefinieerd door nauwkeurige details en consistente kwaliteit."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "cut",          badge: "Populair",          price: "€35",          subtitle: "Precisie Knippen",          features: [
            "Consultatie",            "Gedetailleerde Knipbeurt",            "Styling Finish"],
        },
        {
          id: "beard",          badge: "Extra",          price: "€25",          subtitle: "Baard Styling",          features: [
            "Hot Towel",            "Strakke Lijnen",            "Conditioning"],
        },
        {
          id: "combo",          badge: "Beste Waarde",          price: "€55",          subtitle: "De Volledige Behandeling",          features: [
            "Precisie Knipbeurt",            "Baard Styling",            "Styling Advies"],
        },
      ]}
      title="Investering in jezelf"
      description="Transparante prijzen voor een hoogwaardig resultaat."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTen
      useInvertedBackground={false}
      title="De Meester Barbers"
      tag="Ontmoet het team"
      membersAnimation="slide-up"
      members={[
        {
          id: "1",          name: "Harun",          imageSrc: "https://img.freepik.com/free-photo/portrait-barber-smiling-looking-camera_23-2148506245.jpg"},
        {
          id: "2",          name: "Mehmet",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-stylish-male-who-himself-shaving-while-sitting-barber-chair-hairdressing-salon_613910-18649.jpg"},
        {
          id: "3",          name: "Elias",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-with-no-tattoos-trimming-beard-barbershop_613910-15033.jpg"},
        {
          id: "4",          name: "Kenan",          imageSrc: "http://img.b2bpic.net/free-photo/pleased-slavic-middle-aged-male-barber-uniform-holding-barber-tools-isolated-purple-wall_141793-91610.jpg"},
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
          id: "1",          name: "Markus",          date: "Jan 2025",          title: "Professional",          quote: "Altijd consistente precisie. Ik ben eindelijk klaar met zoeken naar een goede kapper.",          tag: "Regelmatig",          avatarSrc: "http://img.b2bpic.net/free-photo/i-owe-my-appearance-daily-hygiene_329181-4760.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/hairstyle-supplies_1157-7704.jpg?_wi=2",          imageAlt: "tevreden klant"},
        {
          id: "2",          name: "Lukas",          date: "Dec 2024",          title: "Creatief",          quote: "De sfeer is geweldig en de coupes zijn strak. De beste fade in Limburg.",          tag: "Regelmatig",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-sexy-handsome-fashion-male-model-man-dressed-elegant-suit-black-studio-lights-background_158538-9659.jpg"},
        {
          id: "3",          name: "David",          date: "Nov 2024",          title: "Vader",          quote: "Vriendelijk voor mijn kinderen, stressvrije omgeving. Een aanrader voor gezinnen.",          tag: "Vader",          avatarSrc: "http://img.b2bpic.net/free-photo/hairdresser-straighten-beard-with-razor-hairbrush-senior-client_23-2148181919.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/hairstyle-supplies_1157-7704.jpg?_wi=2",          imageAlt: "tevreden klant"},
        {
          id: "4",          name: "Peter",          date: "Oct 2024",          title: "Ondernemer",          quote: "Vakmanschap op zijn best. Eerlijke service en altijd constant.",          tag: "Loyal",          avatarSrc: "http://img.b2bpic.net/free-photo/handsome-fashion-businessman-model-dressed-elegant-blue-suit-posing-street_158538-14362.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/man-beard-after-grooming-close-up_23-2148353466.jpg?_wi=2",          imageAlt: "tevreden klant"},
        {
          id: "5",          name: "Thomas",          date: "Sep 2024",          title: "Professional",          quote: "Niet wachten, geen gedoe. Gewoon een strakke coupe elke keer weer.",          tag: "Regelmatig",          avatarSrc: "http://img.b2bpic.net/free-photo/side-view-senior-man-laughing_23-2151203948.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/happy-men-bachelor-party_23-2149275459.jpg?_wi=2",          imageAlt: "tevreden klant"},
      ]}
      title="Woorden van onze klanten"
      description="De basis van onze reputatie is jouw constante tevredenheid."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "Moet ik een afspraak maken?",          content: "Wij werken voornamelijk op basis van inloop, dus je kunt altijd langskomen."},
        {
          id: "2",          title: "Wat zijn jullie openingstijden?",          content: "Maandag: gesloten, Dinsdag t/m Donderdag: 10:00-18:30, Vrijdag: 09:00-14:00 & 15:00-18:30, Zaterdag: 09:00-18:30, Zondag: 10:00-15:00"},
        {
          id: "3",          title: "Welke diensten bieden jullie aan?",          content: "Wij zijn gespecialiseerd in precisie knippen, baard verzorging en hot towel behandelingen."},
        {
          id: "4",          title: "Zijn kinderen welkom?",          content: "Absoluut, wij verwelkomen families graag in de shop en bieden rustige knipbeurten voor kinderen."},
      ]}
      title="Veelgestelde vragen"
      description="Alles wat je moet weten over je bezoek."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Bezoek ons vandaag"
      description="Kom langs in onze shop voor je kenmerkende look. Geen afspraak nodig. The Barber, Schuurhoven 3, 3740."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Jouw Naam"},
        {
          name: "phone",          type: "tel",          placeholder: "Jouw Telefoonnummer (Optioneel)"},
      ]}
      buttonText="Verstuur"
      imageSrc="http://img.b2bpic.net/free-photo/mustache-guy-barbershop_140725-7723.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Menu",          items: [
            {
              label: "Diensten",              href: "#features"},
            {
              label: "Prijzen",              href: "#pricing"},
            {
              label: "Team",              href: "#team"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "Locatie",              href: "#contact"},
            {
              label: "Inloop",              href: "#"},
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
