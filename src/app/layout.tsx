import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/config";
import { fontSans } from "@/lib/fonts";
import { cn, constructMetadata } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = constructMetadata({
  title: `${siteConfig.name} | Public Speaker, Business Consultant & Trainer`,
  description: siteConfig.description,
});

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jayashri Krishnan",
    alternateName: "Jayasri Krishnan",
    jobTitle: "CEO, Business Consultant & Trainer",
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.links.email,
    telephone: siteConfig.links.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600096",
      addressCountry: "IN",
    },
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.instagram,
      siteConfig.links.facebook,
      siteConfig.links.youtube,
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "D'Organica Garden Shoppee",
        description: "MSME Registered organic gardening and terrace garden solutions company",
      },
      {
        "@type": "Organization",
        name: "Jaishuk Expertise LLP",
        description: "Training and business consultation services",
      },
      {
        "@type": "Organization",
        name: "Skanda Expertise LLP",
        description: "Business partnerships and growth consulting",
      },
    ],
    award: [
      "Top 150 SME's Around the World",
      "Distinguished Agropreneur Award - NFED",
      "Best Women Entrepreneur Excellence Award - Anna University",
      "Best Mompreneur Award 2022",
      "Agriculture Industry Women Entrepreneur Award",
    ],
    knowsAbout: [
      "Organic Gardening",
      "Terrace Gardening",
      "Entrepreneurship Training",
      "Business Consultation",
      "Women Empowerment",
      "Agricultural Training",
      "Soft Skills Development",
      "Waste Management",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background antialiased w-full mx-auto scroll-smooth",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
          <ThemeToggle />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
