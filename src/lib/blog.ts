export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  publishedLabel: string;
  readingTime: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "qualidade-da-agua-na-producao-animal",
    title:
      "O custo oculto da água na granja: Como o tratamento com ozônio reduz o índice de conversão alimentar em suínos, aves e bovinos",
    excerpt:
      "Descubra por que o uso exclusivo de cloro gera falsas percepções de segurança sanitária e como o monitoramento em tempo real transforma a água na sua maior alavanca de lucro.",
    category: "Qualidade da água",
    publishedAt: "2026-09-17",
    publishedLabel: "17 de setembro de 2026",
    readingTime: "5 min de leitura",
    sections: [
      {
        heading: "Por que a água merece atenção diária?",
        paragraphs: [
          "A água é o nutriente mais consumido dentro de qualquer granja, representando mais do dobro da ingestão de ração, mas historicamente é o recurso menos monitorado com precisão. O produtor moderno investe milhões em genética de ponta e nutrição premium, mas muitas vezes perde margem de lucro por causa da qualidade hídrica. Desse modo, o uso exclusivo de cloro no tratamento convencional tem extrema dificuldade em romper o biofilme (camada de bactérias e lodo nas tubulações). Quando os animais bebem uma água com carga microbiológica alta ou pH desequilibrado, o organismo gasta energia combatendo patógenos em vez de converter o alimento em peso. Bom, o resultado dessa falha na infraestrutura é a diminuição do consumo de água, a piora na conversão alimentar e o aumento silencioso da mortalidade do lote.",
        ],
      },
      {
        heading: "O impacto real: Mais peso, menos ração e menos remédios",
        paragraphs: [
          "A solução para esse problema é trocar o achismo por tecnologia confiável. O tratamento com ozônio e monitoramento contínuo é muito mais forte que o cloro, pois oferece um poder de oxidação muito superior ao cloro, destruindo ativamente o biofilme sem deixar resíduos químicos (como o PAC) que alterem o paladar da água.",
          "E o resultado dessa mudança não é só na saúde do lote, é dinheiro no bolso. Um exemplo real de 2026 mostra bem isso: um cliente da P4 Agronegócios em Tunápolis, estava com a conversão alimentar travada em 3,10. Depois que instalamos nosso sistema, garantindo água sempre purificada e com o pH certo, a conversão caiu para 2,86, com um lote de 2.300 suínos.",
          "Na prática, essa melhora de 7% significou toneladas de ração economizadas em um único ciclo. Os animais ganharam peso mais rápido e a granja cortou gastos pesados com remédios para doenças intestinais. O sistema de tratamento deixou de ser visto como uma despesa de manutenção e provou ser um investimento com retorno financeiro garantido.",
        ],
      },
      {
        heading: "Da análise à rotina de manejo",
        paragraphs: [
          "O barato na gestão da água pode estar custando a lucratividade do seu lote inteiro, por isso, não trate a água da sua granja às cegas. Fale com um especialista da P4 no WhatsApp para solicitar um diagnóstico de eficiência hídrica e descubra o quanto você pode economizar na próxima safra.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
