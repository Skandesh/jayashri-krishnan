import {
  LeafIcon,
  UsersIcon,
  BriefcaseIcon,
  SparklesIcon,
  TrendingUpIcon,
  AwardIcon,
} from "lucide-react";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Jayashri Krishnan",
  description: "Empowering Entrepreneurs Through Organic Living & Business Excellence",
  cta: "Get In Touch",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "Jayashri Krishnan",
    "Jayasri Krishnan",
    "D'Organica Garden Shoppee",
    "Jaishuk Expertise LLP",
    "Skanda Expertise LLP",
    "organic gardening Chennai",
    "terrace garden consultant",
    "terrace garden setup Chennai",
    "organic farming training",
    "entrepreneurship training Chennai",
    "business consultant Chennai",
    "women empowerment trainer",
    "MSME trainer Delhi",
    "NSDC trainer Chennai",
    "hydroponics training India",
    "herbal farming consultant",
    "microgreens cultivation",
    "urban gardening expert",
    "organic kitchen garden",
    "waste management consultant",
    "soft skills trainer Chennai",
    "corporate training Chennai",
    "agriculture business consultant",
    "women entrepreneur award winner",
    "best agropreneur India",
    "public speaker Chennai",
    "motivational speaker women empowerment",
    "organic food consultant",
    "sustainable living expert",
    "green entrepreneur India",
  ],
  links: {
    email: "jaishukbs@gmail.com",
    phone: "9962956356",
    phone2: "9840028852",
    youtube: "https://www.youtube.com/@DOrganicaGarden",
    instagram: "https://instagram.com/jaisreekrish",
    facebook: "https://www.facebook.com/jayasri.krishnan",
    linkedin: "https://www.linkedin.com/in/jayasri-krishnan",
  },
  features: [
    {
      name: "Organic Terrace Gardening",
      description:
        "Transform your urban space into a thriving organic garden. Expert guidance for sustainable, chemical-free food production.",
      icon: <LeafIcon className="h-6 w-6" />,
    },
    {
      name: "Entrepreneurship Training",
      description:
        "Comprehensive business development programs covering agriculture, food processing, trading, and value-added products.",
      icon: <TrendingUpIcon className="h-6 w-6" />,
    },
    {
      name: "Women Empowerment Programs",
      description:
        "Motivational sessions, skill development, and personality management programs designed to empower women entrepreneurs.",
      icon: <UsersIcon className="h-6 w-6" />,
    },
    {
      name: "Business Consultation",
      description: "Strategic consulting for agro, food, herbal, textile, and waste management industries across IT and non-IT sectors.",
      icon: <BriefcaseIcon className="h-6 w-6" />,
    },
    {
      name: "Agricultural Training",
      description:
        "Hands-on training in hydroponics, herbal farming, mushroom cultivation, microgreens, and integrated organic farming methods.",
      icon: <SparklesIcon className="h-6 w-6" />,
    },
    {
      name: "Soft Skills Development",
      description:
        "Professional training in communication, stress management, financial planning, and career development for corporates and institutions.",
      icon: <AwardIcon className="h-6 w-6" />,
    },
  ],
  featureHighlight: [
    {
      title: "D'Organica Garden Shoppee",
      description:
        "MSME Registered company established in 2014. Mission: One Farmer at Every Home, One Entrepreneur at Every Home. Providing complete garden solutions, terrace garden setup, and organic farming products.",
      imageSrc: "/during-session.jpg",
      direction: "rtl" as const,
    },
    {
      title: "Jaishuk Expertise LLP",
      description:
        "Training and business consultation for multiple industries. Official Trainer for MSME (Delhi) and NSDC (Chennai). Expertise in agriculture, food processing, waste management, and entrepreneurship development.",
      imageSrc: "/during-session-1.jpg",
      direction: "ltr" as const,
    },
    {
      title: "Skanda Expertise LLP",
      description:
        "Strategic business partnerships and growth consulting. Focused on export/import training, trading opportunities, and multi-sector business development.",
      imageSrc: "/jayashri.jpg",
      direction: "rtl" as const,
    },
  ],
  bento: [
    {
      title: "2000+ Garden Projects Delivered",
      content:
        "Successfully completed over 2000 terrace garden projects in Tamil Nadu, helping people grow chemical-free food. Partnership with ITC & Exnora Chennai for waste management and sustainable living initiatives.",
      imageSrc: "/during-session.jpg",
      imageAlt: "Garden projects showcase",
      fullWidth: true,
    },
    {
      title: "Government Collaborations",
      content:
        "Field trip host for TN Government & Afghanistan Ministry of Economics with 50 delegates. Knowledge partner with Anna University Chennai for organic farming and entrepreneurship programs.",
      imageSrc: "/jayashri-2.jpg",
      imageAlt: "Government partnerships",
      fullWidth: false,
    },
    {
      title: "Educational Impact",
      content:
        "Established organic garden clubs in numerous schools and colleges. Partnered with WWF NGO for 15 government school organic kitchen garden projects across Chennai, Kanchipuram, and Thiruvallur districts.",
      imageSrc: "/during-session-1.jpg",
      imageAlt: "Educational programs",
      fullWidth: false,
    },
    {
      title: "All-India First Innovation",
      content:
        "3G GoGreen Ganesha - Seed Ganesha project supporting clay artisans, farmers, and organic food production while promoting water conservation and pollution-free celebrations.",
      imageSrc: "/jayashri-3.jpg",
      imageAlt: "Innovation project",
      fullWidth: true,
    },
  ],
  benefits: [
    {
      id: 1,
      text: "Top 150 SME's Around the World (International Recognition)",
      image: "/jayashri.jpg",
    },
    {
      id: 2,
      text: "Distinguished Agropreneur Award - NFED (National)",
      image: "/jayashri-2.jpg",
    },
    {
      id: 3,
      text: "Best Women Entrepreneur Excellence Award - Anna University",
      image: "/jayashri-3.jpg",
    },
    {
      id: 4,
      text: "Best Mompreneur Award 2022 & Agriculture Industry Women Entrepreneur Award",
      image: "/during-session.jpg",
    },
  ],
  pricing: [
    {
      name: "Individual Consultation",
      href: "#contact",
      price: "Custom",
      period: "session",
      yearlyPrice: "Custom",
      features: [
        "One-on-one business consultation",
        "Garden setup consultation & planning",
        "Entrepreneurship guidance",
        "Personalized training sessions",
      ],
      description: "Perfect for individuals and home entrepreneurs",
      buttonText: "Schedule Consultation",
      isPopular: false,
    },
    {
      name: "Institutional Training",
      href: "#contact",
      price: "Custom",
      period: "program",
      yearlyPrice: "Custom",
      features: [
        "Corporate workshops and seminars",
        "College and university programs",
        "Customized training modules",
        "Soft skills and entrepreneurship development",
        "MSME and NSDC certified training",
      ],
      description: "Ideal for educational institutions and corporates",
      buttonText: "Enquire Now",
      isPopular: true,
    },
  ],
  faqs: [
    {
      question: "What services does Jayashri Krishnan offer?",
      answer: (
        <span>
          We provide comprehensive services including organic terrace gardening, entrepreneurship training, business consultation, women empowerment programs, agricultural training (hydroponics, herbal farming, microgreens), and soft skills development for corporates and institutions.
        </span>
      ),
    },
    {
      question: "How can I book a consultation or training session?",
      answer: (
        <span>
          You can reach out via email at jaishukbs@gmail.com or call us at 9962956356 / 9840028852. We offer customized consultation packages for individuals, institutions, and corporates based on your specific needs.
        </span>
      ),
    },
    {
      question: "What is D'Organica Garden Shoppee?",
      answer: (
        <span>
          D'Organica Garden Shoppee is an MSME registered company established in 2014, offering complete garden solutions including terrace garden setup, hydroponics, vertical gardens, plant sales, and organic gardening services. Our mission is "One Farmer at Every Home, One Entrepreneur at Every Home."
        </span>
      ),
    },
    {
      question: "What credentials and certifications do you have?",
      answer: (
        <span>
          With qualifications including B.Sc., M.L.I.S, MBA, and PGDN, I&apos;m a certified Trainer for MSME (Delhi) and NSDC (Chennai). I&apos;ve received numerous awards including Top 150 SME (International), Distinguished Agropreneur Award (NFED), and Best Women Entrepreneur Excellence Award from Anna University.
        </span>
      ),
    },
    {
      question: "Do you provide training for educational institutions?",
      answer: (
        <span>
          Yes, we conduct training programs for colleges, universities, and schools. We&apos;ve partnered with prestigious institutions including Anna University, VIT Vellore, SRM Institute, and many others across Tamil Nadu, offering programs in entrepreneurship, soft skills, and agricultural training.
        </span>
      ),
    },
  ],
  footer: [
    {
      id: 1,
      menu: [
        { href: "#services", text: "Services" },
        { href: "#about", text: "About" },
        { href: "#awards", text: "Awards" },
        { href: "#programs", text: "Training Programs" },
        { href: "#contact", text: "Contact" },
      ],
    },
  ],
  testimonials: [
    {
      id: 1,
      text: "Trusted by 2000+ prestigious clients across Tamil Nadu for organic gardening solutions and sustainable living initiatives.",
      name: "Corporate Clients",
      role: "Intel Bangalore, IndusInd Bank, Saint Gobain",
      image:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      text: "Knowledge partner and training provider for leading educational institutions in entrepreneurship and organic farming.",
      name: "Educational Partners",
      role: "Anna University, VIT Vellore, SRM Institute",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      text: "Celebrity clientele including prominent film personalities and industrialists trust our organic gardening expertise.",
      name: "Celebrity Clients",
      role: "Radhika Sarathkumar, K.S. Ravikumar, Leading Industrialists",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&auto=format&fit=crop&q=60",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
