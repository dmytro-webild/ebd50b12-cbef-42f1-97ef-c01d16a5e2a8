"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Award, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="largeSmallSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "How It Works",          id: "#how-it-works"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Portfolio",          id: "#portfolio"},
        {
          name: "About",          id: "#about"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="FNZ Marketing"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "plain"}}
      imagePosition="right"
      title="Premium Websites for Local Businesses"
      description="Elevate your online presence with custom-built designs meticulously tailored to reflect your unique brand and achieve your specific business goals."
      buttons={[
        {
          text: "Schedule a Consultation",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/cyber-intelligence-secure-operations-center-with-usa-flag-big-screen_482257-105777.jpg"
      imageAlt="Sleek desktop and tablet showcasing a premium website design"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/female-employee-black-suit-looks-regretful_114579-15074.jpg",          alt: "Professional avatar of a confident business leader"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-businesswoman-posing-with-coffee_23-2148452691.jpg",          alt: "Professional avatar of a friendly entrepreneur"},
        {
          src: "http://img.b2bpic.net/free-photo/attractive-blond-business-woman-white-shirt-grey-background_613910-13721.jpg",          alt: "Professional avatar of a thoughtful strategist"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-cheerful-woman-dark-sweater-standing-near-lamps_114579-81909.jpg",          alt: "Professional avatar of an innovative product specialist"},
        {
          src: "http://img.b2bpic.net/free-photo/woman-working-late-office_23-2148991378.jpg",          alt: "Professional avatar of a visionary startup founder"},
      ]}
      avatarText="Trusted by over 100 local businesses"
      marqueeItems={[
        {
          type: "text",          text: "Custom Web Design"},
        {
          type: "text",          text: "SEO Optimization"},
        {
          type: "text",          text: "Brand Elevation"},
        {
          type: "text",          text: "Digital Strategy"},
        {
          type: "text",          text: "Conversion Focused"},
      ]}
      showMarqueeCard={true}
    />
  </div>

  <div id="intro" data-section="intro">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Philosophy"
      title="Uncompromising Quality, Exceptional Results"
      description="At FNZ Marketing, we don't just build websites; we craft digital experiences designed to convert. Our commitment to excellence ensures every pixel and every line of code serves your business's success."
      subdescription="We blend modern aesthetics with robust functionality, creating a powerful online presence that truly sets local businesses apart."
      icon={Sparkles}
      imageSrc="http://img.b2bpic.net/free-vector/construction-web-template-flat-style_23-2147771972.jpg"
      imageAlt="Abstract representation of quality standards with golden geometric lines"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="how-it-works" data-section="how-it-works">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Reach Out",          description: "Tell us about your business and your vision, and we'll begin to understand your unique needs.",          imageSrc: "http://img.b2bpic.net/free-photo/serious-man-calling-phone-working-laptop_1262-1086.jpg",          imageAlt: "Hand typing on a laptop"},
        {
          title: "We Design",          description: "We build a custom site meticulously tailored to your brand, goals, and target audience.",          imageSrc: "http://img.b2bpic.net/free-photo/female-web-designer-with-papers-notes-office_23-2149749912.jpg",          imageAlt: "Designer working on a website mockup"},
        {
          title: "Review & Refine",          description: "We collaborate closely, adjusting the design and functionality until you are fully satisfied.",          imageSrc: "http://img.b2bpic.net/free-photo/diverse-business-colleagues-shoot_53876-16090.jpg",          imageAlt: "Professionals reviewing website design"},
        {
          title: "Sign & Secure",          description: "Once approved, simply sign the agreement and complete the payment to finalize your project.",          imageSrc: "http://img.b2bpic.net/free-photo/businessman-using-digital-tablet-while-sitting-airport-terminal_107420-85113.jpg",          imageAlt: "Hand signing a digital contract"},
        {
          title: "It's Yours",          description: "Full ownership of your premium website and domain is seamlessly transferred to you.",          imageSrc: "http://img.b2bpic.net/free-photo/young-delivery-woman-using-mobile-phone-while-going-through-dispatch-list-office_637285-6319.jpg",          imageAlt: "Hand presenting a finished website on a tablet"},
      ]}
      title="Our Streamlined Process"
      description="Experience a seamless journey from concept to launch with our client-centric approach, ensuring transparency and satisfaction at every stage."
      tag="How It Works"
    />
  </div>

  <div id="services" data-section="services">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",          badge: "Basic",          badgeIcon: Sparkles,
          price: "Starting at $1,500",          subtitle: "Essential Online Presence",          buttons: [
            {
              text: "Get Started",              href: "#contact"},
          ],
          features: [
            "1-Page Custom Website",            "Responsive Design",            "Basic SEO Setup",            "Contact Form Integration",            "Content Upload"],
        },
        {
          id: "standard",          badge: "Standard",          badgeIcon: Star,
          price: "Starting at $3,500",          subtitle: "Expanded Digital Footprint",          buttons: [
            {
              text: "Get Started",              href: "#contact"},
          ],
          features: [
            "3-5 Page Custom Website",            "Advanced SEO Optimization",            "Mobile-First Design",            "Blog/News Section",            "Social Media Integration"],
        },
        {
          id: "premium",          badge: "Premium",          badgeIcon: Award,
          price: "Starting at $7,000",          subtitle: "Full-Service Digital Solution",          buttons: [
            {
              text: "Get Started",              href: "#contact"},
          ],
          features: [
            "Full Custom Website (6+ pages)",            "E-commerce Functionality (optional)",            "Hosting & Domain Setup",            "Ongoing Support & Maintenance",            "Advanced Analytics Integration"],
        },
      ]}
      title="Flexible Investment, Tailored Solutions"
      description="Choose from our meticulously crafted packages, each designed to deliver maximum value and a compelling online presence for your local business."
      tag="Services & Investment"
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          name: "Local Cafe Redesign",          price: "Completed 2023",          imageSrc: "http://img.b2bpic.net/free-photo/nutritional-counter-app-concept_23-2149880618.jpg",          imageAlt: "Website mockup for a local cafe"},
        {
          id: "p2",          name: "Boutique Fashion E-commerce",          price: "Completed 2024",          imageSrc: "http://img.b2bpic.net/free-photo/brunette-woman-with-tablet-shopping-bags_23-2148316488.jpg",          imageAlt: "Website mockup for a boutique fashion store"},
        {
          id: "p3",          name: "Real Estate Agency Site",          price: "Completed 2023",          imageSrc: "http://img.b2bpic.net/free-photo/device-with-copy-space-table-with-food_23-2150917857.jpg",          imageAlt: "Website mockup for a real estate agency"},
        {
          id: "p4",          name: "Spa & Wellness Platform",          price: "Completed 2024",          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-bath-concept-accessories_23-2148419369.jpg",          imageAlt: "Website mockup for a spa and wellness center"},
        {
          id: "p5",          name: "Artisan Bakery Showcase",          price: "Completed 2022",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-breads-as-seeded-vietnamese-baguette-rye-bread-cob-with-butters-eggs-strawberry-jam-rolling-pin-note-pad-wooden-background-with-copy-space_141793-11596.jpg",          imageAlt: "Website mockup for an artisan bakery"},
        {
          id: "p6",          name: "Interior Design Studio",          price: "Completed 2024",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-career-guidance-items-designers_23-2149443520.jpg",          imageAlt: "Website mockup for an interior design studio"},
      ]}
      title="Our Featured Projects"
      description="Discover the quality and creativity we bring to every client. Each project is a testament to our dedication to custom design and digital excellence."
      tag="Portfolio"
    />
  </div>

  <div id="about" data-section="about">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      team={[
        {
          id: "founder",          name: "Ava Sterling",          role: "Founder & Lead Strategist",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-sexy-handsome-fashion-male-model-man-dressed-elegant-suit-black-studio-lights-background-glasses_158538-9629.jpg",          imageAlt: "Headshot of Ava Sterling, Founder & Lead Strategist"},
        {
          id: "designer",          name: "Marcus Chen",          role: "Lead Web Designer",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-darkroom_23-2149893827.jpg",          imageAlt: "Headshot of Marcus Chen, Lead Web Designer"},
        {
          id: "strategist",          name: "Sophia Rodriguez",          role: "Marketing & SEO Specialist",          imageSrc: "http://img.b2bpic.net/free-photo/closeup-content-pretty-businesswoman-glasses_1262-1740.jpg",          imageAlt: "Headshot of Sophia Rodriguez, Marketing & SEO Specialist"},
      ]}
      title="Our Commitment to Craftsmanship"
      description="FNZ Marketing was founded on the principle of delivering unparalleled digital craftsmanship. We believe every local business deserves a website that truly reflects its value and vision, built with meticulous care and strategic insight."
      tag="About Us"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="FNZ Marketing transformed our online presence. Their attention to detail and dedication to understanding our brand was exceptional. We've seen a significant increase in client inquiries and a far more professional image since our new website launched! Truly a premium service."
      rating={5}
      author="Maria S. - Boutique Owner"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-businessman-cartoon-style_23-2151134099.jpg",          alt: "Avatar of a female CEO"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-smiling-blonde-businesswoman-formal-dressed-isolated-dark-textured-background_613910-4617.jpg",          alt: "Avatar of a male small business owner"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-woman-playing-poker-casino_23-2151831029.jpg",          alt: "Avatar of a female marketing manager"},
        {
          src: "http://img.b2bpic.net/free-photo/businessman-with-silly-face_1154-110.jpg",          alt: "Avatar of a male product manager"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-work_23-2149097959.jpg",          alt: "Avatar of a female startup founder"},
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Start Your Premium Website Project"
      description="Ready to elevate your online presence? Fill out the form below to take the first step towards a custom-designed website that makes an impactful and lasting impression."
      inputs={[
        {
          name: "businessName",          type: "text",          placeholder: "Your Business Name",          required: true,
        },
        {
          name: "industry",          type: "text",          placeholder: "Your Industry",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email Address",          required: true,
        },
      ]}
      textarea={{
        name: "projectDescription",        placeholder: "Tell us about your project vision and goals (e.g., new website, redesign, specific features)",        rows: 5,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-swirl-background_1017-2756.jpg"
      imageAlt="Abstract golden lines symbolizing digital connection"
      mediaAnimation="blur-reveal"
      buttonText="Send Inquiry"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Company",          items: [
            {
              label: "Home",              href: "#hero"},
            {
              label: "About Us",              href: "#about"},
            {
              label: "Portfolio",              href: "#portfolio"},
          ],
        },
        {
          title: "Services",          items: [
            {
              label: "How It Works",              href: "#how-it-works"},
            {
              label: "Packages",              href: "#services"},
            {
              label: "Consultation",              href: "#contact"},
          ],
        },
        {
          title: "Connect",          items: [
            {
              label: "Contact",              href: "#contact"},
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="&copy; 2024 FNZ Marketing. All rights reserved."
      bottomRightText="Crafting digital excellence."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
