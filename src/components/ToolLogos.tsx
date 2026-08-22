type Tool = { name: string; d: string; fill?: "outline" | "solid" };

// Marcas desenhadas em traço único (monocromático) para manter a página coerente.
export const TOOLS: Tool[] = [
  {
    name: "Power BI",
    d: "M3 20.5h18V22H3v-1.5ZM5 9h3.5v10H5V9Zm5.25-5h3.5v15h-3.5V4ZM15.5 12H19v7h-3.5v-7Z",
  },
  {
    name: "Excel",
    d: "M3 3h18v18H3V3Zm2 2v14h14V5H5Zm2 2h2.6l2.4 3.2L14.4 7H17l-3.7 5 3.7 5h-2.6L12 13.8 9.6 17H7l3.7-5L7 7Z",
  },
  {
    name: "Databricks",
    d: "M.95 14.184L12 20.403l9.919-5.55v2.21L12 22.662l-10.484-5.96-.565.308v.77L12 24l11.05-6.218v-4.317l-.515-.309L12 19.118l-9.867-5.653v-2.21L12 16.805l11.05-6.218V6.32l-.515-.308L12 11.974 2.647 6.681 12 1.388l7.76 4.368.668-.411v-.566L12 0 .95 6.27v.72L12 13.207l9.919-5.55v2.26L12 15.52 1.516 9.56l-.565.308Z",
  },
  {
    name: "Snowflake",
    d: "M12 1v22M2.5 6.5l19 11M2.5 17.5l19-11",
    fill: "outline",
  },
  {
    name: "BigQuery",
    d: "M5.676 10.595h2.052v5.244a5.892 5.892 0 0 1-2.052-2.088v-3.156zm18.179 10.836a.504.504 0 0 1 0 .708l-1.716 1.716a.504.504 0 0 1-.708 0l-4.248-4.248a.206.206 0 0 1-.007-.007c-.02-.02-.028-.045-.043-.066a10.736 10.736 0 0 1-6.334 2.065C4.835 21.599 0 16.764 0 10.799S4.835 0 10.8 0s10.799 4.835 10.799 10.8c0 2.369-.772 4.553-2.066 6.333.025.017.052.028.074.05l4.248 4.248zm-5.028-10.632a8.015 8.015 0 1 0-8.028 8.028h.024a8.016 8.016 0 0 0 8.004-8.028zm-4.86 4.98a6.002 6.002 0 0 0 2.04-2.184v-1.764h-2.04v3.948zm-4.5.948c.442.057.887.08 1.332.072.4.025.8.025 1.2 0V7.692H9.468v9.035z",
  },
  {
    name: "SQL",
    d: "M12 2c-4.4 0-8 1.1-8 2.5S7.6 7 12 7s8-1.1 8-2.5S16.4 2 12 2Zm8 5.6C18.4 8.6 15.4 9 12 9s-6.4-.4-8-1.4v3.9C4 12.9 7.6 14 12 14s8-1.1 8-2.5V7.6Zm0 6.5c-1.6 1-4.6 1.4-8 1.4s-6.4-.4-8-1.4v3.9C4 19.4 7.6 20.5 12 20.5s8-1.1 8-2.5v-3.9Z",
  },
  {
    name: "Python",
    d: "M11.9 1c-2.6 0-4.6.5-4.6 2.3v2.3h6.4v1H5.6C3.6 6.6 2 8 2 11.4c0 3.4 1.4 4.9 3.4 4.9h1.9v-2.6c0-2 1.6-3.6 3.6-3.6h4.4c1.7 0 3-3.1 3-3.1V3.3C18.3 1.6 16.3 1 13.7 1h-1.8Zm-2.5 1.4a.9.9 0 1 1 0 1.9.9.9 0 0 1 0-1.9ZM16.7 7.7v2.6c0 2-1.6 3.6-3.6 3.6H8.7c-1.7 0-3 1.4-3 3.1v3.7C5.7 22.4 7.7 23 10.3 23h1.8c2.6 0 4.6-.6 4.6-2.3v-2.3h-6.4v-1h8.1c2 0 3.6-1.4 3.6-4.8s-1.6-4.9-3.6-4.9h-1.7Zm-2.1 12a.9.9 0 1 1 0 1.9.9.9 0 0 1 0-1.9Z",
  },
  {
    name: "Looker Studio",
    d: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2.2A7.8 7.8 0 1 1 4.2 12 7.8 7.8 0 0 1 12 4.2Zm-1.1 2.6v10.4h2.2V6.8h-2.2ZM7 10v7.2h2.2V10H7Zm7.8 2.6v4.6H17v-4.6h-2.2Z",
  },
  {
    name: "Airflow",
    d: "M17.195 16.822l4.002-4.102C23.55 10.308 23.934 5.154 24 .43a.396.396 0 0 0-.246-.373.392.392 0 0 0-.437.09l-6.495 6.658-4.102-4.003C10.309.45 5.154.066.43 0H.423a.397.397 0 0 0-.277.683l6.658 6.494-4.003 4.103C.45 13.692.065 18.846 0 23.57a.398.398 0 0 0 .683.282l6.494-6.657 3.934 3.837.17.165c2.41 2.353 7.565 2.737 12.288 2.803h.006a.397.397 0 0 0 .277-.683l-6.657-6.495Z",
  },
  {
    name: "Google Sheets",
    d: "M11.318 12.545H7.91v-1.909h3.41v1.91zM14.728 0v6h6l-6-6zm1.363 10.636h-3.41v1.91h3.41v-1.91zm0 3.273h-3.41v1.91h3.41v-1.91zM20.727 6.5v15.864c0 .904-.732 1.636-1.636 1.636H4.909a1.636 1.636 0 0 1-1.636-1.636V1.636C3.273.732 4.005 0 4.909 0h9.318v6.5h6.5zm-3.273 2.773H6.545v7.909h10.91v-7.91zm-6.136 4.636H7.91v1.91h3.41v-1.91z",
  },
  {
    name: "AWS",
    d: "M8.55 14.55c.2.1.3.3.3.55 0 .25-.1.45-.3.55-.2.1-.5.15-.9.15H5.2c-.2 0-.35-.05-.45-.15-.1-.1-.15-.25-.15-.4v-2.6c0-.15.05-.3.15-.4.1-.1.25-.15.45-.15h2.7c.4 0 .7.05.9.15.2.1.3.3.3.55 0 .25-.1.45-.3.55-.2.1-.5.15-.9.15H6.35v.55h1.3c.4 0 .7.05.9.15zm2.6-2.5c.1-.1.25-.15.45-.15h.65c.2 0 .35.05.45.15.1.1.15.25.15.4v2.6c0 .15-.05.3-.15.4-.1.1-.25.15-.45.15h-.65c-.2 0-.35-.05-.45-.15-.1-.1-.15-.25-.15-.4v-2.6c0-.15.05-.3.15-.4zm6.6 0c.1-.1.25-.15.45-.15h.65c.2 0 .35.05.45.15.1.1.15.25.15.4v2.6c0 .15-.05.3-.15.4-.1.1-.25.15-.45.15h-.65c-.2 0-.35-.05-.45-.15-.1-.1-.15-.25-.15-.4v-2.6c0-.15.05-.3.15-.4zm-4.6 0c.1-.1.25-.15.45-.15h2.7c.2 0 .35.05.45.15.1.1.15.25.15.4 0 .15-.05.3-.15.4-.1.1-.25.15-.45.15h-2v.55h1.3c.2 0 .35.05.45.15.1.1.15.25.15.4 0 .15-.05.3-.15.4-.1.1-.25.15-.45.15h-1.3v.55h2c.2 0 .35.05.45.15.1.1.15.25.15.4 0 .15-.05.3-.15.4-.1.1-.25.15-.45.15h-2.7c-.2 0-.35-.05-.45-.15-.1-.1-.15-.25-.15-.4v-2.6c0-.15.05-.3.15-.4zM6.3 21c-1.8-.8-3.3-2.2-4.3-4.1-.6-1.1-.9-2.2-1-3.3h2c.1.9.4 1.7.8 2.5.6 1.2 1.6 2.2 2.8 2.9l-.3 2zm11.4 0l-.3-2c1.2-.7 2.2-1.7 2.8-2.9.4-.8.7-1.6.8-2.5h2c-.1 1.1-.4 2.2-1 3.3-1 1.9-2.5 3.3-4.3 4.1zm-5.7 1.5c-2.3 0-4.4-.9-6-2.3l1.4-1.4c1.2 1.1 2.8 1.7 4.6 1.7s3.4-.6 4.6-1.7l1.4 1.4c-1.6 1.4-3.7 2.3-6 2.3z",
  },
  {
    name: "Azure",
    d: "M4.4 15.7L12 3.4l1.6 2.7H8.2L14 16h4.3l-3.7 4.6H2.2l2.2-4.9zM12 16.4l4.2-6.6-2.2-3.6L6.8 18.5h5.2z",
  },
  {
    name: "Google Cloud",
    d: "M12 2a6 6 0 0 0-6 6v.2c-.7.1-1.3.5-1.8 1L2 12l2.2 2.8c.5.5 1.1.9 1.8 1v.2a6 6 0 0 0 6 6 6 6 0 0 0 6-6h-2.4a3.6 3.6 0 1 1-3.6-3.6v.2c.7-.1 1.3-.5 1.8-1l2.2-2.8-2.2-2.8c-.5-.5-1.1-.9-1.8-1V8a6 6 0 0 0 6 6h2.4a6 6 0 0 0-6-6v-.2c.7-.1 1.3-.5 1.8-1l2.2-2.8-2.2-2.8c-.5-.5-1.1-.9-1.8-1V4a6 6 0 0 0-6-6zm0 7.4a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2z",
  },
  {
    name: "Tableau",
    d: "M10 2h4v4h-4V2zm0 6h4v6h-4V8zm-6 0h4v4H4V8zm12 0h4v4h-4V8zm-6 8h4v6h-4v-6z",
  },
  {
    name: "Metabase",
    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z",
  },
  {
    name: "Google Analytics",
    d: "M20 2h-4v18h4V2zm-6 6h-4v12h4V8zm-6 6H2v6h6v-6z",
  },
  {
    name: "MongoDB",
    d: "M12 2c-2 3-3 5-3 8 0 4 1 6 3 8 2-2 3-4 3-8 0-3-1-5-3-8zm0 3c1 1 1 2 1 5 0 2-.5 4-1 5v-8z",
  },
  {
    name: "MySQL",
    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z",
  },
  {
    name: "Jupyter",
    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 3c-2 0-3.8 1-4.8 2.5C7.6 9.5 8.7 10 12 10c3.3 0 4.4-.5 4.8-2.5C16.8 8 15 7 12 7Zm0 4.5c-3.8 0-6.5 1.5-6.5 3.5s2.7 3.5 6.5 3.5 6.5-1.5 6.5-3.5-2.7-3.5-6.5-3.5Z",
  },
  {
    name: "Scikit-learn",
    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm-3 5c1 0 1.5 1 1.5 2s-.5 2-1.5 2-1.5-1-1.5-2 .5-2 1.5-2Zm7 0c1 0 1.5 1 1.5 2s-.5 2-1.5 2-1.5-1-1.5-2 .5-2 1.5-2ZM7 14c1.5 2 2.5 3 5 3s3.5-1 5-3c-.5 2.5-2.5 4-5 4s-4.5-1.5-5-4Z",
  },
  {
    name: "TensorFlow",
    d: "M12 2L2 20h20L12 2Zm0 4.5L18 18H6L12 6.5Z",
  },
  {
    name: "R",
    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm-1 5h3.5c2 0 3.5 1.5 3.5 3.5S16.5 14 14.5 14h-.5l3 6h-2.5l-2.8-5.5H11V20H9V7h2Zm1 2v3.5h2.5c1 0 1.5-.5 1.5-1.5S15.5 9 14.5 9h-2.5Z",
  },
];

const byName = (name: string): Tool =>
  TOOLS.find((t) => t.name === name) ?? { name, d: "" };

const GROUPS: { title: string; caption: string; tools: Tool[] }[] = [
  {
    title: "Visualização e análise",
    caption: "Painéis e relatórios que a liderança usa no dia a dia.",
    tools: ["Power BI", "Looker Studio", "Tableau", "Metabase", "Excel", "Google Sheets"].map(byName),
  },
  {
    title: "Engenharia de dados",
    caption: "Coleta, tratamento e orquestração da base que alimenta tudo.",
    tools: ["Databricks", "Airflow", "Snowflake", "BigQuery", "AWS", "Azure"].map(byName),
  },
  {
    title: "Ciência de dados e IA",
    caption: "Modelos, previsões e análises avançadas que vão além do relatório.",
    tools: ["Python", "SQL", "Jupyter", "Scikit-learn", "TensorFlow", "R"].map(byName),
  },
  {
    title: "Nuvem, bases e medição",
    caption: "Onde os dados moram e de onde eles vêm.",
    tools: ["Google Cloud", "MySQL", "MongoDB", "Google Analytics", "Databricks", "BigQuery"].map(byName),
  },
];


function ToolIcon({ tool }: { tool: Tool }) {
  const isOutline = tool.fill === "outline";
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-7 shrink-0 text-brand-blue"
      fill={isOutline ? "none" : "currentColor"}
      stroke={isOutline ? "currentColor" : undefined}
      strokeWidth={isOutline ? 1.8 : undefined}
      strokeLinecap="round"
    >
      <path d={tool.d} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}

export function ToolLogos() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {GROUPS.map((group) => (
        <section
          key={group.title}
          className="rounded-[32px] border border-white/15 bg-white/[0.04] p-7"
        >
          <h3 className="text-lg font-extrabold text-on-dark">{group.title}</h3>
          <p className="mt-2 text-sm text-on-dark-label">{group.caption}</p>
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {group.tools.map((tool) => (
              <li
                key={tool.name}
                className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/[0.03] px-3 py-3 transition hover:border-brand-blue/60"
              >
                <ToolIcon tool={tool} />
                <span className="text-sm font-bold text-on-dark">{tool.name}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}


