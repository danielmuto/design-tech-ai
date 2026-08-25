/**
 * Configuração central do site.
 * Para colocar o site no ar: substitua o número do WhatsApp e as URLs sociais.
 */
export const site = {
  name: "Daniel Muto",
  role: "Web Designer",
  tagline: "Design. Tecnologia. Ideias que ganham vida.",

  // TODO: substituir pelo número real com código do país (ex.: "5511999999999")
  whatsappNumber: "5511999999999",
  whatsappMessage:
    "Olá Daniel! Vi seu site e gostaria de conversar sobre um projeto.",

  // TODO: substituir pelos perfis reais
  instagramUrl: "https://instagram.com/",
  linkedinUrl: "https://linkedin.com/",

  email: "contato@danielmuto.com",
} as const;

export function whatsappUrl(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
] as const;
