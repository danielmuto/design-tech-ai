/**
 * Configuração central do site.
 * Para colocar o site no ar: substitua o número do WhatsApp e as URLs sociais.
 */
export const site = {
  name: "Daniel Muto",
  role: "Web Designer",
  tagline: "Design. Tecnologia. Ideias que ganham vida.",

  // Número real do WhatsApp com código do país (55) + DDD (51) + número
  whatsappNumber: "5551996759745",
  whatsappMessage:
    "Oi, Daniel! Tudo bem? Gostaria de saber mais sobre como as soluções com IA podem ajudar o meu negócio. Pode me contar um pouco sobre como funciona?",


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
