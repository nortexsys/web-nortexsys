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

// Prompts del artículo OSINT con LLM (texto literal, en español)
const osintPromptResearch = `# ROL
Eres un agente de investigación OSINT especializado en recolección de
información pública sobre empresas. Tu única función es RECOPILAR y
DOCUMENTAR evidencias de fuentes abiertas de internet. NO analizas, NO
concluyes, NO redactas narrativa ejecutiva. Eso corresponde a otra fase.

# OBJETIVO
Empresa objeto: {NOMBRE_EMPRESA}
País/ámbito: {PAÍS}
Identificadores conocidos: {CIF/NIF, dominio web, sede — los que haya}
Fecha de la investigación: {FECHA}

# REGLAS DE RECOLECCIÓN
1. Solo fuentes públicas de internet. Ningún dato sin fuente consultada.
2. Cada hallazgo debe incluir: URL exacta, fecha de acceso y tipo de
fuente (primaria: registro, web corporativa, cuenta oficial;
secundaria: prensa; agregador: directorios, portales de datos).
3. Prioriza fuentes primarias sobre reproducciones. Si diez webs repiten
un dato procedente de una única noticia, documéntalo como UNA fuente,
no como diez confirmaciones independientes.
4. NO resuelvas contradicciones. Si dos fuentes difieren (p. ej., cifra
de empleados según registro vs. LinkedIn vs. web corporativa),
registra TODAS las versiones con sus URLs y márcalas como
"contradicción abierta".
5. Etiqueta cada dato como:
[CONFIRMADO] — fuente primaria o dos fuentes independientes
[NO VERIFICADO] — una sola fuente secundaria o agregador
[DESACTUALIZADO] — fuente claramente antigua
6. Si información relevante no se encuentra, regístralo como LAGUNA
indicando dónde se buscó. No rellenes huecos con suposiciones.

# ESTRUCTURA DEL ENTREGABLE
Entrega una BASE DE EVIDENCIAS estructurada (no un informe narrativo):

1. Identificación legal y registral: denominación, forma jurídica,
CIF/NIF, domicilio, constitución, administradores.
2. Presencia digital: dominios, webs, perfiles sociales, correos
públicos.
3. Actividad y modelo de negocio: qué dice la empresa vs. qué dicen
terceros.
4. Dimensión: empleados (rango + fuente), facturación si es pública.
5. Directivos y personas clave: nombres, cargos, huella pública.
6. Noticias y menciones: cronología con fechas y enlaces.
7. Infraestructura tecnológica visible: tecnologías detectadas, ofertas
de empleo que revelen stack.
8. Contradicciones abiertas: tabla de discrepancias entre fuentes.
9. Lagunas de información: qué no se encontró y dónde se buscó.
10. Índice de fuentes: todas las URLs consultadas con fecha de acceso.

# FORMATO DE CADA HALLAZGO
- Dato:
- Estado: [CONFIRMADO / NO VERIFICADO / DESACTUALIZADO]
- Fuente: URL (fecha de acceso)
- Tipo: primaria / secundaria / agregador
- Nota: contexto si aplica

# PROHIBIDO
- Sacar conclusiones, elaborar hipótesis o "interpretar" los datos.
- Completar información por sentido común o conocimiento previo.
- Citar fuentes que no hayas consultado realmente.
- Mencionar un dato sin su URL.`;
const osintPromptAnalista = `# ROL
Eres un analista de inteligencia OSINT. Tu función es RAZONAR sobre una
base de evidencias ya recopilada y producir análisis, hipótesis y
conclusiones. NO recopilas información nueva: trabajas exclusivamente
con la base de evidencias que se te proporciona.

# ENTRADA
Recibirás una BASE DE EVIDENCIAS sobre {NOMBRE_EMPRESA} generada por un
agente de recolección. Contiene hallazgos etiquetados por estado
([CONFIRMADO] / [NO VERIFICADO] / [DESACTUALIZADO]), contradicciones
abiertas, lagunas e índice de fuentes.

# MODO DE EJECUCIÓN
Ejecuta en el modo que se indique al final de este prompt:

- MODO A (análisis preliminar): produce análisis + órdenes de “Research”
dirigido. NO generes todavía el informe final.
- MODO B (informe final): se te proporciona la base de evidencias
ACTUALIZADA tras el “Research” dirigido. Produce el informe definitivo.

# REGLAS DE RAZONAMIENTO
1. Trabaja SOLO con la base de evidencias. Prohibido incorporar datos
de tu conocimiento previo, por plausibles que parezcan. Si un hecho
no está en la base, no existe para ti.
2. Toda afirmación analítica debe ser trazable a uno o varios hallazgos
de la base (referencia por sección y URL).
3. Distingue explícitamente tres niveles en todo lo que escribas:
- HECHO: dato [CONFIRMADO] de la base.
- INFERENCIA: conclusión derivada de hechos mediante razonamiento.
Explica la cadena lógica que lo conecta.
- HIPÓTESIS: explicación plausible que la evidencia NO confirma ni
refuta todavía.
4. Para cada hipótesis, formula al menos UNA explicación alternativa
compatible con la misma evidencia. Evalúa cuál encaja mejor y por qué.
5. Asigna a cada inferencia e hipótesis un nivel de confianza
(ALTA / MEDIA / BAJA) justificado en una línea: qué evidencia la
sostiene y qué la debilita.
6. Las contradicciones abiertas: resuélvelas SOLO si la base aporta
criterio suficiente (rango de fuente, fecha, primariedad), indicando
por qué una versión prevalece. Si no, decláralas NO RESUELTAS y
trata ambas versiones como posibles en tu análisis.
7. Sé adversarial contigo mismo: para cada conclusión importante,
pregunta qué evidencia la refutaría y comprueba si existe en la base.
8. Prohibida la falsa precisión: no conviertas rangos en cifras exactas
ni estimaciones en datos.

# SALIDA EN MODO A
1. Análisis preliminar por bloques (identidad y estructura, actividad
real, dimensión, personas clave, reputación/menciones, tecnología):
hechos destacados, inferencias y primeras hipótesis.
2. Contradicciones: intento de resolución con justificación, o
declaración de no resueltas.
3. Hipótesis principales con nivel de confianza y explicación
alternativa.
4. ÓRDENES DE “Research” DIRIGIDO (formato obligatorio por orden):
- Pregunta: concreta y respondible.
- Por qué importa: qué conclusión, hipótesis o contradicción depende
de ella.
- Qué la resolvería: tipo de fuente o documento concreto.
- Ya intentado en fase 1: qué fuentes fallaron (si consta).
Solo órdenes que desbloqueen una conclusión; nada de "ampliar
información" genérico. Máximo 8, ordenadas por impacto.

# SALIDA EN MODO B
1. Resumen ejecutivo (máx. 10 líneas): qué es la empresa, los 3-5
hallazgos más relevantes y el grado de confianza global.
2. Perfil consolidado: identificación, estructura, actividad, dimensión,
personas clave, presencia digital, tecnología.
3. Hallazgos analíticos: inferencias con su cadena lógica y nivel de
confianza.
4. Hipótesis: estado final (reforzada / debilitada / refutada /
indeterminada) con la evidencia que lo motivó.
5. Cronología de eventos relevantes (si la base la sustenta).
6. Contradicciones: resueltas (con justificación) y no resueltas.
7. Limitaciones del informe: lagunas que permanecen, búsquedas con
resultado negativo y cómo afectan a las conclusiones.
8. Anexo de fuentes: las que sustentan cada sección.

# PROHIBIDO
- Presentar inferencias como hechos.
- Afirmaciones sin referencia a la base de evidencias.
- Resolver contradicciones silenciosamente.
- Suavizar la incertidumbre: si algo no se sabe, el informe dice que
no se sabe.
- En MODO A, generar el informe final ni conclusiones "provisionales
definitivas".

# MODO: {A o B}

# BASE DE EVIDENCIAS
[pegar aquí la base de evidencias]`;

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
              Hace unos días le pedí a dos modelos de lenguaje —GLM5.2 y Opus 5— que diseñaran la estrategia de redes sociales de una firma de construcción recién creada. La premisa era simple: cero presupuesto publicitario, crecimiento 100% orgánico, audiencia B2B en España y una sola persona gestionando todo. Lo que recibí fueron dos documentos que ilustran perfectamente la diferencia entre &quot;responder bien&quot; y &quot;responder bien a ti&quot;.
            </p>

            <h2>El brief: exactamente el mismo para ambos</h2>
            <ul>
              <li><strong>Empresa:</strong> Sector Construcción.</li>
              <li><strong>Situación:</strong> marca nueva, sin audiencia, sin casos publicables, sin equipo de marketing.</li>
              <li><strong>Restricciones:</strong> cero inversión en publicidad, voz corporativa institucional, perfil bilingüe único.</li>
              <li><strong>Objetivo:</strong> primera conversación comercial atribuible a redes en 90 días.</li>
              <li><strong>Recurso humano:</strong> una persona.</li>
            </ul>

            <h2>GLM5.2: el plan que suena profesional y es imposible de ejecutar</h2>
            <p>
              GLM5.2 entregó un documento de 13 secciones, impecablemente estructurado, con tablas, roadmaps, buyer personas y un calendario editorial lean. El problema: estaba diseñado para una empresa que ya existe.
            </p>
            <p>
              Propuso cuatro canales simultáneos desde el día uno (LinkedIn, YouTube, blog técnico y X), con un ritmo de 3 posts semanales + 1 vídeo mensual + 1 artículo quincenal. Recomendó mantener una voz &quot;puramente corporativa&quot; en perfiles institucionales, sin marca personal. Y definió un posicionamiento genérico —&quot;Reparaciones&quot;— que no se diferencia de ninguna otra empresa del mercado.
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
              <li>Posicionamiento concreto y defendible: &quot;hago reparaciones hidráulicas, presupuesto llave en mano&quot;.</li>
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
                  <td>Genérico: &quot;Reparaciones&quot;</td>
                  <td>Concreto: &quot;Especialistas en instalaciones hidráulicas&quot;</td>
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
              La primera conversación comercial atribuible a redes sociales llegó antes de los 90 días.
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
              A few days ago I asked two language models — GLM5.2 and Opus 5 — to design the social media strategy for a newly founded construction firm. The premise was straightforward: zero advertising budget, 100% organic growth, B2B audience in Spain, and one person managing everything. What I received were two documents that perfectly illustrate the difference between &quot;answering well&quot; and &quot;answering well for you.&quot;
            </p>

            <h2>The brief: exactly the same for both</h2>
            <ul>
              <li><strong>Company:</strong> Construction Sector.</li>
              <li><strong>Situation:</strong> new brand, no audience, no publishable case studies, no marketing team.</li>
              <li><strong>Constraints:</strong> zero ad spend, institutional corporate voice, single bilingual profile.</li>
              <li><strong>Goal:</strong> first commercial conversation attributable to social media within 90 days.</li>
              <li><strong>Human resource:</strong> one person.</li>
            </ul>

            <h2>GLM5.2: the plan that sounds professional and is impossible to execute</h2>
            <p>
              GLM5.2 delivered a 13-section document, impeccably structured, with tables, roadmaps, buyer personas, and a lean editorial calendar. The problem: it was designed for a company that already exists.
            </p>
            <p>
              It proposed four simultaneous channels from day one (LinkedIn, YouTube, technical blog, and X), at a pace of 3 posts weekly + 1 video monthly + 1 article every two weeks. It recommended maintaining a &quot;purely corporate&quot; voice on institutional profiles, no personal brand. And it defined a generic positioning — &quot;Repairs&quot; — that doesn't differentiate from any other company in the market.
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
              <li>Concrete, defensible positioning: &quot;I do hydraulic repairs, fixed-price quotes.&quot;</li>
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
                  <td>Generic: &quot;Repairs&quot;</td>
                  <td>Concrete: &quot;Hydraulic installation specialists&quot;</td>
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
              When you use AI for strategy, don't look for the most complete output. Look for the one that best answers: &quot;Can I execute this by myself tomorrow morning?&quot; If the answer is no, it doesn't matter how professional the document is: it's a plan for a different company.
            </p>
            <p>
              The first commercial conversation attributable to social media arrived before the 90 days were up.
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
  {
    slug: "automatizacion-extracto-bancario",
    date: "2026-09-13",
    category: { es: "Automatización", en: "Automation" },
    content: {
      es: {
        title: "Automatizar la conciliación de extractos bancarios en PDF",
        excerpt:
          "Un cliente insertaba a mano entre 10 y 15 movimientos bancarios al día en su ERP. Un script de conciliación se lo redujo a un clic.",
        body: (
          <>
            <h2>Caso de negocio</h2>
            <p>
              El cliente procesaba a mano los extractos que recibía de su
              banco en formato PDF. Cada movimiento había que insertarlo
              manualmente en el ERP y, después, comprobar que el saldo
              inicial y el final cuadraban. El proceso en sí era sencillo,
              pero tedioso: cinco campos por movimiento, entre 10 y 15 líneas
              al día, con el riesgo de error que trae el cansancio de repetir
              la misma tarea decenas de veces.
            </p>
            <h2>Solución propuesta</h2>
            <p>
              Un script en Python que lee directamente los archivos PDF e
              inserta los registros en el ERP, ejecutado a demanda del
              usuario cuando le llega un extracto nuevo.
            </p>
            <h2>Aplicación desarrollada</h2>
            <p>
              Una app de escritorio, para Windows y Mac, con este aspecto:
            </p>
            <img
              src="/blog/automatizacion-extracto-bancario-app.png"
              alt="Interfaz de la app de conciliación de extractos bancarios"
            />
            <ul>
              <li>El usuario elige la carpeta donde guarda los PDFs a procesar.</li>
              <li>La aplicación detecta el contenido de cada PDF, identifica a qué tabla corresponde (cada extracto está vinculado a un número de cuenta) y cuántas líneas tiene.</li>
              <li>Si al procesar el extracto encuentra líneas que ya estaban insertadas en el ERP, el sistema no las duplica.</li>
              <li>La app informa cuántas líneas ha volcado, cuántas ha descartado por estar repetidas, y confirma al usuario cuándo el proceso ha terminado.</li>
            </ul>
            <h2>Tiempo y dinero ahorrados</h2>
            <p>
              El cliente procesaba unas 50 líneas por semana, con un coste en
              tiempo de una hora. La automatización le ahorra unas 4
              horas al mes, el equivalente a unos 300 euros de coste
              empresa.
            </p>
          </>
        ),
      },
      en: {
        title: "Automating bank statement reconciliation from PDF",
        excerpt:
          "A client was manually entering 10 to 15 bank transactions a day into their ERP. A reconciliation script turned that into a single click.",
        body: (
          <>
            <h2>Business case</h2>
            <p>
              The client manually processed the bank statements they
              received in PDF format. Every transaction had to be entered by
              hand into the ERP, then checked so the opening and closing
              balances matched. The process itself was simple but tedious:
              five fields per transaction, 10 to 15 lines a day, with the
              error risk that comes from repeating the same task dozens of
              times while tired.
            </p>
            <h2>Proposed solution</h2>
            <p>
              A Python script that reads the PDF files directly and inserts
              the records into the ERP, run on demand whenever the user
              receives a new statement.
            </p>
            <h2>The application</h2>
            <p>A desktop app, for Windows and Mac, that looks like this:</p>
            <img
              src="/blog/automatizacion-extracto-bancario-app.png"
              alt="Bank statement reconciliation app interface"
            />
            <ul>
              <li>The user picks the folder where the PDFs to process are saved.</li>
              <li>The app reads each PDF, identifies which table it belongs to (each statement is linked to an account number) and how many lines it contains.</li>
              <li>If it finds lines already inserted in the ERP, the system skips them instead of duplicating them.</li>
              <li>The app reports how many lines it inserted, how many it skipped as duplicates, and confirms to the user once the process is complete.</li>
            </ul>
            <h2>Time and money saved</h2>
            <p>
              The client was processing about 50 lines a week, at a cost of
              one hour of work. The automation saves roughly 4 hours a
              month — about 300 euros in company cost.
            </p>
          </>
        ),
      },
    },
  },
  {
    slug: "osint-con-llm-investigador-analista",
    date: "2026-10-20",
    category: { es: "Inteligencia", en: "Intelligence" },
    content: {
      es: {
        title: "OSINT con LLM: el patrón investigador → analista (con los prompts completos)",
        excerpt:
          "Pedirle a un modelo un informe OSINT en una sola llamada da textos convincentes pero no verificables. Separar investigación y razonamiento en dos agentes lo soluciona.",
        body: (
          <>
            <p>Pedirle a un modelo de lenguaje &quot;hazme un informe OSINT sobre esta empresa&quot; en una sola llamada es el método adecuado para obtener un texto convincente, bien redactado y posiblemente falso en puntos que no podrás detectar. El problema no es el modelo: es la arquitectura. Le estás pidiendo que haga dos trabajos incompatibles a la vez (recopilar evidencia verificable y razonar sobre ella) sin que ninguno de los dos quede trazado.</p>
            <p>Después de algún fracaso, he dado con una estructura que resuelve esto separando los dos roles en dos agentes: uno que solo investiga y documenta, y otro que solo razona sobre lo documentado. Como agente &quot;Research&quot; estoy usando Atria Dawn y como agente &quot;Reasoning&quot; Opus 5.5, ambos son los mejores según los rankings de llm-stats. En este artículo comparto el proceso completo y los dos prompts tal como los uso, para que puedas ejecutarlo con cualquier modelo que tenga acceso a internet.</p>

            <h2>La idea central: investigar primero, razonar después</h2>
            <p>Para un informe OSINT basado en fuentes de internet, la capacidad más valorada en un LLM es el &quot;Research&quot; bien hecho: encontrar fuentes, consultarlas de verdad, rastrear la original y aportar referencias verificables. El &quot;Reasoning&quot; es lo segundo: convertir lo encontrado en análisis sólido.</p>
            <p>Un modelo que razona muy bien pero busca mal produce explicaciones elegantes sobre premisas falsas. Uno que busca bien pero razona poco produce una lista de enlaces, no inteligencia. Por eso el pipeline separa ambas funciones:</p>
            <p><strong>“Research” → Análisis preliminar → Detección de lagunas → “Research” dirigido → Informe final</strong></p>
            <p>El punto crítico del diseño no son los modelos, sino el artefacto intermedio: lo que el primer agente le entrega al segundo no debe ser una narrativa pulida, sino una base de evidencias estructurada. Una narrativa bonita &quot;contrabandea&quot; supuestos que el analista heredará como si fueran hechos, y no tendrá forma de detectarlo.</p>

            <h2>Fase 1: el agente de recolección</h2>
            <p>Este es el prompt completo del agente “Research”:</p>
            <pre><code>{osintPromptResearch}</code></pre>
            <p>Tres decisiones de diseño que vale la pena entender:</p>
            <ul>
              <li><strong>La sección PROHIBIDO no es opcional.</strong> Los LLM tienden a derivar hacia el análisis porque es el patrón dominante de su entrenamiento. Sin prohibición explícita, el agente &quot;mejorará&quot; el entregable con interpretaciones que la fase siguiente heredará como hechos.</li>
              <li><strong>Las secciones 8 y 9 son las de mayor valor.</strong> Cualquier búsqueda superficial produce las secciones 1 a 6. Lo que distingue una base de evidencias útil es que documente qué se contradice y qué falta: eso es exactamente lo que el analista necesita para generar hipótesis y órdenes de búsqueda dirigida.</li>
              <li><strong>Rellena los identificadores conocidos.</strong> Si partes solo del nombre comercial, la primera tarea del agente es resolución de identidad (homónimos, filiales, marcas vs. sociedades). Con CIF o dominio evitas el error más común de todo el pipeline: investigar a la empresa equivocada.</li>
            </ul>

            <h2>Fase 2: el “Research” dirigido</h2>
            <p>Aquí está el secreto del proceso: el análisis no es el final, es el motor de una segunda investigación. El agente analista no devuelve &quot;falta información sobre X&quot;, sino órdenes de búsqueda estructuradas con pregunta concreta, por qué importa, qué fuente la resolvería y qué ya se intentó. Una orden sin &quot;por qué importa&quot; se rechaza: cada búsqueda debe estar justificada por una conclusión pendiente.</p>
            <p>El trabajo dirigido es de cuatro tipos, en orden de prioridad:</p>
            <ol>
              <li><strong>Resolver contradicciones abiertas.</strong> No buscar más instancias del mismo dato, sino la fuente que puede dirimir. Si el registro dice 50 empleados y LinkedIn 200, la pregunta no es &quot;¿cuántos empleados tiene?&quot; sino &quot;¿cuál de estas fuentes es más reciente y de mayor rango?&quot;. En España, el BORME y el Registro Mercantil dirimen la mayoría de estas disputas.</li>
              <li><strong>Cerrar lagunas priorizadas.</strong> Solo las que bloquean una conclusión, no todas.</li>
              <li><strong>Falsear hipótesis.</strong> Por cada hipótesis (&quot;la empresa parece estar contrayéndose&quot;), buscar activamente evidencia en contra: ofertas de empleo activas, nuevas sedes, lanzamientos…</li>
              <li><strong>Tirar de los hilos.</strong> Búsqueda cruzada: persona → otras sociedades, dirección → otras empresas en el mismo domicilio, dominio → otros dominios del titular.</li>
            </ol>
            <p>Reglas específicas de esta fase: documentar las búsquedas negativas (&quot;no constan sanciones en las fuentes consultadas&quot; es un hallazgo válido), presupuesto de esfuerzo por pregunta (si tras varios intentos bien elegidos no aparece, la laguna se declara inaccesible y se sigue adelante), y entregar como salida una actualización de la base original: un merge, no un documento nuevo.</p>
            <p>Criterio de parada: el ciclo se cierra cuando las preguntas restantes no afectan a ninguna conclusión, o cuando las búsquedas empiezan a devolver siempre las mismas fuentes. En la práctica, una o dos vueltas bien ejecutadas agotan el valor.</p>

            <h2>Fase 3: el agente analista</h2>
            <p>Este prompt tiene dos modos: en MODO A produce el análisis preliminar y las órdenes de “Research” dirigido; en MODO B, con la base actualizada, genera el informe final:</p>
            <pre><code>{osintPromptAnalista}</code></pre>

            <h2>Cómo se ejecuta en la práctica</h2>
            <p>La primera pasada con MODO: A y la base original. Sus órdenes de “Research” se las pasas al primer prompt como instrucción específica. Cuando vuelve la base actualizada, segunda pasada con MODO: B y la base completa, no solo el delta, para que razone con todo el contexto.</p>
            <p>Dos advertencias de uso. La regla 1 es la que más se viola: los modelos &quot;saben&quot; cosas sobre empresas y tienden a mezclar ese conocimiento con la evidencia. Si aparece un dato que no está en la base, no lo edites a mano: devuélveselo señalando el punto exacto y pide la corrección, porque así detectas si el fallo es sistémico. Y la sección de limitaciones es importante: si el informe final llega sin limitaciones sustantivas, cuidado. O el modelo las ha ocultado o la base de evidencias era pobre y no se registró.</p>

            <h2>Cómo validar el resultado</h2>
            <p>Una regla práctica para auditar cualquier informe producido así: toma el informe final, borra las conclusiones e intenta reconstruirlas únicamente con la base de evidencias. Si no puedes, el problema está en la recolección, no en el razonamiento, así ya sabes dónde invertir la siguiente iteración.</p>
          </>
        ),
      },
      en: {
        title: "OSINT with LLMs: the researcher → analyst pattern (with the full prompts)",
        excerpt:
          "Asking a model for an OSINT report in a single call gives convincing but unverifiable text. Splitting research and reasoning across two agents fixes it.",
        body: (
          <>
            <p>Asking a language model for &quot;an OSINT report on this company&quot; in a single call gives you a convincing, well-written text that may be false in places you cannot detect. The problem is not the model, it is the architecture: you are asking it to do two incompatible jobs at once (collect verifiable evidence and reason about it) without either one being traceable.</p>
            <p>After some failures, I found a structure that solves this by splitting the two roles across two agents: one that only researches and documents, and one that only reasons about what was documented. I use Atria Dawn as the &quot;Research&quot; agent and Opus 5.5 as the &quot;Reasoning&quot; agent; both rank at the top of the llm-stats leaderboards. This article shares the full process and both prompts exactly as I use them, so you can run it with any model that has internet access.</p>

            <h2>The core idea: research first, reason later</h2>
            <p>For an OSINT report based on internet sources, the most valuable capability in an LLM is good research: finding sources, actually consulting them, tracing the original and providing verifiable references. Reasoning comes second: turning what was found into solid analysis.</p>
            <p>A model that reasons very well but searches badly produces elegant explanations built on false premises. One that searches well but reasons little produces a list of links, not intelligence. That is why the pipeline separates both functions:</p>
            <p><strong>“Research” → Preliminary analysis → Gap detection → Targeted “Research” → Final report</strong></p>
            <p>The critical design point is not the models but the intermediate artifact: what the first agent hands to the second must not be a polished narrative, but a structured evidence base. A nice narrative smuggles in assumptions that the analyst will inherit as if they were facts, with no way to detect it.</p>

            <h2>Phase 1: the collection agent</h2>
            <p>This is the full prompt for the “Research” agent (kept in Spanish, as I use it):</p>
            <pre><code>{osintPromptResearch}</code></pre>
            <p>Three design decisions worth understanding:</p>
            <ul>
              <li><strong>The PROHIBIDO section is not optional.</strong> LLMs drift toward analysis because it is the dominant pattern in their training. Without an explicit prohibition, the agent will &quot;improve&quot; the deliverable with interpretations the next phase will inherit as facts.</li>
              <li><strong>Sections 8 and 9 are the most valuable.</strong> Any shallow search produces sections 1 to 6. What makes an evidence base useful is that it documents what contradicts and what is missing: exactly what the analyst needs to generate hypotheses and targeted search orders.</li>
              <li><strong>Fill in the known identifiers.</strong> If you start only from the trade name, the agent's first task is identity resolution (namesakes, subsidiaries, brands vs. legal entities). With a tax ID or domain you avoid the most common error in the whole pipeline: researching the wrong company.</li>
            </ul>

            <h2>Phase 2: targeted “Research”</h2>
            <p>Here is the secret of the process: analysis is not the end, it is the engine of a second round of research. The analyst agent does not return &quot;information is missing about X&quot;; it returns structured search orders with a concrete question, why it matters, which source would resolve it, and what has already been tried. An order without &quot;why it matters&quot; is rejected: every search must be justified by a pending conclusion.</p>
            <p>Targeted work falls into four types, in priority order:</p>
            <ol>
              <li><strong>Resolve open contradictions.</strong> Do not look for more instances of the same data point, but for the source that can settle it. If the registry says 50 employees and LinkedIn says 200, the question is not &quot;how many employees does it have?&quot; but &quot;which of these sources is more recent and of higher rank?&quot;. In Spain, the BORME and the Commercial Registry settle most of these disputes.</li>
              <li><strong>Close prioritised gaps.</strong> Only those that block a conclusion, not all of them.</li>
              <li><strong>Try to falsify hypotheses.</strong> For each hypothesis (&quot;the company seems to be shrinking&quot;), actively look for counter-evidence: active job postings, new offices, launches…</li>
              <li><strong>Pull the threads.</strong> Cross-searching: person → other companies, address → other companies at the same address, domain → other domains owned by the same holder.</li>
            </ol>
            <p>Specific rules for this phase: document negative searches (&quot;no sanctions found in the sources consulted&quot; is a valid finding), a budget of effort per question (if several well-chosen attempts turn up nothing, the gap is declared inaccessible and you move on), and as output an update of the original base: a merge, not a new document.</p>
            <p>Stopping criterion: the cycle closes when the remaining questions affect no conclusion, or when searches keep returning the same sources. In practice, one or two well-run rounds exhaust the value.</p>

            <h2>Phase 3: the analyst agent</h2>
            <p>This prompt has two modes: in MODE A it produces the preliminary analysis and the targeted “Research” orders; in MODE B, with the updated base, it produces the final report:</p>
            <pre><code>{osintPromptAnalista}</code></pre>

            <h2>How it runs in practice</h2>
            <p>The first pass uses MODE: A and the original base. Its “Research” orders are passed to the first prompt as a specific instruction. When the updated base comes back, a second pass uses MODE: B with the full base, not just the delta, so the model reasons with the complete context.</p>
            <p>Two usage warnings. Rule 1 is the one most often broken: models &quot;know&quot; things about companies and tend to mix that knowledge with the evidence. If a fact appears that is not in the base, do not edit it by hand: send it back pointing to the exact spot and ask for a correction, because that shows whether the failure is systemic. And the limitations section matters: if the final report comes back with no substantive limitations, be careful. Either the model hid them or the evidence base was poor and nothing was recorded.</p>

            <h2>How to validate the result</h2>
            <p>A practical rule for auditing any report produced this way: take the final report, delete its conclusions and try to rebuild them using only the evidence base. If you cannot, the problem lies in collection, not reasoning, so you know where to invest the next iteration.</p>
          </>
        ),
      },
    },
  },
  {
    slug: "ia-automatizaciones-usarla-bien",
    date: "2026-10-26",
    category: { es: "Automatización", en: "Automation" },
    content: {
      es: {
        title: "IA y automatizaciones: usarla es una cosa, usarla bien es otra",
        excerpt:
          "Un cliente quería que la IA generara un Excel cada día. La clave no es usarla más, sino saber en qué fase conviene retirarla.",
        body: (
          <>
            <p><strong>Usar la IA es una cosa; usarla bien, otra totalmente distinta.</strong></p>
            <p>Cita hoy con un cliente potencial. Una asesoría laboral, fiscal y algunas cosas más. Gestión y asesoramiento. La primera, IA terreno abonado, la segunda aún en barbecho (soy conservador y prudente). Primero escucho: &quot;…ya sabes, en este campo hay que tener cuidado con los datos de clientes y la ley de protección de datos…bla bla&quot;. Que ayer publicaran el enésimo hackeo de este mes, no ayuda mucho para hablar de una tecnología que el común de los mortales no entiende. &quot;A mí es que estas cosas me dan miedo, no sabes quién está detrás y no sabes a dónde van los datos&quot;. En este punto puedes empezar a desplegar tu arsenal de argumentos para ir endulzando el café amargo que te han servido, pero es mejor seguir escuchando y asintiendo. Pero en medio de la letanía, una luz entre tinieblas, emerge Claude en su versión pro. Presto atención y me pongo ya en modo francotirador.</p>
            <p>Esta asesoría emplea la IA, ya es algo, y además el &quot;más despierto&quot; del equipo está configurando un &quot;no sé qué&quot; que recibe un Excel y hace otro muy rápido y como queremos. Perfecto, avisemos al crack y revisemos qué está haciendo dado que el propietario del negocio no está al tanto.</p>
            <p>Después de una breve presentación, el más despierto me abre las puertas de Claude y me explica con detalle el proceso. Un proyecto, con su chat en el que ha ido iterando y preguntando y en el que va desentrañando a pasitos cómo debe quedar el producto final. La idea es que, como se repite continuamente y para todos los clientes, todos los empleados puedan usar este proyecto para generar el Excel sobre el que ya se tomarán las decisiones. Fin de la presentación. De momento no hay producto. Sólo una buena idea que seguramente desemboque, en el mejor de los casos, en un Excel que hasta pueda utilizarse. Menos mal que ese día Claude no estaba en modo ventas para ofrecerle un script en Python, un taxi dando vueltas por la M-30 hasta que te quedas sin dinero (o tokens).</p>
            <p>Es el momento de preguntar de nuevo. ¿Cómo vas a utilizarlo en el día a día? Respuesta: &quot;le daré los datos y él me irá respondiendo cuando le pregunte y me dará ya mi Excel hecho&quot;. En este punto, puedes hundirte o armarte de valor para explicarle que su idea es acertada pero la manera de ejecutarla es un desastre. Me callo y mejor no hablo de la ventana de contexto, procesos deterministas, costes en tokens de repetir lo mismo mil veces, etc. En cambio, le alabo la intención, le explico que su conocimiento funcional es la base del éxito y que, sin darse cuenta, ya está elaborando un PDR y un prefuncional de algo que su empresa necesita y que le reportará un ahorro considerable en tiempo y en dinero a su jefe, que además es el propietario.</p>
            <p>No es la primera vez que uno observa este patrón de uso de la IA en los negocios. Pero lo normal en las empresas pequeñas y medianas no es contar con personas que se han dedicado al desarrollo de software. Ni el más despierto de los usuarios será capaz de desplegar soluciones adecuadas, eficientes, escalables y confiables sin la ayuda de empresas o profesionales que traduzcan esas ideas en productos que permitan ofrecer una solución real a un problema de automatización planteado. O al menos, no de momento.</p>
            <p>El fin de esta historia es feliz. Ojo, porque no necesariamente terminan así todas.</p>
            <ul>
              <li>El propietario se quedó muy tranquilo al saber que la IA, en este caso, sólo va a intervenir para crear un producto y que, dentro de este proceso, no la íbamos a usar más. Y más tranquilo aún quedó al conocer el bendito ahorro por no repetir sine die tantas veces la misma cosa. Además, y al trabajar en local, podíamos usar los datos del cliente para que el entregable final no requiriese de la intervención humana que pusiera la guinda al pastel.</li>
              <li>El &quot;despierto&quot; quedó entusiasmado por los elogios a su idea y a su trabajo, y se ganó el puesto de usuario clave (de momento, en ese proceso de negocio).</li>
            </ul>
            <p>Y yo, en mi caso, salí satisfecho por no haber herido la sensibilidad de nadie y por haber conseguido, con paciencia y humildad, una primera prueba de fuego en un nuevo cliente.</p>
            <p><em>Álvaro Guillén</em></p>

            <h2>Resumen académico</h2>
            <ol>
              <li><strong>Distinguir el uso de la IA como producto y como herramienta de producción.</strong> Cuando el proceso es determinista, la inteligencia artificial resulta más valiosa como constructora de la automatización que como ejecutora recurrente. Generar una vez el código a partir de la descripción funcional y de ejemplos reales traslada el coste de IA de recurrente a puntual, mejora la reproducibilidad y reduce la exposición de datos personales, un aspecto crítico en el marco del RGPD.</li>
              <li><strong>Tratar el prototipo como especificación.</strong> El proyecto en Claude, con su historial de iteraciones, es un documento de requisitos de facto: contiene los criterios de negocio ya validados. Su valor no está en reutilizarlo tal cual, sino en formalizarlo (entradas, reglas, salidas esperadas) y contrastarlo con casos reales mediante pruebas de regresión antes de sustituirlo.</li>
              <li><strong>Acotar el piloto.</strong> Con un universo potencial de cientos de procesos, el piloto debe limitarse a un conjunto reducido (entre cinco y diez) seleccionado por frecuencia de ejecución, tiempo por ejecución y estabilidad del formato de entrada. Este enfoque permite que los patrones comunes emerjan de la práctica, en lugar de diseñarlos a priori, y evita la sobreingeniería.</li>
              <li><strong>El piloto puede hacerse con una aplicación de escritorio en Python</strong> que sirva para hacer creer al cliente. Partido a partido, ya habrá tiempo de pensar en la escalabilidad.</li>
              <li><strong>Gestionar el factor humano.</strong> Los usuarios que impulsan estas iniciativas poseen el conocimiento funcional más valioso. Reconocer su aportación y asignarles un papel formal (usuario clave, responsable funcional del proceso) no es solo cortesía: es una condición de éxito, porque son quienes validarán las reglas y sostendrán la adopción.</li>
              <li><strong>Criterios de éxito del piloto.</strong> Un piloto bien planteado debería medirse por la concordancia con los resultados previos, el ahorro de tiempo por ejecución, el coste evitado frente al uso recurrente de IA y la facilidad con la que un segundo y un tercer proceso se incorporan al mismo esquema.</li>
            </ol>
            <p>En síntesis, usar la IA es sencillo; usarla bien consiste en saber en qué fase del ciclo aporta más valor y en qué fase conviene retirarla.</p>
            <p><em>Sonnet 5 y Álvaro Guillén</em></p>
          </>
        ),
      },
      en: {
        title: "AI and automation: using it is one thing, using it well is another",
        excerpt:
          "A client wanted AI to produce an Excel file every day. The key is not using it more, but knowing when to withdraw it.",
        body: (
          <>
            <p><strong>Using AI is one thing; using it well is a completely different thing.</strong></p>
            <p>Today I have a meeting with a prospective client: a labour and tax advisory firm, plus a few other services. Management and advisory. The first one, AI, is fertile ground; the second is still fallow (I am conservative and cautious). First I listen: &quot;…you know, in this field you have to be careful with client data and data protection law…blah blah&quot;. Having the umpteenth hack of the month published yesterday does not help when you are talking about a technology the average person does not understand. &quot;These things scare me, you don't know who is behind them and you don't know where the data goes.&quot; At this point you could start deploying your arsenal of arguments to sweeten the bitter coffee you have been served, but it is better to keep listening and nodding. Then, in the middle of the litany, a light in the darkness: Claude, in its pro version, emerges. I pay attention and switch straight into sniper mode.</p>
            <p>This advisory firm already uses AI, which is something, and the &quot;sharpest&quot; person on the team is setting up a &quot;something&quot; that takes an Excel file and produces another one very quickly, exactly as we want. Perfect: let's tell the whiz kid and review what they are doing, since the business owner is not aware of it.</p>
            <p>After a brief introduction, the sharpest person opens their Claude account for me and explains the process in detail. A project, with its chat in which they have been iterating and asking questions, gradually working out step by step what the final product should look like. The idea is that, since it repeats continuously and for every client, all employees can use this project to generate the Excel file on which decisions will then be made. End of the presentation. For now there is no product. Just a good idea that will probably end, in the best case, in an Excel file that might actually be usable. Thank goodness Claude was not in sales mode that day, or it would have offered them a Python script, a taxi driving round the M-30 until you run out of money (or tokens).</p>
            <p>Time to ask again. How are you going to use it day to day? The answer: &quot;I'll give it the data, it will answer my questions as I ask them, and it will give me my Excel file ready made.&quot; At this point you can either sink or summon the courage to explain that the idea is sound but the way it is being executed is a disaster. I keep quiet and do not bring up the context window, deterministic processes, the token cost of repeating the same thing a thousand times, and so on. Instead, I praise the intention, explain that their functional knowledge is the foundation of success and that, without realising it, they are already drafting a PDR and a pre-functional spec for something the company needs, which will save its owner, who is also their boss, a considerable amount of time and money.</p>
            <p>This is not the first time one has seen this pattern of AI use in businesses. But small and medium-sized companies do not usually have people who have worked in software development. Not even the sharpest user will be able to deploy solutions that are adequate, efficient, scalable and reliable without the help of companies or professionals who turn those ideas into products that provide a real solution to the automation problem at hand. Or at least, not yet.</p>
            <p>This story has a happy ending. Mind you, not all of them end this way.</p>
            <ul>
              <li>The owner was very reassured to learn that AI, in this case, would only be involved in creating a product and that, within this process, we would not use it any further. And they were even more reassured to learn about the blessed savings from not repeating the same task over and over, ad infinitum. Moreover, since we were working locally, we could use the client's data so that the final deliverable would not require human intervention, which was the icing on the cake.</li>
              <li>The &quot;sharp one&quot; was delighted by the praise for their idea and their work, and earned the role of key user (for now, in that business process).</li>
            </ul>
            <p>As for me, I left satisfied, having not hurt anyone's feelings and having achieved, with patience and humility, a first real test with a new client.</p>
            <p><em>Álvaro Guillén</em></p>

            <h2>Academic summary</h2>
            <ol>
              <li><strong>Distinguish between AI as a product and AI as a production tool.</strong> When the process is deterministic, artificial intelligence is more valuable as the builder of the automation than as its recurring executor. Generating the code once, from the functional description and real examples, shifts the AI cost from recurring to one-off, improves reproducibility and reduces the exposure of personal data, a critical concern under the GDPR.</li>
              <li><strong>Treat the prototype as a specification.</strong> The project in Claude, with its history of iterations, is a de facto requirements document: it contains the business criteria already validated. Its value lies not in reusing it as it is, but in formalising it (inputs, rules, expected outputs) and checking it against real cases through regression tests before replacing it.</li>
              <li><strong>Limit the pilot.</strong> With a potential universe of hundreds of processes, the pilot should be restricted to a small set (between five and ten) selected by frequency of execution, time per execution and stability of the input format. This approach lets common patterns emerge from practice, rather than designing them in advance, and avoids over-engineering.</li>
              <li><strong>The pilot can be built as a Python desktop application</strong> that convinces the client. One step at a time: there will be time to think about scalability later.</li>
              <li><strong>Manage the human factor.</strong> The users who drive these initiatives hold the most valuable functional knowledge. Recognising their contribution and giving them a formal role (key user, functional owner of the process) is not just courtesy: it is a condition for success, because they are the ones who will validate the rules and sustain adoption.</li>
              <li><strong>Pilot success criteria.</strong> A well-designed pilot should be measured by its agreement with previous results, the time saved per execution, the cost avoided compared with recurring AI use, and how easily a second and third process can be added to the same scheme.</li>
            </ol>
            <p>In short, using AI is easy; using it well means knowing in which phase of the cycle it adds the most value and in which phase it should be withdrawn.</p>
            <p><em>Sonnet 5 and Álvaro Guillén</em></p>
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
