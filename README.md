# B01 Launchpad

Especificação para o Lovable: Landing Page B01 (BaseZeroUm)

Cole este documento no prompt do Lovable junto com os arquivos de marca (logo, ícones, foto do Felipe e o print do Portal B01). As cores e fontes abaixo foram extraídas diretamente dos materiais anexados, não são estimativas.

1. Objetivo da página

Uma única página (one page), sem navegação para páginas internas. O único objetivo é captura de lead: o visitante lê a proposta e preenche um formulário no fim da página. Nada de tabela de preços, nada de blog, nada de múltiplas páginas.

2. Marca em uma frase

B01 (BaseZeroUm) é uma consultoria de dados para PMEs que une business intelligence, engenharia de dados e ciência de dados. Tagline: "Decide Beyond". Fundador: Felipe Garcez.

3. Voz e regras de copy

Regra Descrição Tom Direto, consultivo, sem jargão técnico para quem decide (o público não é técnico) Gatilho central Contraste entre "decidir no achismo / no escuro" e "decidir com dados" Evitar Abrir frase com "No fim..." Evitar Estrutura "não entrego isso, entrego aquilo" (contraste por negação) Evitar Hífen ou travessão dentro do texto corrido Termos permitidos Pode citar "ciência de dados" ao lado de "business intelligence" e "engenharia de dados"

4. Tokens de design (extraídos dos arquivos anexados)

4.1 Cores

Token Hex Uso --ink #1C2224 Fundo escuro base (hero, seção de dor, seção sobre) --ink-2 #20292D Variação do fundo escuro (gradiente sutil) --ink-glow #1D4B44 Glow verde teal no rodapé das seções escuras (gradiente radial/linear saindo do canto inferior) --paper #F7F7F7 Fundo claro (seção "Como fazemos", seção final de CTA) --paper-alt #FFFFFF Cards e blocos sobre o --paper --text-on-dark #FFFFFF Texto principal sobre fundo escuro --text-on-dark-muted #E3E4E4 Corpo de texto secundário sobre fundo escuro --text-on-dark-label #C6C8C9 Legendas pequenas sobre fundo escuro (ex: datas, kickers) --text-on-light #000000 Texto principal sobre fundo claro --brand-blue #47B6F3 Cor de destaque primária: bordas, links, texto de CTA, ícone de seta --brand-mint #8ACDBA Cor de destaque secundária: fundo das pills/tags, parte inferior do gradiente da logo --block-highlight #53A6C1 Face clara dos blocos isométricos 3D (elemento decorativo) --block-mid #3B7588 Face média dos blocos isométricos --block-shadow #2A5563 Face escura/sombra dos blocos isométricos

Gradiente da marca (usado na logo e pode ser reaproveitado em botões primários ou destaques): linear-gradient(180deg, #47B6F3 0%, #8ACDBA 100%).

4.2 Tipografia

Os textos usam uma fonte geométrica arredondada, em dois pesos contrastantes: um peso fino/light para palavras de abertura (ex: "Quem", "Como fazemos?") e um peso bold para a continuação e para títulos de impacto (ex: "somos nós?"). O logotipo "B01" em si é uma marca desenhada (blocos com recorte, estilo pixel), não é texto, deve ser enviado como arquivo de imagem/SVG, não recriado em CSS.

Como não temos os arquivos da fonte original, use como fallback no Google Fonts:

Peso Fonte sugerida Uso 300 (light) Manrope ou Sora, peso Light Palavras de abertura em títulos grandes, kickers 700 a 800 (bold) Mesma família, peso Bold/ExtraBold Títulos de impacto, nomes de seção, CTAs 500 (medium) Mesma família, peso Medium Corpo de texto

Se o Felipe tiver os arquivos da fonte original (parece ser algo no estilo Aeonik ou General Sans, arredondada e geométrica), subir os arquivos no projeto do Lovable é melhor que usar o fallback.

4.3 Forma e linguagem visual

Elemento Descrição Cantos Muito arredondados (raio grande, 24px a 40px) em cards e blocos Motivo de "aba" Vários cards têm um recorte tipo aba/etiqueta no canto (como um post-it com uma dobra), com borda fina de 1px na cor --brand-blue (fundo claro) ou branco translúcido (fundo escuro). Se for complexo de reproduzir em CSS puro, pode simplificar para um card com borda arredondada normal e uma pequena tag/badge sobreposta no canto Bordas Finas, 1 a 1.5px, cor --brand-blue sobre fundo claro, rgba(255,255,255,0.25) sobre fundo escuro Ícones decorativos Blocos isométricos 3D nas cores da seção 4.1 (--block-*), usados como elemento gráfico solto no canto de seções, não como ícone funcional Pills/tags Fundo --brand-mint, texto --ink, cantos bem arredondados (pill), tipografia bold uppercase, tamanho pequeno Seta Ícone de seta diagonal (↗) na cor --brand-blue, usada como bullet antes de uma frase de destaque

5. Assets para subir no Lovable

Envie estes arquivos como assets do projeto antes de gerar a página:

Arquivo Uso Logo B01 (wordmark completo, com o gradiente azul/menta no "01") Cabeçalho e rodapé Ícone "01" isolado (gradiente) Favicon e/ou marca d'água decorativa Foto do Felipe Garcez Seção "Sobre" Print do Portal B01 (dashboard com o chat de dados) Seção de prova/produto Gráficos isométricos 3D (os blocos teal) Elementos decorativos de fundo, usar com opacidade reduzida ou nos cantos das seções

6. Estrutura da página, seção por seção

# Seção Fundo Conteúdo 1 Header fixo Escuro (--ink) Logo B01 à esquerda, botão "Falar com a B01" à direita que rola até o formulário 2 Hero Escuro, glow teal no rodapé Headline de dor + subheadline de posicionamento + CTA primário 3 Dor Escuro "Cansado de tomar decisões no escuro?" + parágrafo de dor 4 Solução Claro (--paper) "Como fazemos?" + explicação + grade com os 3 pilares 5 Prova / Produto Escuro Print do Portal B01 + legenda curta 6 Sobre Escuro Foto do Felipe + pills + bio curta 7 CTA final + Formulário Claro Frase de fechamento + formulário de captura de lead 8 Rodapé Escuro Logo, tagline, contato, copyright

Seção 2, Hero

Kicker pequeno (opcional, no estilo do "@ B01 2026→BR" visto nos materiais): B01 → consultoria de dados para PME

Headline (peso misto, "Toda decisão" fino, "precisa de uma base." bold):

"Toda decisão precisa de uma base."

Subheadline:

"Unimos business intelligence, engenharia de dados e ciência de dados numa consultoria feita para o tamanho da sua PME."

CTA primário: Quero sair do escuro (rola até o formulário)

Seção 3, Dor

Título: "Cansado de tomar decisões no escuro?"

Corpo (copy original dos materiais, usar como está):

"A maioria das PMEs ainda decide no achismo. Não porque quer, porque nunca teve dados organizados para decidir diferente."

Seção 4, Solução

Título: "Como fazemos?"

Corpo (copy original dos materiais, usar como está):

"A B01 nasceu para resolver isso. Unimos business intelligence, engenharia de dados e ciência de dados em uma consultoria feita pro tamanho de PME."

Grade de 3 pilares (copy sugerida, o Felipe pode ajustar):

Pilar Descrição curta sugerida Business Intelligence Painéis e indicadores que mostram o que está acontecendo no seu negócio agora Engenharia de Dados Seus dados organizados e conectados num só lugar, prontos para uso Ciência de Dados Modelos e análises que ajudam a prever o que vem a seguir

Seção 5, Prova / Produto

Título sugerido: "Um portal, todos os seus dados"

Corpo sugerido: "Faturamento, clientes e performance numa visão única, com respostas diretas por chat."

Elemento: screenshot do Portal B01 (dashboard + chat), com leve sombra e borda arredondada, sobre o fundo escuro.

Seção 6, Sobre

Título: "Quem criou tudo isso?"

Foto do Felipe Garcez com as pills (copy original dos materiais, usar como está):

MENTOR DE DADOS E ANALYTICS · APAIXONADO POR HISTÓRIAS · TECH LEAD DE DADOS · NASCIDO EM 2000 · FILHO DE EMPREENDEDORA

Nome: Felipe Garcez

Seção 7, CTA final + Formulário

Corpo (copy original dos materiais, usar como está):

"PMEs que já cansaram de decidir no escuro e querem crescer com base em dados, não em intuição."

CTA em destaque azul (copy original, usar como está):

"Chega de decidir no escuro. Mandem uma mensagem e vamos achar a base do seu negócio."

Formulário:

Campo Tipo Obrigatório Nome Texto Sim Empresa Texto Sim WhatsApp Telefone Sim E-mail E-mail Sim Qual o momento da sua empresa hoje? Área de texto, placeholder "Conta rapidamente o que está travando ou o que você quer crescer" Não

Botão de envio: Enviar e falar com a B01

Microcopy abaixo do botão: "Sem spam. É uma pessoa da B01 que responde."

Estado de sucesso: mensagem substituindo o formulário, "Recebemos! Alguém da B01 te chama em breve." mais o link do WhatsApp como alternativa.

Seção 8, Rodapé

Logo B01, tagline "Decide Beyond", um e-mail de contato, e o ano corrente. Sem menu de links, é uma página única.

7. Notas técnicas para o Lovable

Construir como página única em React com Tailwind (padrão do Lovable), mobile first, com as seções empilhadas em coluna única no mobile e a grade de 3 pilares e o layout de Sobre ajustados para 1 ou 2 colunas conforme o espaço. Usar scroll suave do botão do header e do CTA do hero até o formulário. O formulário deve gravar os leads em uma tabela do Supabase (o Lovable já integra nativamente), com os campos da seção 6 mais um timestamp de criação, e o botão de envio deve ficar desabilitado com um spinner durante o envio. Adicionar validação simples de e-mail e telefone antes de habilitar o envio. Meta title sugerido: "B01, consultoria de dados para PME, decida além do achismo". Meta description sugerida: "Business intelligence, engenharia de dados e ciência de dados numa consultoria feita para o tamanho da sua empresa."

8. Fora de escopo

Sem blog, sem página de preços, sem login, sem múltiplos idiomas, sem depoimentos de clientes (ainda não há cases publicáveis). Se isso mudar depois, essas seções entram numa v2.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://b01-data-lead-gen.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/de5981e5-842b-44b1-8395-5c9c9172d6f4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
