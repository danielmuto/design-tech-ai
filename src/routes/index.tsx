import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Services } from "@/components/Services";
import { DraftToProduct } from "@/components/DraftToProduct";
import { Portfolio } from "@/components/Portfolio";
import { FeaturedProject } from "@/components/FeaturedProject";
import { AiSection } from "@/components/AiSection";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { ForWhom } from "@/components/ForWhom";
import { Faq } from "@/components/Faq";

import { FinalCta } from "@/components/FinalCta";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Footer } from "@/components/Footer";

const title = "Daniel Muto Web Designer | Sites, Landing Pages e Aplicações";
const description =
  "Criação de sites, landing pages, páginas de vendas e aplicações digitais para empresas e empreendedores. Design, tecnologia e IA para transformar ideias em experiências digitais.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Daniel Muto Web Designer",
          description,
          slogan: "Sua ideia merece ganhar forma no digital.",
          founder: {
            "@type": "Person",
            name: "Daniel Muto",
            jobTitle: "Web Designer",
          },
          knowsAbout: [
            "Web Design",
            "Landing Pages",
            "Páginas de Vendas",
            "Aplicações Web",
            "Inteligência Artificial",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-deep">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <DraftToProduct />
        <Portfolio />
        <FeaturedProject />
        <AiSection />
        <About />
        <Process />
        <ForWhom />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
