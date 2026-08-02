import { isValidElement, type ReactNode } from "react";
import type { Locale } from "@/i18n/config";

// Blog content — no CMS (Perfil A: sin backend). Each post is a static entry
// here; publishing a new one means adding an object to `blogPosts` and
// deploying, the same pattern already used for the legal documents in
// src/content/legal/. Body content is free-form JSX, so paragraphs, lists
// and inline images can go anywhere in the text.
//
// To add an image inside a post body: drop the file in `public/blog/` and
// reference it as `<img src="/blog/mi-imagen.jpg" alt="..." />` inside the
// relevant `body`.

export type BlogPostContent = {
  title: string;
  excerpt: string;
  body: ReactNode;
};

export type BlogPost = {
  slug: string;
  /** ISO date (yyyy-mm-dd), used for sorting and the published-on label. */
  date: string;
  category: Record<Locale, string>;
  content: Record<Locale, BlogPostContent>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cuando-dos-ia-disenan-estrategia",
    date: "2026-08-02",
    category: { es: "Estrategia", en: "Strategy" },
    content: {
      es: {
        title: "Cuando dos IA diseñan tu estrategia de redes sociales",
        excerpt:
          "Un caso real: por qué un modelo entendió el negocio y el otro escribió un plan imposible.",
        body: (
          <>
            <p>
              Hace unos días le pedí a dos modelos de lenguaje —GLM5.2 y Opus 5— que diseñaran la estrategia de redes sociales de Nortex Systems, una firma de software y consultoría tecnológica recién creada. La premisa era simple: cero presupuesto publicitario, crecimiento 100% orgánico, audiencia B2B en España, Latinoamérica y Estados Unidos, y una sola persona gestionando todo. Lo que recibí fueron dos documentos que ilustran perfectamente la diferencia entre &quot;responder bien&quot; y &quot;responder bien a ti&quot;.
            </p>

            <h2>El brief: exactamente el mismo para ambos</h2>
            <ul>
              <li><strong>Empresa:</strong> Nortex Systems (software a medida, IA agéntica, transformación digital).</li>
              <li><strong>Situación:</strong> marca nueva, sin audiencia, sin casos publicables, sin equipo de marketing.</li>
              <li><strong>Restricciones:</strong> cero inversión en publicidad, voz corporativa institucional, perfil bilingüe único.</li>
              <li><strong>Objetivo:</strong> primera conversación comercial atribuible a redes en 90 días.</li>
              <li><strong>Recurso humano:</strong> una persona, produciendo además dos productos propios (autonomos.io y bearingworld.io).</li>
            </ul>

            <h2>GLM5.2: el plan que suena profesional y es imposible de ejecutar</h2>
            <p>
              GLM5.2 entregó un documento de 13 secciones, impecablemente estructurado, con tablas, roadmaps, buyer personas y un calendario editorial lean. El problema: estaba diseñado para una empresa que ya existe.
            </p>
            <p>
              Propuso cuatro canales simultáneos desde el día uno (LinkedIn, YouTube, blog técnico y X), con un ritmo de 3 posts semanales + 1 vídeo mensual + 1 artículo quincenal. Recomendó mantener una voz &quot;puramente corporativa&quot; en perfiles institucionales, sin marca personal. Y definió un posicionamiento genérico —&quot;software a medida + IA agéntica + transformación digital&quot;— que no se diferencia de ninguna agencia del mercado.
            </p>
            <p>
              En resumen: un plan excelente sobre el papel, pero que ignoraba la restricción más importante: que hay una sola persona detrás, que esa persona no tiene referencias públicas, y que el tiempo es el recurso más escaso.
            </p>

            <h2>Opus 5: el dictamen que entendió el contexto real</h2>
            <p>
              Opus 5 entregó un &quot;Dictamen del CTO&quot;. No un plan de marketing: un análisis de arquitectura aplicado a la comunicación. Y la primera frase ya marcaba la diferencia: &quot;La restricción real no es el contenido: es que la API de LinkedIn no permite el nivel de automatización que probablemente tienes en la cabeza&quot;.
            </p>
            <p>
              Sus decisiones clave fueron las correctas para una empresa de una persona:
            </p>
            <ul>
              <li>Un solo canal en fase 1: el perfil personal de LinkedIn (no la página de empresa).</li>
              <li>Tres pilares de contenido, no seis. Cada pieza pertenece a exactamente uno.</li>
              <li>Posicionamiento concreto y defendible: &quot;automatizo los procesos que hoy hace una persona a mano&quot;.</li>
              <li>Pipeline agéntico realista: el LLM redacta el 80%, pero el criterio y la aprobación son humanos.</li>
              <li>Disparadores estrictos para escalar: no se abre un segundo canal sin 8 semanas de cadencia, 300 seguidores cualificados y 3 conversaciones comerciales.</li>
            </ul>
            <p>
              Además, Opus 5 verificó el estado real de las APIs de LinkedIn antes de proponer automatización, distinguió entre métricas para decidir y métricas de vanidad, y estableció líneas duras (&quot;el agente nunca publica sin tu visto bueno&quot;).
            </p>

            <h2>La diferencia en una tabla</h2>
            <table>
              <thead>
                <tr>
                  <th>Dimensión</th>
                  <th>GLM5.2</th>
                  <th>Opus 5</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Canales propuestos</strong></td>
                  <td>4 simultáneos (LinkedIn, YouTube, blog, X)</td>
                  <td>1 en fase 1 (LinkedIn personal)</td>
                </tr>
                <tr>
                  <td><strong>Voz de marca</strong></td>
                  <td>Corporativa institucional, sin rostro humano</td>
                  <td>Perfil personal del fundador</td>
                </tr>
                <tr>
                  <td><strong>Posicionamiento</strong></td>
                  <td>Genérico: &quot;software a medida + IA agéntica&quot;</td>
                  <td>Concreto: &quot;automatizo procesos con consecuencias&quot;</td>
                </tr>
                <tr>
                  <td><strong>Automatización</strong></td>
                  <td>No detallada</td>
                  <td>Pipeline realista con verificación de APIs</td>
                </tr>
                <tr>
                  <td><strong>Métricas clave</strong></td>
                  <td>8 KPIs (likes, impresiones, engagement...)</td>
                  <td>1 primaria: conversaciones cualificadas</td>
                </tr>
                <tr>
                  <td><strong>Escalado</strong></td>
                  <td>Implícito en el plan</td>
                  <td>Disparadores estrictos y condicionales</td>
                </tr>
                <tr>
                  <td><strong>Restricciones reales</strong></td>
                  <td>Ignoradas</td>
                  <td>Centrales en cada decisión</td>
                </tr>
              </tbody>
            </table>

            <h2>La lección para quien construye con IA</h2>
            <p>
              GLM5.2 escribió un documento que parece correcto. Opus 5 escribió uno que es correcto para esta empresa, en este momento, con estas restricciones. La diferencia no es técnica: es de comprensión de contexto.
            </p>
            <p>
              Cuando usas IA para estrategia, no busques el output más completo. Busca el que mejor responda a la pregunta: &quot;¿Esto lo puedo ejecutar yo solo mañana por la mañana?&quot;. Si la respuesta es no, no importa cuán profesional sea el documento: es un plan para otra empresa.
            </p>
            <p>
              En Nortex elegimos el dictamen del CTO. Y la primera conversación comercial atribuible a redes sociales llegó antes de los 90 días.
            </p>
          </>
        ),
      },
      en: {
        title: "When two AIs design your social media strategy",
        excerpt:
          "A real case: why one model understood the business and the other wrote an impossible plan.",
        body: (
          <>
            <p>
              A few days ago I asked two language models — GLM5.2 and Opus 5 — to design the social media strategy for Nortex Systems, a newly founded software and technology consulting firm. The premise was straightforward: zero advertising budget, 100% organic growth, B2B audience across Spain, Latin America, and the United States, and one person managing everything. What I received were two documents that perfectly illustrate the difference between &quot;answering well&quot; and &quot;answering well for you.&quot;
            </p>

            <h2>The brief: exactly the same for both</h2>
            <ul>
              <li><strong>Company:</strong> Nortex Systems (custom software, agentic AI, digital transformation).</li>
              <li><strong>Situation:</strong> new brand, no audience, no publishable case studies, no marketing team.</li>
              <li><strong>Constraints:</strong> zero ad spend, institutional corporate voice, single bilingual profile.</li>
              <li><strong>Goal:</strong> first commercial conversation attributable to social media within 90 days.</li>
              <li><strong>Human resource:</strong> one person, also shipping two own products (autonomos.io and bearingworld.io).</li>
            </ul>

            <h2>GLM5.2: the plan that sounds professional and is impossible to execute</h2>
            <p>
              GLM5.2 delivered a 13-section document, impeccably structured, with tables, roadmaps, buyer personas, and a lean editorial calendar. The problem: it was designed for a company that already exists.
            </p>
            <p>
              It proposed four simultaneous channels from day one (LinkedIn, YouTube, technical blog, and X), at a pace of 3 posts weekly + 1 video monthly + 1 article every two weeks. It recommended maintaining a &quot;purely corporate&quot; voice on institutional profiles, no personal brand. And it defined a generic positioning — &quot;custom software + agentic AI + digital transformation&quot; — that doesn't differentiate from any other agency in the market.
            </p>
            <p>
              In short: an excellent plan on paper, but one that ignored the most important constraint: there is only one person behind it, that person has no public track record, and time is the scarcest resource.
            </p>

            <h2>Opus 5: the assessment that understood the real context</h2>
            <p>
              Opus 5 delivered a &quot;CTO's Assessment.&quot; Not a marketing plan: an architecture analysis applied to communication. And the first sentence already marked the difference: &quot;The real constraint isn't content: it's that the LinkedIn API doesn't allow the level of automation you probably have in mind.&quot;
            </p>
            <p>
              Its key decisions were right for a one-person company:
            </p>
            <ul>
              <li>One channel in phase 1: the personal LinkedIn profile (not the company page).</li>
              <li>Three content pillars, not six. Each piece belongs to exactly one.</li>
              <li>Concrete, defensible positioning: &quot;I automate the processes someone currently does by hand.&quot;</li>
              <li>Realistic agentic pipeline: the LLM drafts 80%, but judgment and approval are human.</li>
              <li>Strict escalation triggers: don&apos;t open a second channel without 8 weeks of cadence, 300 qualified followers, and 3 commercial conversations.</li>
            </ul>
            <p>
              Moreover, Opus 5 verified the actual state of LinkedIn APIs before proposing automation, distinguished between metrics for decision-making and vanity metrics, and set hard lines (&quot;the agent never publishes without your approval&quot;).
            </p>

            <h2>The difference in one table</h2>
            <table>
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th>GLM5.2</th>
                  <th>Opus 5</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Channels proposed</strong></td>
                  <td>4 simultaneous (LinkedIn, YouTube, blog, X)</td>
                  <td>1 in phase 1 (personal LinkedIn)</td>
                </tr>
                <tr>
                  <td><strong>Brand voice</strong></td>
                  <td>Institutional corporate, faceless</td>
                  <td>Founder&apos;s personal profile</td>
                </tr>
                <tr>
                  <td><strong>Positioning</strong></td>
                  <td>Generic: &quot;custom software + agentic AI&quot;</td>
                  <td>Concrete: &quot;I automate high-stakes processes&quot;</td>
                </tr>
                <tr>
                  <td><strong>Automation</strong></td>
                  <td>Not detailed</td>
                  <td>Realistic pipeline with API verification</td>
                </tr>
                <tr>
                  <td><strong>Key metrics</strong></td>
                  <td>8 KPIs (likes, impressions, engagement...)</td>
                  <td>1 primary: qualified conversations</td>
                </tr>
                <tr>
                  <td><strong>Scaling</strong></td>
                  <td>Implicit in the plan</td>
                  <td>Strict, conditional triggers</td>
                </tr>
                <tr>
                  <td><strong>Real constraints</strong></td>
                  <td>Ignored</td>
                  <td>Central to every decision</td>
                </tr>
              </tbody>
            </table>

            <h2>The lesson for builders working with AI</h2>
            <p>
              GLM5.2 wrote a document that looks right. Opus 5 wrote one that is right for this company, at this moment, with these constraints. The difference isn't technical: it's about understanding context.
            </p>
            <p>
              When you use AI for strategy, don't look for the most complete output. Look for the one that best answers: &quot;Can I execute this by myself tomorrow morning?&quot; If the answer is no, it doesn't matter how professional the document is: it&apos;s a plan for a different company.
            </p>
            <p>
              At Nortex we chose the CTO&apos;s assessment. And the first commercial conversation attributable to social media arrived before the 90 days were up.
            </p>
          </>
        ),
      },
    },
  },
  {
    slug: "ia-agentica-empresa",
    date: "2026-07-20",
    category: { es: "IA agéntica", en: "Agentic AI" },
    content: {
      es: {
        title: "Qué es la IA agéntica y por qué tu empresa la necesita",
        excerpt:
          "La IA agéntica no responde preguntas: ejecuta tareas completas por ti. Qué la diferencia de un chatbot y en qué procesos aporta más valor hoy.",
        body: (
          <>
            <p>
              Cuando hablamos de IA en la empresa, la mayoría todavía piensa en
              un chatbot que responde preguntas o resume documentos. La IA
              agéntica es otra cosa: un sistema capaz de recibir un objetivo,
              descomponerlo en pasos, usar herramientas (una API, una base de
              datos, un correo) y ejecutar la tarea de principio a fin, con
              supervisión humana en los puntos que importan.
            </p>
            <h2>La diferencia no es sutil</h2>
            <p>
              Un asistente conversacional te ayuda a redactar un email. Un
              agente lee el correo entrante, decide si requiere respuesta,
              consulta el estado del pedido en tu ERP, redacta la respuesta y
              la deja lista para revisión — o la envía directamente si el caso
              entra dentro de las reglas que has definido. El salto es de
              &quot;asistir a una persona&quot; a &quot;ejecutar un proceso&quot;.
            </p>
            <h2>Dónde aporta valor real</h2>
            <ul>
              <li>Procesos repetitivos con reglas claras pero volumen alto: conciliación de pedidos, triaje de soporte, extracción de datos de documentos.</li>
              <li>Integraciones entre sistemas que hoy dependen de copiar y pegar entre pantallas.</li>
              <li>Tareas que combinan varias fuentes de información antes de decidir (stock, precio, cliente, histórico).</li>
            </ul>
            <h2>Por dónde empezar</h2>
            <p>
              No hace falta automatizar toda la empresa de golpe. En Nortex
              empezamos siempre por un proceso concreto y medible: definimos
              qué decide el agente, qué siempre pasa por una persona, y cómo
              se audita cada acción. Esa disciplina — antes que la tecnología
              — es lo que hace que un proyecto de IA agéntica sobreviva más
              allá de la demo.
            </p>
          </>
        ),
      },
      en: {
        title: "What agentic AI is, and why your business needs it",
        excerpt:
          "Agentic AI doesn't just answer questions — it executes full tasks on your behalf. What sets it apart from a chatbot, and where it delivers the most value today.",
        body: (
          <>
            <p>
              When companies talk about AI, most still picture a chatbot that
              answers questions or summarizes documents. Agentic AI is
              something else: a system that takes a goal, breaks it into
              steps, uses tools (an API, a database, an inbox) and carries the
              task through end to end, with human oversight at the points
              that matter.
            </p>
            <h2>The difference isn&apos;t subtle</h2>
            <p>
              A conversational assistant helps you draft an email. An agent
              reads the incoming email, decides whether it needs a reply,
              checks order status in your ERP, drafts the response and queues
              it for review — or sends it outright if the case falls within
              rules you&apos;ve defined. The shift is from &quot;assisting a
              person&quot; to &quot;running a process.&quot;
            </p>
            <h2>Where it delivers real value</h2>
            <ul>
              <li>High-volume, rules-based repetitive work: order reconciliation, support triage, data extraction from documents.</li>
              <li>Integrations between systems that today rely on copying and pasting across screens.</li>
              <li>Tasks that combine several sources of information before a decision (stock, pricing, customer, history).</li>
            </ul>
            <h2>Where to start</h2>
            <p>
              You don&apos;t need to automate the whole company at once. At
              Nortex we always start with one concrete, measurable process:
              we define what the agent decides, what always goes through a
              person, and how every action gets audited. That discipline —
              ahead of the technology — is what makes an agentic AI project
              survive past the demo.
            </p>
          </>
        ),
      },
    },
  },
  {
    slug: "software-a-medida-vs-soluciones-enlatadas",
    date: "2026-07-13",
    category: { es: "Software a medida", en: "Custom software" },
    content: {
      es: {
        title: "Software a medida vs. soluciones enlatadas: cómo decidir",
        excerpt:
          "Un SaaS estándar es más rápido de arrancar. Software a medida es más caro de construir. La pregunta correcta no es cuál es mejor, sino cuál encaja con tu proceso.",
        body: (
          <>
            <p>
              La pregunta &quot;¿nos hacemos algo a medida o compramos un
              SaaS?&quot; se responde mal casi siempre porque se plantea como
              una cuestión de precio. El precio de licencia es solo una parte
              del coste real.
            </p>
            <h2>Cuándo una solución enlatada gana</h2>
            <ul>
              <li>El proceso que quieres cubrir es estándar en tu sector (contabilidad, CRM genérico, facturación).</li>
              <li>No hay ventaja competitiva en hacerlo distinto a como lo hace todo el mundo.</li>
              <li>Necesitas arrancar en semanas, no en meses.</li>
            </ul>
            <h2>Cuándo el software a medida gana</h2>
            <ul>
              <li>Tu proceso es precisamente lo que te diferencia de la competencia.</li>
              <li>Estás forzando un SaaS genérico a hacer algo para lo que no fue diseñado, con parches y hojas de cálculo alrededor.</li>
              <li>El coste de licencias escala mal con tu volumen (por usuario, por registro, por transacción).</li>
              <li>Necesitas integrar sistemas legacy que ningún SaaS estándar contempla.</li>
            </ul>
            <h2>La pregunta que de verdad importa</h2>
            <p>
              No es &quot;¿cuánto cuesta construirlo?&quot;, es &quot;¿cuánto
              nos cuesta cada año no tenerlo, en horas de trabajo manual,
              errores y oportunidades perdidas?&quot;. Por eso en Nortex
              empezamos cualquier proyecto con una auditoría del proceso real
              — no del proceso ideal — antes de proponer construir nada.
            </p>
          </>
        ),
      },
      en: {
        title: "Custom software vs. off-the-shelf: how to decide",
        excerpt:
          "A standard SaaS gets you started faster. Custom software costs more to build. The right question isn't which is better, but which fits your process.",
        body: (
          <>
            <p>
              &quot;Should we build custom or buy a SaaS?&quot; is almost
              always answered badly because it gets framed as a price
              question. License price is only part of the real cost.
            </p>
            <h2>When off-the-shelf wins</h2>
            <ul>
              <li>The process you need to cover is standard in your industry (accounting, generic CRM, invoicing).</li>
              <li>There&apos;s no competitive advantage in doing it differently from everyone else.</li>
              <li>You need to launch in weeks, not months.</li>
            </ul>
            <h2>When custom software wins</h2>
            <ul>
              <li>Your process is exactly what sets you apart from competitors.</li>
              <li>You&apos;re forcing a generic SaaS to do something it wasn&apos;t designed for, patched together with spreadsheets around it.</li>
              <li>License cost scales badly with your volume (per user, per record, per transaction).</li>
              <li>You need to integrate legacy systems no standard SaaS accounts for.</li>
            </ul>
            <h2>The question that actually matters</h2>
            <p>
              It isn&apos;t &quot;how much does it cost to build?&quot;, it&apos;s
              &quot;how much does it cost us every year not to have it, in
              manual work hours, errors and missed opportunities?&quot; That&apos;s
              why at Nortex every project starts with an audit of the real
              process — not the ideal one — before we propose building
              anything.
            </p>
          </>
        ),
      },
    },
  },
  {
    slug: "metodo-nortex-5d",
    date: "2026-07-06",
    category: { es: "Método", en: "Method" },
    content: {
      es: {
        title: "El método Nortex 5D: de la auditoría al ROI medible",
        excerpt:
          "Discover, Define, Design, Deliver, Demonstrate. Un proceso disciplinado y auditable para que un proyecto de software no dependa de la confianza ciega.",
        body: (
          <>
            <p>
              Encargar un proyecto de software a medida suele pedir un acto
              de fe: confiar en que el proveedor entiende tu negocio, que
              construirá lo correcto, y que al final podrás medir si mereció
              la pena. El método Nortex 5D existe para quitar la fe de la
              ecuación y sustituirla por evidencia en cada fase.
            </p>
            <h2>Las cinco fases</h2>
            <ul>
              <li><strong>Discover</strong> — auditoría del proceso real: qué se hace hoy, con qué herramientas, dónde están los cuellos de botella.</li>
              <li><strong>Define</strong> — análisis funcional: qué se va a construir, con criterios de aceptación explícitos, antes de escribir una línea de código.</li>
              <li><strong>Design</strong> — especificación y hoja de ruta: arquitectura, prioridades, plan de entregas.</li>
              <li><strong>Deliver</strong> — construcción e implementación, con entregas incrementales verificables.</li>
              <li><strong>Demonstrate</strong> — comparar el antes y el después, y probar el ROI con datos, no con promesas.</li>
            </ul>
            <h2>Por qué Demonstrate retroalimenta a Discover</h2>
            <p>
              La quinta fase no cierra el proyecto: alimenta el siguiente
              ciclo. Lo que se mide en Demonstrate se convierte en la
              auditoría de partida de la siguiente mejora. Es la diferencia
              entre un proyecto puntual y una relación de mejora continua con
              el software que sostiene tu negocio.
            </p>
          </>
        ),
      },
      en: {
        title: "The Nortex 5D Method: from audit to measurable ROI",
        excerpt:
          "Discover, Define, Design, Deliver, Demonstrate. A disciplined, auditable process so a software project doesn't have to run on blind trust.",
        body: (
          <>
            <p>
              Commissioning a custom software project usually asks for an act
              of faith: trusting that the vendor understands your business,
              that they&apos;ll build the right thing, and that in the end
              you&apos;ll be able to measure whether it was worth it. The
              Nortex 5D method exists to take faith out of the equation and
              replace it with evidence at every stage.
            </p>
            <h2>The five phases</h2>
            <ul>
              <li><strong>Discover</strong> — audit of the real process: what happens today, with what tools, where the bottlenecks are.</li>
              <li><strong>Define</strong> — functional analysis: what will be built, with explicit acceptance criteria, before a line of code is written.</li>
              <li><strong>Design</strong> — spec and roadmap: architecture, priorities, delivery plan.</li>
              <li><strong>Deliver</strong> — build and implementation, with verifiable incremental releases.</li>
              <li><strong>Demonstrate</strong> — compare before and after, and prove ROI with data, not promises.</li>
            </ul>
            <h2>Why Demonstrate feeds back into Discover</h2>
            <p>
              The fifth phase doesn&apos;t close the project: it feeds the
              next cycle. What gets measured in Demonstrate becomes the
              starting audit for the next improvement. That&apos;s the
              difference between a one-off project and an ongoing improvement
              relationship with the software that runs your business.
            </p>
          </>
        ),
      },
    },
  },
];

export function getSortedBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

// Walks a ReactNode tree (without rendering it) to pull out plain text —
// used to estimate reading time without pulling in react-dom/server.
function extractText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join(" ");
  if (isValidElement(node)) {
    const children = (node.props as { children?: ReactNode }).children;
    return extractText(children);
  }
  return "";
}

// Estimated reading time from the body text (~200 words/min).
export function getReadingMinutes(body: ReactNode): number {
  const words = extractText(body).trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
