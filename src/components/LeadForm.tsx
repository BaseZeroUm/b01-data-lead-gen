import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
const phoneOk = (v: string) => v.replace(/\D/g, "").length >= 10;

const WHATSAPP_URL = "https://wa.me/5511911380734";

export function LeadForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [moment, setMoment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const valid =
    name.trim().length > 1 &&
    company.trim().length > 1 &&
    emailOk(email) &&
    phoneOk(whatsapp);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid || loading) return;
    setLoading(true);
    setError(null);
    try {
      await submitLeadFn({
        data: {
          name: name.trim(),
          company: company.trim(),
          whatsapp: whatsapp.trim(),
          email: email.trim(),
          moment: moment.trim() || null,
        },
      });
    } catch {
      setLoading(false);
      setError("Não conseguimos enviar agora. Tente novamente em instantes.");
      return;
    }
    setLoading(false);
    setDone(true);
  }


  if (done) {
    return (
      <div className="card-light p-8 text-center sm:p-10">
        <span className="pill-mint">Recebido</span>
        <p className="mt-5 text-2xl font-bold text-on-light">
          Recebemos! Alguém da B01 te chama em breve.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-outline-blue mt-6"
        >
          Falar agora pelo WhatsApp ↗
        </a>
      </div>
    );
  }

  const field =
    "w-full rounded-2xl border border-black/10 bg-paper px-4 py-3 text-on-light outline-none transition focus:border-brand-blue";

  return (
    <form onSubmit={handleSubmit} className="card-light p-6 sm:p-10">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-on-light/70">Nome</span>
          <input
            className={`${field} mt-2`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={120}
            required
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-on-light/70">Empresa</span>
          <input
            className={`${field} mt-2`}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            maxLength={120}
            required
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-on-light/70">WhatsApp</span>
          <input
            className={`${field} mt-2`}
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            inputMode="tel"
            placeholder="(11) 99999-9999"
            maxLength={40}
            required
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-on-light/70">E-mail</span>
          <input
            className={`${field} mt-2`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            inputMode="email"
            maxLength={200}
            required
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-sm font-medium text-on-light/70">
          Qual o momento da sua empresa hoje?
        </span>
        <textarea
          className={`${field} mt-2 min-h-28 resize-y`}
          value={moment}
          onChange={(e) => setMoment(e.target.value)}
          maxLength={1000}
          placeholder="Conta rapidamente o que está travando ou o que você quer crescer"
        />
      </label>

      {error ? (
        <p className="mt-4 text-sm font-medium text-destructive">{error}</p>
      ) : null}

      <button type="submit" className="btn-brand mt-6 w-full" disabled={!valid || loading}>
        {loading ? (
          <>
            <span className="size-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink" />
            Enviando...
          </>
        ) : (
          "Enviar e falar com a B01"
        )}
      </button>
      <p className="mt-3 text-center text-sm text-on-light/60">
        Sem spam. É uma pessoa da B01 que responde.
      </p>
    </form>
  );
}
