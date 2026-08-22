import { createFileRoute, Link } from "@tanstack/react-router";

import creatorsLogo from "@/assets/creators01-logo.png.asset.json";
import block64 from "@/assets/Group_64.png.asset.json";
import block65 from "@/assets/Group_65.png.asset.json";
import { CreatorsLeadForm } from "@/components/CreatorsLeadForm";
import { EmailLink, InstagramLink } from "@/components/SocialLinks";

const TITLE = "Creators 01, o programa de mentoria do Grupo ZeroUm";
const DESCRIPTION =
  "Pra quem quer entrar e se destacar na área de dados, e pra quem já está na área e quer construir junto com quem resolve problema real.";

export const Route = createFileRoute("/creators")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/creators" }],
  }),
  component: CreatorsLanding,
});

const AUDIENCES = [
  {
    tag: "Quer entrar na área",
    body:
      "Você quer começar ou trocar de carreira pra dados e quer se destacar de verdade, não só colecionar curso.",
  },
  {
    tag: "Já está na área",
    body:
      "Você já trabalha com dados e quer construir junto com gente que encara problema real de negócio no dia a dia, trocando experiência de verdade, não teoria.",
  },
];

const BENEFITS = [
  {
    title: "Encontro semanal",
    body:
      "Todo sábado, 3 horas de encontro. Uma hora e meia inicial de soft skill e conhecimento de negócio, uma hora e quinze final de mão na massa, aplicando na prática.",
  },
  {
    title: "Touch points",
    body:
      "Encontros rápidos de 15 minutos pra acompanhar sua evolução de perto durante a semana.",
  },
  {
    title: "Workshop com o mercado",
    body:
      "Workshops com profissionais que atuam no mercado de dados hoje, trazendo a visão de quem resolve esses problemas no dia a dia.",
  },
  {
    title: "Acompanhamento de LinkedIn",
    body:
      "Construção da sua presença profissional, pra você se destacar quando alguém for te procurar.",
  },
  {
    title: "Simulação de entrevista",
    body:
      "Prática de entrevista com foco em autoridade e impacto na hora de se apresentar.",
  },
  {
    title: "Planilha de indicação",
    body:
      "Uma planilha pra ativar sua rede de contatos e gerar oportunidades reais de indicação.",
  },
];

function CreatorsLanding() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-paper font-sans">
      <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <img
            src={creatorsLogo.url}
            alt="Creators 01"
            className="h-5 w-auto [filter:invert(1)_hue-rotate(180deg)] sm:h-6"
          />
          <Link to="/" className="text-sm font-bold text-on-dark-muted hover:text-brand-blue">
            Base 01
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
          className="pointer-events-none absolute -right-10 top-16 w-56 opacity-10 sm:w-80"
        />
        <div className="section-pad relative z-[1] mx-auto max-w-6xl px-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-on-dark-label">
            Creators 01 → mentoria do Grupo ZeroUm
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] tracking-tight sm:text-6xl">
            <span className="font-light text-on-dark-muted">Entre na área de dados. </span>
            <span className="font-extrabold text-on-dark">
              Ou construa junto com quem já resolve.
            </span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-on-dark-muted sm:mt-12">
            O Creators 01 é o programa de mentoria do Grupo ZeroUm, pra quem quer se
            destacar na área de dados e pra quem já está dentro e quer trocar com quem
            resolve problema de verdade todo dia.
          </p>
          <a href="#formulario" className="btn-brand mt-12 sm:mt-16">
            Quero entrar no Creators 01 ↗
          </a>
        </div>
      </section>

      {/* Pra quem é */}
      <section className="section-dark glow-bottom border-t border-white/10">
        <div className="liquid-bg" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="section-padding relative z-[1] mx-auto max-w-6xl px-5">
          <h2 className="text-3xl leading-tight sm:text-5xl">
            <span className="font-light text-on-dark-muted">Pra quem é </span>
            <span className="font-extrabold text-on-dark">o Creators 01?</span>
          </h2>
          <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2">
            {AUDIENCES.map((a) => (
              <article key={a.tag} className="card-dark p-8 sm:p-10">
                <span className="pill-mint">{a.tag}</span>
                <p className="mt-8 text-lg text-on-dark-muted">
                  <span className="font-bold text-brand-blue">↗</span> {a.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="relative overflow-hidden bg-paper text-on-light">
        <img
          src={block64.url}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-12 bottom-8 w-48 opacity-15 sm:w-64"
        />
        <div className="section-padding relative z-[1] mx-auto max-w-6xl px-5">
          <h2 className="text-3xl sm:text-5xl">
            <span className="font-light">O que </span>
            <span className="font-extrabold">você recebe</span>
          </h2>
          <div className="mt-14 grid gap-6 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <article key={b.title} className="card-light p-8">
                <span className="pill-mint">{b.title}</span>
                <p className="mt-6 text-on-light/70">{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final + formulário */}
      <section id="formulario" className="bg-paper text-on-light">
        <div className="section-padding mx-auto max-w-6xl px-5">
          <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-start">
            <div>
              <span className="pill-mint">Inscrição</span>
              <p className="mt-8 text-lg text-on-light/70">
                Se você quer entrar na área de dados e se destacar, ou já está dentro e
                quer construir junto com quem resolve problema de verdade, o Creators 01 é
                pra você.
              </p>
              <p className="mt-10 text-3xl font-extrabold leading-tight text-brand-blue sm:text-4xl">
                Preencha o formulário e garanta sua vaga no Creators 01.
              </p>
            </div>
            <CreatorsLeadForm />
          </div>
        </div>
      </section>

      <footer className="section-dark">
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-center sm:justify-between">
          <img
            src={creatorsLogo.url}
            alt="Creators 01"
            className="h-5 w-auto [filter:invert(1)_hue-rotate(180deg)]"
          />
          <div className="flex flex-col gap-3 text-sm sm:items-end">
            <div className="flex flex-wrap items-center gap-4">
              <EmailLink />
              <span className="text-white/20">·</span>
              <InstagramLink />
            </div>
            <p className="text-on-dark-label">© {year} Creators 01 · Grupo ZeroUm</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
