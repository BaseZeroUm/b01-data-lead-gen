import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import logoAsset from "@/assets/logo.png.asset.json";
import block64 from "@/assets/Group_64.png.asset.json";
import block65 from "@/assets/Group_65.png.asset.json";
import felipePortrait from "@/assets/felipe-garcez-crop.jpg";
import daniloPortrait from "@/assets/danilo-crivellaro.png.asset.json";
import { PILLARS, ABOUT_PILLS, PORTAL_TABS } from "@/lib/landing-content";
import { LeadForm } from "@/components/LeadForm";

const TITLE = "B01, consultoria de dados para PME, decida além do achismo";
const DESCRIPTION =
  "Business intelligence, engenharia de dados e ciência de dados numa consultoria feita para o tamanho da sua empresa.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "B01",
          alternateName: "BaseZeroUm",
          slogan: "Decide Beyond",
          description: DESCRIPTION,
          founder: { "@type": "Person", name: "Felipe Garcez" },
        }),
      },
    ],
  }),
  component: Landing,
});


function Landing() {
  const year = new Date().getFullYear();
  const [activeTab, setActiveTab] = useState(PORTAL_TABS[0]!.id);
  const currentTab = PORTAL_TABS.find((t) => t.id === activeTab) ?? PORTAL_TABS[0]!;

  return (
    <div className="min-h-screen bg-paper font-sans">
      <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <img src={logoAsset.url} alt="B01 BaseZeroUm" className="h-7 w-auto" />
          <a href="#formulario" className="btn-outline-blue">
            Falar com a B01
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="section-dark glow-bottom">
        <div className="liquid-bg" aria-hidden="true"><span /><span /></div>
        <img
          src={block65.url}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-16 w-56 opacity-20 sm:w-80"
        />
        <div className="section-pad relative z-[1] mx-auto max-w-6xl px-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-on-dark-label">
            B01 → consultoria de dados para PME
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            <span className="font-light text-on-dark-muted">Toda decisão </span>
            <span className="font-extrabold text-on-dark">precisa de uma base.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-on-dark-muted sm:mt-12">
            Unimos business intelligence, engenharia de dados e ciência de dados numa
            consultoria feita para o tamanho da sua PME.
          </p>
          <a href="#formulario" className="btn-brand mt-12 sm:mt-16">
            Quero sair do escuro ↗
          </a>
        </div>
      </section>

      {/* Dor */}
      <section className="section-dark glow-bottom border-t border-white/10">
        <div className="liquid-bg" aria-hidden="true"><span /><span /></div>
        <div className="section-padding relative z-[1] mx-auto grid max-w-6xl gap-12 px-5 sm:gap-16 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <h2 className="text-3xl leading-tight sm:text-5xl">
              <span className="font-light text-on-dark-muted">Cansado de tomar </span>
              <span className="font-extrabold text-on-dark">decisões no escuro?</span>
            </h2>
            <p className="mt-10 max-w-xl text-lg text-on-dark-muted sm:mt-12">
              A maioria das PMEs ainda decide no achismo. Não porque quer, porque nunca
              teve dados organizados para decidir diferente.
            </p>
          </div>
          <div className="card-dark p-10 sm:p-12">
            <span className="pill-mint">Diagnóstico</span>
            <p className="mt-9 text-lg text-on-dark-muted sm:text-xl">
              <span className="font-bold text-brand-blue">↗</span> Sem base, cada reunião
              vira opinião contra opinião.
            </p>
            <p className="mt-8 text-lg text-on-dark-muted sm:text-xl">
              <span className="font-bold text-brand-blue">↗</span> Com base, a conversa
              passa a ser sobre o próximo passo.
            </p>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="relative overflow-hidden bg-paper text-on-light">
        <img
          src={block64.url}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-12 bottom-8 w-48 opacity-15 sm:w-64"
        />
        <div className="section-padding relative z-[1] mx-auto max-w-6xl px-5">
          <h2 className="text-3xl sm:text-5xl">
            <span className="font-light">Como </span>
            <span className="font-extrabold">fazemos?</span>
          </h2>
          <p className="mt-10 max-w-2xl text-lg text-on-light/70 sm:mt-12">
            A B01 nasceu para resolver isso. Unimos business intelligence, engenharia de
            dados e ciência de dados em uma consultoria feita pro tamanho de PME.
          </p>

          <div className="mt-16 grid gap-6 sm:mt-20 md:grid-cols-3">
            {PILLARS.map((p) => (
              <article key={p.title} className="card-light relative p-8 pt-10">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="block h-11 w-11 shrink-0 bg-brand-blue"
                    style={{
                      maskImage: `url(${p.icon})`,
                      WebkitMaskImage: `url(${p.icon})`,
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                    }}
                  />
                  <span className="pill-mint">{p.tag}</span>
                </div>
                <h3 className="mt-6 text-xl font-extrabold">{p.title}</h3>
                <p className="mt-4 text-on-light/70">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Prova */}
      <section className="section-dark glow-bottom">
        <div className="section-padding relative z-[1] mx-auto max-w-6xl px-5">
          <h2 className="text-3xl sm:text-5xl">
            <span className="font-light text-on-dark-muted">Um portal, </span>
            <span className="font-extrabold text-on-dark">todos os seus dados.</span>
          </h2>
          <p className="mt-10 max-w-2xl text-lg text-on-dark-muted sm:mt-12">
            Faturamento, clientes e performance numa visão única, com respostas diretas
            por chat.
          </p>
          <div className="mt-12 flex flex-wrap gap-3 sm:mt-14">
            {PORTAL_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full border px-5 py-2 text-sm font-bold transition-colors ${
                  activeTab === tab.id
                    ? "border-[var(--brand-blue)] bg-[var(--brand-blue)] text-[var(--ink)]"
                    : "border-white/20 text-on-dark-label hover:border-white/40"
                }`}
                aria-pressed={activeTab === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-[1000px] overflow-hidden rounded-2xl border border-white/15 shadow-[var(--shadow-portal)] sm:mt-10">
            <img
              src={currentTab.url}
              alt={currentTab.alt}
              className="h-auto w-full"
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* Sobre */}
      <section className="section-dark glow-bottom border-t border-white/10">
        <div className="liquid-bg" aria-hidden="true"><span /><span /></div>
        <div className="section-padding relative z-[1] mx-auto grid max-w-6xl gap-12 px-5 sm:gap-16 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div className="card-dark w-full max-w-[320px] self-start overflow-hidden rounded-[24px] [aspect-ratio:4/5]">
            <img
              src={felipePortrait}
              alt="Felipe Garcez, fundador da B01"
              className="felipe-portrait h-full w-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-5xl">
              <span className="font-light text-on-dark-muted">Quem </span>
              <span className="font-extrabold text-on-dark">criou tudo isso?</span>
            </h2>
            <p className="mt-10 text-2xl font-extrabold text-on-dark">Felipe Garcez</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {ABOUT_PILLS.map((pill) => (
                <span key={pill} className="pill-mint">
                  {pill}
                </span>
              ))}
            </div>
            <p className="mt-8 max-w-xl text-on-dark-muted">
              Fundador da B01, criado dentro de uma empresa de família e formado dentro de
              times de dados. Traduz números em decisão para quem precisa decidir hoje.
            </p>
          </div>
        </div>
      </section>

      {/* CTA + Formulário */}
      <section id="formulario" className="bg-paper text-on-light">
        <div className="section-padding mx-auto max-w-6xl px-5">
          <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-start">
            <div>
              <span className="pill-mint">Para quem é</span>
              <p className="mt-8 text-lg text-on-light/70">
                PMEs que já cansaram de decidir no escuro e querem crescer com base em
                dados, não em intuição.
              </p>
              <p className="mt-10 text-3xl font-extrabold leading-tight text-brand-blue sm:text-4xl">
                Chega de decidir no escuro. Mandem uma mensagem e vamos achar a base do
                seu negócio.
              </p>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      <footer className="section-dark">
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <img src={logoAsset.url} alt="B01 BaseZeroUm" className="h-7 w-auto" />
            <p className="mt-3 text-sm text-on-dark-label">Decide Beyond</p>
          </div>
          <div className="text-sm text-on-dark-muted">
            <a href="mailto:contato@basezeroum.com" className="text-brand-blue">
              contato@basezeroum.com
            </a>
            <p className="mt-2 text-on-dark-label">© {year} B01 · BaseZeroUm</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
