import type { Locale } from "@/i18n/config";

// Aviso Legal — source: docs/AVISO.md (ES), translated to EN.
// Legal entity data: Fawalt Investment S.L., NIF B16870008, Madrid.
// Do not edit the legal meaning without PO/legal review.

export const avisoUpdatedAt = {
  es: "Última actualización: 25 de julio de 2026",
  en: "Last updated: July 25, 2026",
};

export const avisoTitle = { es: "Aviso legal", en: "Legal notice" };

export const avisoMetaDescription = {
  es: "Aviso legal de nortexsys.com — Fawalt Investment S.L. (NIF B16870008), Madrid.",
  en: "Legal notice of nortexsys.com — Fawalt Investment S.L. (VAT B16870008), Madrid.",
};

export const avisoSections: Record<
  Locale,
  { title: string; body: React.ReactNode }[]
> = {
  es: [
    {
      title: "1. Información general",
      body: (
        <>
          <p>
            En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la
            Información y de Comercio Electrónico (LSSI-CE), se informa de los
            siguientes datos:
          </p>
          <p>
            <strong>Titular:</strong> FAWALT INVESTMENT S.L.<br />
            <strong>NIF:</strong> B16870008<br />
            <strong>Domicilio social:</strong> Calle Núñez de Balboa, 118, 1º I,
            28006 Madrid, España.
          </p>
          <p>El acceso al presente sitio web implica la aceptación del presente Aviso Legal.</p>
          <p>
            Nortex Systems cuenta con presencia en Estados Unidos a través de la
            entidad independiente <strong>Guillén Cepeda&amp;Solís</strong>,
            que aporta domicilio y presencia física en dicho país. Guillén
            Cepeda&amp;Solís no interviene en la titularidad de este sitio web
            ni en el tratamiento de los datos personales de los usuarios: esta
            web es titularidad exclusiva de FAWALT INVESTMENT S.L., que es
            también la única responsable del tratamiento de dichos datos (ver
            Política de Privacidad).
          </p>
        </>
      ),
    },
    {
      title: "2. Objeto",
      body: (
        <p>
          Este sitio web tiene por objeto ofrecer información sobre los productos,
          servicios y actividades desarrollados por FAWALT INVESTMENT S.L.
        </p>
      ),
    },
    {
      title: "3. Condiciones de uso",
      body: (
        <>
          <p>El usuario se compromete a utilizar el sitio web conforme a la legislación vigente.</p>
          <p>Queda prohibido:</p>
          <ul>
            <li>Utilizar el sitio web con fines ilícitos.</li>
            <li>Introducir malware o código malicioso.</li>
            <li>Acceder sin autorización a sistemas del titular.</li>
            <li>Dañar el funcionamiento del sitio web.</li>
          </ul>
        </>
      ),
    },
    {
      title: "4. Propiedad intelectual e industrial",
      body: (
        <>
          <p>
            Todos los contenidos del sitio web (textos, imágenes, logotipos,
            software, diseño, documentación, vídeos y código fuente) son propiedad
            de FAWALT INVESTMENT S.L. o de sus respectivos titulares y están
            protegidos por la legislación vigente.
          </p>
          <p>
            Queda prohibida cualquier reproducción, distribución o transformación sin autorización expresa.
          </p>
        </>
      ),
    },
    {
      title: "5. Exclusión de responsabilidad",
      body: (
        <>
          <p>
            FAWALT INVESTMENT S.L. no garantiza la disponibilidad permanente del
            sitio web ni la ausencia absoluta de errores.
          </p>
          <p>No será responsable de:</p>
          <ul>
            <li>Daños derivados del uso del sitio.</li>
            <li>Interrupciones del servicio.</li>
            <li>Virus introducidos por terceros.</li>
            <li>Decisiones tomadas por los usuarios basadas en la información publicada.</li>
          </ul>
        </>
      ),
    },
    {
      title: "6. Enlaces externos",
      body: (
        <p>
          Este sitio web puede contener enlaces a páginas de terceros. FAWALT
          INVESTMENT S.L. no asume responsabilidad sobre su contenido ni sobre sus
          políticas de privacidad.
        </p>
      ),
    },
    {
      title: "7. Protección de datos",
      body: (
        <p>
          Los datos personales serán tratados conforme al Reglamento General de
          Protección de Datos (RGPD) y a la LOPDGDD. Puede consultar toda la
          información en la Política de Privacidad.
        </p>
      ),
    },
    {
      title: "8. Cookies",
      body: (
        <p>
          Este sitio web puede utilizar cookies técnicas y, cuando proceda,
          cookies analíticas o de terceros. Toda la información está disponible en
          la Política de Cookies.
        </p>
      ),
    },
    {
      title: "9. Modificaciones",
      body: (
        <p>
          FAWALT INVESTMENT S.L. podrá modificar este Aviso Legal en cualquier
          momento para adaptarlo a cambios legales o técnicos.
        </p>
      ),
    },
    {
      title: "10. Legislación aplicable",
      body: (
        <p>
          Este Aviso Legal se rige por la legislación española. Cualquier
          controversia será resuelta por los Juzgados y Tribunales competentes
          conforme a la normativa vigente.
        </p>
      ),
    },
  ],
  en: [
    {
      title: "1. General information",
      body: (
        <>
          <p>
            In compliance with Spanish Law 34/2002 on Information Society Services
            and Electronic Commerce (LSSI-CE), the following information is provided:
          </p>
          <p>
            <strong>Holder:</strong> FAWALT INVESTMENT S.L.<br />
            <strong>VAT number:</strong> B16870008<br />
            <strong>Registered office:</strong> Calle Núñez de Balboa, 118, 1º I,
            28006 Madrid, Spain.
          </p>
          <p>Access to this website implies acceptance of this Legal Notice.</p>
          <p>
            Nortex Systems has a presence in the United States through the
            independent entity <strong>Guillén Cepeda&amp;Solís</strong>,
            which provides a registered address and physical presence in that
            country. Guillén Cepeda&amp;Solís is not involved in the
            ownership of this website nor in the processing of users'
            personal data: this website is owned exclusively by FAWALT
            INVESTMENT S.L., which is also the sole controller of such data
            (see Privacy Policy).
          </p>
        </>
      ),
    },
    {
      title: "2. Purpose",
      body: (
        <p>
          The purpose of this website is to provide information about the products,
          services and activities carried out by FAWALT INVESTMENT S.L.
        </p>
      ),
    },
    {
      title: "3. Conditions of use",
      body: (
        <>
          <p>The user undertakes to use the website in accordance with current legislation.</p>
          <p>It is prohibited to:</p>
          <ul>
            <li>Use the website for unlawful purposes.</li>
            <li>Introduce malware or malicious code.</li>
            <li>Access the holder's systems without authorization.</li>
            <li>Damage the operation of the website.</li>
          </ul>
        </>
      ),
    },
    {
      title: "4. Intellectual and industrial property",
      body: (
        <>
          <p>
            All contents of the website (texts, images, logos, software, design,
            documentation, videos and source code) are the property of FAWALT
            INVESTMENT S.L. or their respective holders and are protected by current
            legislation.
          </p>
          <p>
            Any reproduction, distribution or transformation without express authorization is prohibited.
          </p>
        </>
      ),
    },
    {
      title: "5. Exclusion of liability",
      body: (
        <>
          <p>
            FAWALT INVESTMENT S.L. does not guarantee the permanent availability of
            the website or the absolute absence of errors.
          </p>
          <p>It shall not be liable for:</p>
          <ul>
            <li>Damages arising from the use of the site.</li>
            <li>Service interruptions.</li>
            <li>Viruses introduced by third parties.</li>
            <li>Decisions made by users based on the information published.</li>
          </ul>
        </>
      ),
    },
    {
      title: "6. External links",
      body: (
        <p>
          This website may contain links to third-party pages. FAWALT INVESTMENT
          S.L. assumes no responsibility for their content or their privacy policies.
        </p>
      ),
    },
    {
      title: "7. Data protection",
      body: (
        <p>
          Personal data shall be processed in accordance with the General Data
          Protection Regulation (GDPR) and the LOPDGDD. All information is available
          in the Privacy Policy.
        </p>
      ),
    },
    {
      title: "8. Cookies",
      body: (
        <p>
          This website may use technical cookies and, where appropriate, analytical
          or third-party cookies. All information is available in the Cookies Policy.
        </p>
      ),
    },
    {
      title: "9. Modifications",
      body: (
        <p>
          FAWALT INVESTMENT S.L. may modify this Legal Notice at any time to adapt
          it to legal or technical changes.
        </p>
      ),
    },
    {
      title: "10. Applicable law",
      body: (
        <p>
          This Legal Notice is governed by Spanish law. Any dispute shall be
          resolved by the competent Courts and Tribunals in accordance with current
          regulations.
        </p>
      ),
    },
  ],
};
