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
      title: "3. Situación actual y tipos de cookies",
      body: (
        <>
          <p>
            Actualmente este sitio web <strong>no instala cookies de análisis,
            preferencias ni publicidad</strong>. Únicamente pueden emplearse
            cookies o mecanismos técnicos estrictamente necesarios para el
            funcionamiento del sitio (por ejemplo, seguridad o gestión básica de
            sesión), que no requieren consentimiento.
          </p>
          <p>
            Si en el futuro se incorporan cookies analíticas, de preferencias o
            publicitarias, estas solo se instalarán tras obtener el
            consentimiento previo del usuario a través del correspondiente
            panel de gestión de cookies, que se habilitará antes de activar
            dichas cookies. Esta política se actualizará en ese momento para
            detallar cada cookie, su finalidad y su duración.
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
          Mientras el sitio no instale cookies no técnicas, no se requiere
          recabar consentimiento y no se muestra panel de configuración. En
          cuanto se incorpore alguna cookie analítica, de preferencias o
          publicitaria, el usuario podrá aceptarla, rechazarla o configurar sus
          preferencias antes de que se instale, y podrá modificar o retirar su
          consentimiento en cualquier momento.
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
      title: "3. Current status and types of cookies",
      body: (
        <>
          <p>
            This website currently <strong>does not install analytical,
            preference or advertising cookies</strong>. Only strictly
            necessary technical cookies or mechanisms may be used (for
            example, security or basic session management), which do not
            require consent.
          </p>
          <p>
            If analytical, preference or advertising cookies are added in the
            future, they will only be installed after obtaining the user's
            prior consent through the corresponding cookie management panel,
            which will be enabled before such cookies are activated. This
            policy will be updated at that time to detail each cookie, its
            purpose and its duration.
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
          As long as the website does not install non-technical cookies, no
          consent needs to be collected and no configuration panel is shown.
          As soon as any analytical, preference or advertising cookie is
          added, the user will be able to accept it, reject it, or configure
          their preferences before it is installed, and may modify or
          withdraw their consent at any time.
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
