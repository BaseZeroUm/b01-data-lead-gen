export async function subscribeToNewsletter(email: string, source: string) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  const { error } = await supabaseAdmin
    .from("newsletter_subscribers")
    .upsert({ email: email.trim().toLowerCase().slice(0, 200), source }, { onConflict: "email" });

  if (error) throw new Error(error.message);

  return { ok: true as const };
}
