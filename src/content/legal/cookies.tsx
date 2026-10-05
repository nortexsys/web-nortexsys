import type { Locale } from "@/i18n/config";

// Política de Cookies — source: docs/COOKIES.md (ES), translated to EN.
// Controller: Fawalt Investment S.L., NIF B16870008, Madrid.
// Do not edit the legal meaning without PO/legal review.

export const cookiesUpdatedAt = {
  es: "Última actualización: 5 de octubre de 2026",
  en: "Last updated: October 5, 2026",
};

export const cookiesTitle = { es: "Política de Cookies", en: "Cookies Policy" };

export const cookiesMetaDescription = {
  es: "Política de cookies de nortexsys.com — tipos de cookies y gestión del consentimiento.",
  en: "Cookies policy of nortexsys.com — types of cookies and consent management.",
};

export const cookiesSections: Record<
  Locale,
  { title: string; body: React.ReactNode }[]
> = {
  es: [
    {
      title: "1. ¿Qué son las cookies?",
      body: (
        <p>
          Las cookies son pequeños archivos que un sitio web almacena en el
          dispositivo del usuario para facilitar la navegación, recordar
          preferencias y obtener información estadística.
        </p>
      ),
    },
    {
      title: "2. Responsable",
      body: (
        <p>
          <strong>FAWALT INVESTMENT S.L.</strong>
          <br />
          <strong>NIF:</strong> B16870008
          <br />
          <strong>Domicilio social:</strong> Calle Núñez de Balboa, 118, 1º I,
          28006 Madrid, España.
        </p>
      ),
    },
    {
      title: "3. Cookies utilizadas",
      body: (
        <>
          <p>
            Este sitio web utiliza <strong>cookies técnicas</strong>,
            necesarias para su funcionamiento (por ejemplo, seguridad o
            recordar tu elección sobre cookies), que no requieren
            consentimiento.
          </p>
          <p>
            Además, <strong>solo si las aceptas</strong> en el panel de
            cookies, utilizamos Google Analytics 4 para obtener estadísticas
            agregadas sobre el uso del sitio y mejorarlo:
          </p>
          <ul>
            <li>
              <strong>_ga</strong>: distingue usuarios de forma anónima.
              Duración: 2 años.
            </li>
            <li>
              <strong>_ga_&lt;ID&gt;</strong>: mantiene el estado de la
              sesión. Duración: 2 años.
            </li>
          </ul>
          <p>
            Proveedor: Google Ireland Limited. Los datos pueden tratarse en
            servidores de Google fuera del Espacio Económico Europeo bajo las
            garantías previstas en el RGPD. Google Analytics 4 no registra ni
            almacena direcciones IP. No utilizamos cookies de preferencias ni
            publicitarias.
          </p>
        </>
      ),
    },
    {
      title: "4. Cookies de terceros",
      body: (
        <p>
          Algunos servicios integrados en el sitio web (vídeos, mapas, herramientas
          de análisis o redes sociales) pueden instalar cookies de terceros. Cada
          proveedor dispone de su propia política de privacidad y cookies.
        </p>
      ),
    },
    {
      title: "5. Gestión del consentimiento",
      body: (
        <p>
          Al acceder al sitio se muestra un panel donde puedes aceptar o
          rechazar las cookies analíticas con la misma facilidad. Hasta que las
          aceptes no se carga Google Analytics ni se instala ninguna cookie
          analítica. Puedes cambiar o retirar tu consentimiento en cualquier
          momento desde el enlace «Preferencias de cookies» del pie de página;
          al rechazarlas se eliminan las cookies analíticas ya instaladas.
        </p>
      ),
    },
    {
      title: "6. Configuración del navegador",
      body: (
        <p>
          El usuario puede eliminar o bloquear las cookies desde la configuración de
          su navegador. La desactivación de determinadas cookies puede afectar al
          funcionamiento del sitio web.
        </p>
      ),
    },
    {
      title: "7. Conservación",
      body: (
        <p>
          Las cookies permanecerán instaladas durante el tiempo estrictamente
          necesario para cumplir la finalidad para la que fueron creadas o hasta que
          el usuario las elimine.
        </p>
      ),
    },
    {
      title: "8. Actualización",
      body: (
        <p>
          FAWALT INVESTMENT S.L. podrá modificar esta Política de Cookies para
          adaptarla a cambios legislativos, técnicos o funcionales del sitio web.
        </p>
      ),
    },
  ],
  en: [
    {
      title: "1. What are cookies?",
      body: (
        <p>
          Cookies are small files that a website stores on the user's device to
          facilitate navigation, remember preferences and obtain statistical
          information.
        </p>
      ),
    },
    {
      title: "2. Controller",
      body: (
        <p>
          <strong>FAWALT INVESTMENT S.L.</strong>
          <br />
          <strong>VAT number:</strong> B16870008
          <br />
          <strong>Registered office:</strong> Calle Núñez de Balboa, 118, 1º I,
          28006 Madrid, Spain.
        </p>
      ),
    },
    {
      title: "3. Cookies we use",
      body: (
        <>
          <p>
            This website uses <strong>technical cookies</strong>, necessary
            for it to work (for example, security or remembering your cookie
            choice), which do not require consent.
          </p>
          <p>
            In addition, <strong>only if you accept them</strong> in the
            cookie panel, we use Google Analytics 4 to obtain aggregated
            statistics about how the site is used and to improve it:
          </p>
          <ul>
            <li>
              <strong>_ga</strong>: distinguishes users anonymously.
              Duration: 2 years.
            </li>
            <li>
              <strong>_ga_&lt;ID&gt;</strong>: keeps session state.
              Duration: 2 years.
            </li>
          </ul>
          <p>
            Provider: Google Ireland Limited. Data may be processed on Google
            servers outside the European Economic Area under the safeguards
            provided for in the GDPR. Google Analytics 4 does not log or store
            IP addresses. We do not use preference or advertising cookies.
          </p>
        </>
      ),
    },
    {
      title: "4. Third-party cookies",
      body: (
        <p>
          Some services integrated into the website (videos, maps, analysis tools
          or social networks) may install third-party cookies. Each provider has
          its own privacy and cookies policy.
        </p>
      ),
    },
    {
      title: "5. Consent management",
      body: (
        <p>
          When you visit the site a panel lets you accept or reject analytics
          cookies with equal ease. Until you accept, Google Analytics is not
          loaded and no analytics cookie is installed. You can change or
          withdraw your consent at any time from the “Cookie settings” link in
          the footer; rejecting them deletes any analytics cookies already
          installed.
        </p>
      ),
    },
    {
      title: "6. Browser configuration",
      body: (
        <p>
          The user can delete or block cookies from their browser settings.
          Deactivating certain cookies may affect the operation of the website.
        </p>
      ),
    },
    {
      title: "7. Retention",
      body: (
        <p>
          Cookies will remain installed for the strictly necessary time to fulfill
          the purpose for which they were created or until the user deletes them.
        </p>
      ),
    },
    {
      title: "8. Updates",
      body: (
        <p>
          FAWALT INVESTMENT S.L. may modify this Cookies Policy to adapt it to
          legislative, technical or functional changes of the website.
        </p>
      ),
    },
  ],
};
