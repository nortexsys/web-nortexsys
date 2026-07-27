import type { Locale } from "@/i18n/config";

// Política de Cookies — source: docs/COOKIES.md (ES), translated to EN.
// Controller: Fawalt Investment S.L., NIF B16870008, Madrid.
// Do not edit the legal meaning without PO/legal review.

export const cookiesUpdatedAt = {
  es: "Última actualización: 25 de julio de 2026",
  en: "Last updated: July 25, 2026",
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
      title: "3. Tipos de cookies",
      body: (
        <>
          <h3 style={{ fontSize: "var(--fs-lg)", margin: "var(--sp-4) 0 var(--sp-2)" }}>Cookies técnicas</h3>
          <p>Son necesarias para el funcionamiento del sitio web y no requieren consentimiento. Permiten:</p>
          <ul>
            <li>Navegación.</li>
            <li>Gestión de sesiones.</li>
            <li>Seguridad.</li>
            <li>Preferencias básicas.</li>
          </ul>
          <h3 style={{ fontSize: "var(--fs-lg)", margin: "var(--sp-4) 0 var(--sp-2)" }}>Cookies de preferencias</h3>
          <p>Permiten recordar configuraciones elegidas por el usuario.</p>
          <h3 style={{ fontSize: "var(--fs-lg)", margin: "var(--sp-4) 0 var(--sp-2)" }}>Cookies analíticas</h3>
          <p>Permiten conocer cómo utilizan los visitantes el sitio web con el objetivo de mejorar su funcionamiento. Pueden recopilar información como:</p>
          <ul>
            <li>Número de visitantes.</li>
            <li>Páginas visitadas.</li>
            <li>Tiempo de navegación.</li>
            <li>Navegador utilizado.</li>
            <li>Dispositivo empleado.</li>
          </ul>
          <p>Estas cookies solo se instalarán con el consentimiento del usuario.</p>
          <h3 style={{ fontSize: "var(--fs-lg)", margin: "var(--sp-4) 0 var(--sp-2)" }}>Cookies publicitarias</h3>
          <p>Permiten mostrar publicidad personalizada y medir campañas de marketing. Solo se instalarán con el consentimiento del usuario.</p>
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
        <>
          <p>Al acceder al sitio web, el usuario podrá:</p>
          <ul>
            <li>Aceptar todas las cookies.</li>
            <li>Rechazar las cookies no necesarias.</li>
            <li>Configurar sus preferencias.</li>
          </ul>
          <p>El consentimiento podrá modificarse o retirarse en cualquier momento.</p>
        </>
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
      title: "3. Types of cookies",
      body: (
        <>
          <h3 style={{ fontSize: "var(--fs-lg)", margin: "var(--sp-4) 0 var(--sp-2)" }}>Technical cookies</h3>
          <p>These are necessary for the operation of the website and do not require consent. They allow:</p>
          <ul>
            <li>Navigation.</li>
            <li>Session management.</li>
            <li>Security.</li>
            <li>Basic preferences.</li>
          </ul>
          <h3 style={{ fontSize: "var(--fs-lg)", margin: "var(--sp-4) 0 var(--sp-2)" }}>Preference cookies</h3>
          <p>They allow remembering settings chosen by the user.</p>
          <h3 style={{ fontSize: "var(--fs-lg)", margin: "var(--sp-4) 0 var(--sp-2)" }}>Analytical cookies</h3>
          <p>They allow knowing how visitors use the website in order to improve its operation. They may collect information such as:</p>
          <ul>
            <li>Number of visitors.</li>
            <li>Pages visited.</li>
            <li>Navigation time.</li>
            <li>Browser used.</li>
            <li>Device used.</li>
          </ul>
          <p>These cookies will only be installed with the user's consent.</p>
          <h3 style={{ fontSize: "var(--fs-lg)", margin: "var(--sp-4) 0 var(--sp-2)" }}>Advertising cookies</h3>
          <p>They allow showing personalized advertising and measuring marketing campaigns. They will only be installed with the user's consent.</p>
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
        <>
          <p>When accessing the website, the user may:</p>
          <ul>
            <li>Accept all cookies.</li>
            <li>Reject non-essential cookies.</li>
            <li>Configure their preferences.</li>
          </ul>
          <p>Consent may be modified or withdrawn at any time.</p>
        </>
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
