import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/consultoria-power-bi")({
  server: {
    handlers: {
      GET: () => {
        return new Response(null, {
          status: 301,
          headers: {
            Location: "/",
          },
        });
      },
    },
  },
});
