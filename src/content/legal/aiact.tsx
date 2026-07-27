import type { Locale } from "@/i18n/config";

// Política de Uso Responsable de la IA — source: docs/AI ACT.md (ES), EN translation.
// Holder: Fawalt Investment S.L., NIF B16870008, Madrid.
// Do not edit the legal meaning without PO/legal review.

export const aiActUpdatedAt = {
  es: "Última actualización: 25 de julio de 2026",
  en: "Last updated: July 25, 2026",
};

export const aiActTitle = {
  es: "Política de Uso Responsable de la Inteligencia Artificial",
  en: "Responsible Artificial Intelligence Use Policy",
};

export const aiActMetaDescription = {
  es: "Política de uso responsable de IA de Nortex Systems — principios, supervisión humana y cumplimiento.",
  en: "Nortex Systems responsible AI use policy — principles, human oversight and compliance.",
};

export const aiActSections: Record<
  Locale,
  { title: string; body: React.ReactNode }[]
> = {
  es: [
    {
      title: "1. Compromiso",
      body: (
        <>
          <p>
            En <strong>FAWALT INVESTMENT S.L.</strong> creemos que la Inteligencia
            Artificial constituye una herramienta para potenciar la innovación, la
            productividad y la toma de decisiones, siempre bajo los principios de
            responsabilidad, transparencia y supervisión humana.
          </p>
          <p>
            Nuestro compromiso es desarrollar, integrar y utilizar sistemas de IA de
            forma ética, segura y conforme a la legislación aplicable.
          </p>
        </>
      ),
    },
    {
      title: "2. Principios",
      body: (
        <>
          <p>
            Toda solución basada en Inteligencia Artificial desarrollada o utilizada
            por FAWALT INVESTMENT S.L. se guía por los siguientes principios:
          </p>
          <ul>
            <li>Legalidad.</li>
            <li>Transparencia.</li>
            <li>Seguridad.</li>
            <li>Protección de datos personales.</li>
            <li>Supervisión humana.</li>
            <li>No discriminación.</li>
            <li>Robustez técnica.</li>
            <li>Mejora continua.</li>
          </ul>
        </>
      ),
    },
    {
      title: "3. Supervisión humana",
      body: (
        <p>
          Las soluciones de Inteligencia Artificial empleadas por FAWALT INVESTMENT
          S.L. están diseñadas para asistir a las personas, no para sustituir el
          criterio profesional cuando éste resulte necesario. Siempre que la
          naturaleza del servicio lo requiera, las decisiones relevantes serán
          revisadas y validadas por personal cualificado.
        </p>
      ),
    },
    {
      title: "4. Transparencia",
      body: (
        <p>
          Cuando un contenido, recomendación, análisis o resultado haya sido
          generado total o parcialmente mediante sistemas de Inteligencia
          Artificial, procuraremos informar de ello cuando resulte relevante para el
          usuario. Nuestro objetivo es que los usuarios comprendan cuándo interactúan
          con herramientas de IA y cuáles son sus capacidades y limitaciones.
        </p>
      ),
    },
    {
      title: "5. Protección de datos",
      body: (
        <p>
          El tratamiento de datos personales mediante herramientas de Inteligencia
          Artificial se realizará respetando el Reglamento (UE) 2016/679 (RGPD), la
          Ley Orgánica 3/2018 (LOPDGDD) y cualquier otra normativa aplicable. Los
          datos personales únicamente serán tratados cuando exista una base jurídica
          válida para ello y aplicando medidas técnicas y organizativas adecuadas
          para garantizar su seguridad.
        </p>
      ),
    },
    {
      title: "6. Calidad y limitaciones",
      body: (
        <>
          <p>
            Aunque los sistemas de Inteligencia Artificial ofrecen un elevado nivel
            de precisión, pueden producir resultados incompletos, inexactos o no
            actualizados. Por este motivo:
          </p>
          <ul>
            <li>Los resultados deben entenderse como apoyo a la toma de decisiones.</li>
            <li>No sustituyen el asesoramiento profesional cuando éste sea necesario.</li>
            <li>Recomendamos verificar la información crítica antes de adoptar decisiones relevantes.</li>
          </ul>
        </>
      ),
    },
    {
      title: "7. Uso responsable por parte de los usuarios",
      body: (
        <>
          <p>
            Los usuarios se comprometen a utilizar los servicios basados en
            Inteligencia Artificial de forma responsable y conforme a la legislación
            vigente. Queda prohibido utilizar nuestros sistemas para:
          </p>
          <ul>
            <li>Actividades ilícitas.</li>
            <li>Fraude.</li>
            <li>Difusión de contenido ilegal.</li>
            <li>Vulneración de derechos de terceros.</li>
            <li>Desarrollo o distribución de software malicioso.</li>
            <li>Generación de contenidos que fomenten la violencia, el odio o la discriminación.</li>
          </ul>
          <p>
            FAWALT INVESTMENT S.L. podrá limitar o suspender el acceso a aquellos
            usuarios que incumplan estas normas.
          </p>
        </>
      ),
    },
    {
      title: "8. Seguridad",
      body: (
        <p>
          Adoptamos medidas técnicas y organizativas destinadas a proteger nuestros
          sistemas de Inteligencia Artificial frente a accesos no autorizados,
          manipulación, pérdida de información o usos indebidos. Asimismo, realizamos
          revisiones periódicas para mejorar la seguridad, fiabilidad y rendimiento
          de nuestras soluciones.
        </p>
      ),
    },
    {
      title: "9. Mejora continua",
      body: (
        <p>
          La Inteligencia Artificial evoluciona de forma constante. Por ello, FAWALT
          INVESTMENT S.L. revisa periódicamente sus procedimientos, metodologías y
          sistemas para adaptarlos a las mejores prácticas del sector, a la
          normativa vigente y a los avances tecnológicos.
        </p>
      ),
    },
    {
      title: "10. Cumplimiento normativo",
      body: (
        <>
          <p>FAWALT INVESTMENT S.L. desarrolla y utiliza soluciones de Inteligencia Artificial procurando cumplir con:</p>
          <ul>
            <li>Reglamento (UE) 2016/679 (RGPD).</li>
            <li>Ley Orgánica 3/2018 (LOPDGDD).</li>
            <li>Reglamento Europeo de Inteligencia Artificial (AI Act), en la medida en que resulte aplicable.</li>
            <li>Demás normativa nacional y europea relacionada con el uso responsable de tecnologías digitales.</li>
          </ul>
        </>
      ),
    },
    {
      title: "11. Contacto",
      body: (
        <p>
          Si desea realizar consultas sobre el uso de la Inteligencia Artificial en
          nuestros productos o servicios, puede ponerse en contacto con FAWALT
          INVESTMENT S.L. a través de los canales de contacto disponibles en este
          sitio web.
        </p>
      ),
    },
    {
      title: "12. Actualizaciones",
      body: (
        <p>
          La presente Política podrá modificarse para adaptarse a cambios
          legislativos, tecnológicos o a la evolución de nuestros servicios. La
          versión publicada en este sitio web será la vigente en cada momento.
        </p>
      ),
    },
  ],
  en: [
    {
      title: "1. Commitment",
      body: (
        <>
          <p>
            At <strong>FAWALT INVESTMENT S.L.</strong> we believe that Artificial
            Intelligence is a tool to enhance innovation, productivity and
            decision-making, always under the principles of responsibility,
            transparency and human oversight.
          </p>
          <p>
            Our commitment is to develop, integrate and use AI systems in an ethical,
            safe manner and in accordance with applicable legislation.
          </p>
        </>
      ),
    },
    {
      title: "2. Principles",
      body: (
        <>
          <p>
            Every Artificial Intelligence-based solution developed or used by FAWALT
            INVESTMENT S.L. is guided by the following principles:
          </p>
          <ul>
            <li>Lawfulness.</li>
            <li>Transparency.</li>
            <li>Security.</li>
            <li>Protection of personal data.</li>
            <li>Human oversight.</li>
            <li>Non-discrimination.</li>
            <li>Technical robustness.</li>
            <li>Continuous improvement.</li>
          </ul>
        </>
      ),
    },
    {
      title: "3. Human oversight",
      body: (
        <p>
          The Artificial Intelligence solutions used by FAWALT INVESTMENT S.L. are
          designed to assist people, not to replace professional judgment when
          necessary. Whenever the nature of the service requires it, relevant
          decisions shall be reviewed and validated by qualified personnel.
        </p>
      ),
    },
    {
      title: "4. Transparency",
      body: (
        <p>
          When content, a recommendation, an analysis or a result has been generated
          wholly or partially by Artificial Intelligence systems, we will endeavor to
          inform about it when relevant to the user. Our goal is for users to
          understand when they interact with AI tools and what their capabilities and
          limitations are.
        </p>
      ),
    },
    {
      title: "5. Data protection",
      body: (
        <p>
          The processing of personal data using Artificial Intelligence tools shall
          be carried out in compliance with Regulation (EU) 2016/679 (GDPR), Organic
          Law 3/2018 (LOPDGDD) and any other applicable regulations. Personal data
          shall only be processed when there is a valid legal basis for it and by
          applying appropriate technical and organizational measures to ensure its
          security.
        </p>
      ),
    },
    {
      title: "6. Quality and limitations",
      body: (
        <>
          <p>
            Although Artificial Intelligence systems offer a high level of accuracy,
            they may produce incomplete, inaccurate or outdated results. For this
            reason:
          </p>
          <ul>
            <li>Results should be understood as decision-making support.</li>
            <li>They do not replace professional advice when necessary.</li>
            <li>We recommend verifying critical information before making relevant decisions.</li>
          </ul>
        </>
      ),
    },
    {
      title: "7. Responsible use by users",
      body: (
        <>
          <p>
            Users undertake to use Artificial Intelligence-based services responsibly
            and in accordance with current legislation. It is prohibited to use our
            systems for:
          </p>
          <ul>
            <li>Illegal activities.</li>
            <li>Fraud.</li>
            <li>Dissemination of illegal content.</li>
            <li>Breach of third-party rights.</li>
            <li>Development or distribution of malicious software.</li>
            <li>Generation of content that encourages violence, hatred or discrimination.</li>
          </ul>
          <p>
            FAWALT INVESTMENT S.L. may limit or suspend access for users who breach
            these rules.
          </p>
        </>
      ),
    },
    {
      title: "8. Security",
      body: (
        <p>
          We adopt technical and organizational measures to protect our Artificial
          Intelligence systems against unauthorized access, manipulation, information
          loss or misuse. We also carry out periodic reviews to improve the security,
          reliability and performance of our solutions.
        </p>
      ),
    },
    {
      title: "9. Continuous improvement",
      body: (
        <p>
          Artificial Intelligence evolves constantly. Therefore, FAWALT INVESTMENT
          S.L. periodically reviews its procedures, methodologies and systems to
          adapt them to industry best practices, current regulations and
          technological advances.
        </p>
      ),
    },
    {
      title: "10. Regulatory compliance",
      body: (
        <>
          <p>FAWALT INVESTMENT S.L. develops and uses Artificial Intelligence solutions seeking to comply with:</p>
          <ul>
            <li>Regulation (EU) 2016/679 (GDPR).</li>
            <li>Organic Law 3/2018 (LOPDGDD).</li>
            <li>European Artificial Intelligence Regulation (AI Act), to the extent applicable.</li>
            <li>Other national and European regulations related to the responsible use of digital technologies.</li>
          </ul>
        </>
      ),
    },
    {
      title: "11. Contact",
      body: (
        <p>
          If you wish to make inquiries about the use of Artificial Intelligence in
          our products or services, you can contact FAWALT INVESTMENT S.L. through
          the contact channels available on this website.
        </p>
      ),
    },
    {
      title: "12. Updates",
      body: (
        <p>
          This Policy may be modified to adapt to legislative, technological changes
          or the evolution of our services. The version published on this website
          shall be the valid one at any given time.
        </p>
      ),
    },
  ],
};
