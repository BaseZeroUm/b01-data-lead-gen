import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { subscribeNewsletter } from "@/lib/newsletter.functions";

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

export function NewsletterForm({ source = "blog" }: { source?: string }) {
  const subscribe = useServerFn(subscribeNewsletter);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!emailOk(email) || loading) return;
    setLoading(true);
    setError(null);
    try {
      await subscribe({ data: { email: email.trim(), source } });
      setDone(true);
    } catch {
      setError("Não conseguimos cadastrar agora. Tente novamente em instantes.");
    }
    setLoading(false);
  }

  if (done) {
    return (
      <div className="card-dark p-8 text-center">
        <span className="pill-mint">Inscrito</span>
        <p className="mt-5 text-lg font-bold text-on-dark">
          Pronto. Você recebe os próximos textos da B01 no seu e-mail.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-dark p-8">
      <span className="pill-mint">Newsletter</span>
      <p className="mt-5 text-xl font-extrabold text-on-dark sm:text-2xl">
        Receba os próximos textos sobre dados e decisão.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          inputMode="email"
          maxLength={200}
          required
          placeholder="seu@email.com"
          aria-label="Seu e-mail"
          className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-on-dark outline-none transition placeholder:text-on-dark-label/70 focus:border-[var(--brand-blue)]"
        />
        <button
          type="submit"
          className="btn-brand shrink-0"
          disabled={!emailOk(email) || loading}
        >
          {loading ? (
            <>
              <span className="size-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink" />
              Enviando...
            </>
          ) : (
            "Quero receber"
          )}
        </button>
      </div>
      {error ? <p className="mt-4 text-sm font-medium text-destructive">{error}</p> : null}
      <p className="mt-3 text-sm text-on-dark-label">Sem spam. Só conteúdo de dados.</p>
    </form>
  );
}
