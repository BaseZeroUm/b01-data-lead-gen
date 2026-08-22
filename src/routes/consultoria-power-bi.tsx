import { createFileRoute, Link } from "@tanstack/react-router";

import logoAsset from "@/assets/logo.png.asset.json";
import block65 from "@/assets/Group_65.png.asset.json";
import portalVisaoGeral from "@/assets/portal-visao-geral.png.asset.json";
import { LeadForm } from "@/components/LeadForm";

const URL = "https://basezeroum.com.br/consultoria-power-bi";
const TITLE = "Consultoria Power BI para PME | B01 BaseZeroUm";
const DESCRIPTION =
  "Consultoria em Power BI para pequenas e médias empresas: painéis, indicadores e dados organizados para decidir com base, não com achismo.";

const ETAPAS = [
  {
    titulo: "Diagnóstico",
    texto:
      "Entendemos as decisões que você precisa tomar e onde os dados da empresa estão hoje: planilhas, ERP, sistema de vendas, financeiro.",
  },
  {
    titulo: "Base de dados",
    texto:
      "Conectamos e organizamos as fontes em um modelo confiável, para o Power BI ler sempre o mesmo número.",
  },
  {
    titulo: "Painéis no Power BI",
    texto:
      "Construímos os painéis e indicadores que a sua operação usa no dia a dia, com atualização automática.",
  },
  {
    titulo: "Acompanhamento",
    texto:
      "Ajustamos as visões conforme o negócio muda e treinamos o time para usar o painel na rotina de decisão.",
  },
];

const ENTREGAS = [
  "Painéis de faturamento, margem e clientes",
  "Indicadores acordados com a diretoria",
  "Modelo de dados e medidas em DAX documentadas",
  "Atualização automática das fontes",
  "Treinamento do time no uso dos painéis",
  "Suporte para evoluir as visões",
];

export const Route = createFileRoute("/consultoria-power-bi")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Consultoria Power BI para PME",
          serviceType: "Consultoria em Power BI e business intelligence",
          description: DESCRIPTION,
          areaServed: "BR",
          provider: {
            "@type": "Organization",
            name: "B01",
            alternateName: "BaseZeroUm",
            url: "https://basezeroum.com.br",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Início",
              item: "https://basezeroum.com.br/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Consultoria Power BI",
              item: URL,
            },
          ],
        }),
      },
    ],
  }),
  component: PowerBiPage,
});

function PowerBiPage() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-paper font-sans">
      <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/">
            <img src={logoAsset.url} alt="B01 BaseZeroUm" className="h-7 w-auto" />
          </Link>
          <Link to="/portal" className="btn-outline-blue">
            Portal do cliente
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="section-dark glow-bottom">
        <div className="liquid-bg" aria-hidden="true">
          <span />
          <span />
        </div>
        <img
          src={block65.url}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-16 w-56 opacity-20 sm:w-80"
        />
        <div className="section-pad relative z-[1] mx-auto max-w-6xl px-5">
          <nav aria-label="Trilha de navegação" className="text-xs text-on-dark-label">
            <Link to="/" className="hover:text-brand-blue">
              Início
            </Link>
            <span> / Consultoria Power BI</span>
          </nav>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.08] tracking-tight sm:text-6xl">
            <span className="font-light text-on-dark-muted">Consultoria </span>
            <span className="font-extrabold text-on-dark">Power BI para PME.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-on-dark-muted sm:mt-12">
            Painéis, indicadores e uma base de dados organizada por trás. A B01 implanta o
            Power BI no tamanho da sua empresa, com foco nas decisões que você toma toda
            semana.
          </p>
          <a href="#formulario" className="btn-brand mt-12 sm:mt-16">
            Falar sobre o meu Power BI ↗
          </a>
        </div>
      </section>

      {/* Problema */}
      <section className="section-dark glow-bottom border-t border-white/10">
        <div className="liquid-bg" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="section-pad relative z-[1] mx-auto grid max-w-6xl gap-12 px-5 sm:gap-16 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <h2 className="text-3xl leading-tight sm:text-5xl">
              <span className="font-light text-on-dark-muted">Power BI instalado não é </span>
              <span className="font-extrabold text-on-dark">dado organizado.</span>
            </h2>
            <p className="mt-10 max-w-xl text-lg text-on-dark-muted sm:mt-12">
              Muita PME já tem a licença e alguns relatórios soltos, mas cada área chega na
              reunião com um número diferente. O problema quase nunca está no gráfico, está
              na base que alimenta ele.
            </p>
          </div>
          <div className="card-dark p-10 sm:p-12">
            <span className="pill-mint">Sinais comuns</span>
            <p className="mt-9 text-lg text-on-dark-muted sm:text-xl">
              <span className="font-bold text-brand-blue">↗</span> Relatório que precisa de
              alguém atualizando na mão toda segunda.
            </p>
            <p className="mt-8 text-lg text-on-dark-muted sm:text-xl">
              <span className="font-bold text-brand-blue">↗</span> Faturamento que muda de
              valor conforme a planilha que você abre.
            </p>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="relative overflow-hidden bg-paper text-on-light">
        <div className="section-pad mx-auto max-w-6xl px-5">
          <h2 className="text-3xl leading-tight sm:text-5xl">
            <span className="font-light">Como conduzimos </span>
            <span className="font-extrabold">o projeto?</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-on-light/70">
            Unimos business intelligence, engenharia de dados e ciência de dados. O Power BI
            é a camada que você vê; embaixo dela fica a base que faz o número parar de
            divergir.
          </p>
          <ol className="mt-14 grid gap-6 sm:grid-cols-2">
            {ETAPAS.map((etapa, i) => (
              <li
                key={etapa.titulo}
                className="rounded-[28px] border border-brand-blue/40 bg-paper-alt p-8 sm:p-10"
              >
                <span className="pill-mint">Etapa {i + 1}</span>
                <h3 className="mt-6 text-xl font-extrabold">{etapa.titulo}</h3>
                <p className="mt-4 text-on-light/70">{etapa.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Entregas */}
      <section className="bg-paper text-on-light">
        <div className="section-pad mx-auto max-w-6xl px-5">
          <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
            <div>
              <h2 className="text-3xl leading-tight sm:text-4xl">
                <span className="font-light">O que fica </span>
                <span className="font-extrabold">com a sua empresa.</span>
              </h2>
              <ul className="mt-10 space-y-5">
                {ENTREGAS.map((item) => (
                  <li key={item} className="flex gap-3 text-lg text-on-light/75">
                    <span className="font-bold text-brand-blue">↗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <figure className="overflow-hidden rounded-[28px] border border-brand-blue/40 bg-paper-alt p-3 shadow-xl">
              <img
                src={portalVisaoGeral.url}
                alt="Painel de indicadores construído pela B01 com visão de faturamento, clientes e performance"
                className="w-full rounded-[20px]"
                loading="lazy"
              />
              <figcaption className="px-3 py-4 text-sm text-on-light/60">
                Exemplo de painel de visão geral entregue pela B01.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* CTA + Formulário */}
      <section id="formulario" className="bg-paper text-on-light">
        <div className="section-pad mx-auto max-w-6xl px-5">
          <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-start">
            <div>
              <span className="pill-mint">Próximo passo</span>
              <p className="mt-8 text-lg text-on-light/70">
                Conta o que você já tem hoje: licença do Power BI, planilhas, ERP ou nada
                ainda. A partir disso desenhamos o caminho mais curto até o primeiro painel
                útil.
              </p>
              <p className="mt-10 text-3xl font-extrabold leading-tight text-brand-blue sm:text-4xl">
                Chega de decidir no escuro. Mandem uma mensagem e vamos achar a base do seu
                negócio.
              </p>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      <footer className="section-dark">
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link to="/">
              <img src={logoAsset.url} alt="B01 BaseZeroUm" className="h-7 w-auto" />
            </Link>
            <p className="mt-3 text-sm text-on-dark-label">Decide Beyond</p>
          </div>
          <div className="text-sm text-on-dark-muted">
            <a href="mailto:felipe.garcez@basezeroum.com.br" className="text-brand-blue">
              felipe.garcez@basezeroum.com.br
            </a>
            <p className="mt-2 text-on-dark-label">© {year} B01 · BaseZeroUm</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
