export const site = {
  name: "P4 Agronegócios",
  tagline: "Tratamento e monitoramento de água para granjas",
  phone: "+55 55 99680-0556",
  phoneHref: "tel:+5555996800556",
  whatsappNumber: "5555996800556",
  email: "contato@p4agronegocios.com.br",
  address: "Oeste de Santa Catarina — atendimento em todo o Brasil",
  social: {
    instagram: "https://www.instagram.com/p4agronegocios/",
  },
};

/**
 * Links das publicações reais do feed (@p4agronegocios).
 * Cole aqui as URLs dos posts (ex.: https://www.instagram.com/p/XXXXXXXX/)
 * e elas serão exibidas como embeds oficiais do Instagram.
 */
export const instagramPosts: string[] = [
  "https://www.instagram.com/reel/DcURloxs0Ct/",
  "https://www.instagram.com/reel/DKXvcKbNzQz/",
  "https://www.instagram.com/reel/DOov0eWDZS9/",
];

export function whatsappUrl(
  message = "Olá! Gostaria de solicitar um diagnóstico da água da minha granja.",
) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Home", href: "/#home" },
  { label: "Solução", href: "/#solucao" },
  { label: "Benefícios", href: "/#beneficios" },
  { label: "Como Funciona", href: "/#como-funciona" },
  { label: "Galeria", href: "/#galeria" },
  { label: "Monitoramento", href: "/#monitoramento" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Blog", href: "/blog" },
  { label: "Instagram", href: "/#instagram" },
  { label: "Parceiros", href: "/#parceiros" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contato", href: "/#contato" },
];
