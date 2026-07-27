import type { Locale } from "@/i18n/config";

// Política de Privacidad — source: docs/PRIVACIDAD.md (ES), translated to EN.
// Controller: Fawalt Investment S.L., NIF B16870008, Madrid.
// Do not edit the legal meaning without PO/legal review.

export const privacidadUpdatedAt = {
  es: "Última actualización: 25 de julio de 2026",
  en: "Last updated: July 25, 2026",
};

export const privacidadTitle = { es: "Política de Privacidad", en: "Privacy Policy" };

export const privacidadMetaDescription = {
  es: "Política de privacidad de nortexsys.com — tratamiento de datos personales conforme al RGPD.",
  en: "Privacy policy of nortexsys.com — processing of personal data under the GDPR.",
};

export const privacidadSections: Record<
  Locale,
  { title: string; body: React.ReactNode }[]
> = {
  es: [
    {
      title: "1. Responsable del tratamiento",
      body: (
        <>
          <p>
            En cumplimiento del Reglamento (UE) 2016/679, General de Protección de
            Datos (RGPD), y de la Ley Orgánica 3/2018, de Protección de Datos
            Personales y garantía de los derechos digitales (LOPDGDD), se informa a
            los usuarios de este sitio web de que el responsable del tratamiento de
            los datos personales es:
          </p>
          <p>
            <strong>FAWALT INVESTMENT S.L</strong>
            <br />
            <strong>NIF:</strong> B16870008
            <br />
            <strong>Domicilio social:</strong> Calle Núñez de Balboa, 118, 1º I,
            28006 Madrid, España.
          </p>
        </>
      ),
    },
    {
      title: "2. Datos personales que recopilamos",
      body: (
        <>
          <p>Podemos recopilar los siguientes datos personales cuando el usuario utiliza nuestro sitio web:</p>
          <ul>
            <li>Nombre y apellidos.</li>
            <li>Dirección de correo electrónico.</li>
            <li>Empresa u organización.</li>
            <li>Número de teléfono.</li>
            <li>Información facilitada voluntariamente mediante formularios de contacto.</li>
            <li>Datos técnicos de navegación, como dirección IP, navegador utilizado, dispositivo, sistema operativo y páginas visitadas.</li>
          </ul>
          <p>No solicitamos ni tratamos categorías especiales de datos personales.</p>
        </>
      ),
    },
    {
      title: "3. Finalidad del tratamiento",
      body: (
        <>
          <p>Los datos personales serán tratados para las siguientes finalidades:</p>
          <ul>
            <li>Atender consultas, solicitudes de información o comunicaciones realizadas a través del sitio web.</li>
            <li>Gestionar la relación comercial con clientes y proveedores.</li>
            <li>Enviar información relacionada con nuestros productos y servicios cuando exista consentimiento o una relación contractual que lo permita.</li>
            <li>Mejorar el funcionamiento, seguridad y experiencia de navegación del sitio web.</li>
            <li>Cumplir con las obligaciones legales aplicables.</li>
          </ul>
        </>
      ),
    },
    {
      title: "4. Base jurídica del tratamiento",
      body: (
        <>
          <p>El tratamiento de los datos personales se basa en una o varias de las siguientes bases legales:</p>
          <ul>
            <li>El consentimiento del interesado.</li>
            <li>La ejecución de un contrato o la aplicación de medidas precontractuales.</li>
            <li>El cumplimiento de obligaciones legales.</li>
            <li>El interés legítimo del responsable para garantizar la seguridad y correcto funcionamiento del sitio web.</li>
          </ul>
        </>
      ),
    },
    {
      title: "5. Conservación de los datos",
      body: (
        <p>
          Los datos personales se conservarán únicamente durante el tiempo necesario
          para cumplir la finalidad para la que fueron recogidos y, posteriormente,
          durante los plazos legalmente establecidos para atender posibles responsabilidades.
        </p>
      ),
    },
    {
      title: "6. Destinatarios de los datos",
      body: (
        <>
          <p>Como norma general, FAWALT INVESTMENT S.L no venderá ni cederá los datos personales a terceros.</p>
          <p>No obstante, podrán comunicarse cuando:</p>
          <ul>
            <li>Sea necesario para prestar un servicio solicitado por el usuario.</li>
            <li>Exista una obligación legal.</li>
            <li>Intervengan proveedores que actúen como encargados del tratamiento, bajo los correspondientes contratos de confidencialidad y protección de datos.</li>
          </ul>
        </>
      ),
    },
    {
      title: "7. Transferencias internacionales",
      body: (
        <p>
          Con carácter general, no se realizan transferencias internacionales de
          datos. En caso de utilizar proveedores tecnológicos ubicados fuera del
          Espacio Económico Europeo, dichas transferencias se realizarán únicamente
          cuando ofrezcan garantías adecuadas conforme al RGPD.
        </p>
      ),
    },
    {
      title: "8. Derechos de los interesados",
      body: (
        <>
          <p>El usuario podrá ejercer en cualquier momento los siguientes derechos:</p>
          <ul>
            <li>Derecho de acceso.</li>
            <li>Derecho de rectificación.</li>
            <li>Derecho de supresión.</li>
            <li>Derecho de oposición.</li>
            <li>Derecho a la limitación del tratamiento.</li>
            <li>Derecho a la portabilidad de los datos.</li>
            <li>Derecho a retirar el consentimiento en cualquier momento.</li>
          </ul>
          <p>
            Para ejercer estos derechos podrá dirigir una solicitud escrita,
            acompañada de un documento acreditativo de identidad, al domicilio social
            indicado anteriormente o al correo electrónico de contacto que figure en
            este sitio web.
          </p>
          <p>
            Asimismo, si considera que el tratamiento de sus datos no se ajusta a la
            normativa vigente, podrá presentar una reclamación ante la Agencia
            Española de Protección de Datos (AEPD).
          </p>
        </>
      ),
    },
    {
      title: "9. Seguridad de la información",
      body: (
        <p>
          FAWALT INVESTMENT S.L aplica las medidas técnicas y organizativas
          apropiadas para proteger los datos personales frente a accesos no
          autorizados, alteración, pérdida o destrucción, de conformidad con la
          normativa vigente.
        </p>
      ),
    },
    {
      title: "10. Cookies",
      body: (
        <p>
          Este sitio web puede utilizar cookies técnicas y, en su caso, cookies
          analíticas o de terceros. La información detallada sobre su uso puede
          consultarse en la correspondiente Política de Cookies.
        </p>
      ),
    },
    {
      title: "11. Enlaces a sitios de terceros",
      body: (
        <p>
          El sitio web puede contener enlaces a páginas externas. FAWALT INVESTMENT
          S.L no se responsabiliza del contenido ni de las políticas de privacidad
          aplicadas por dichos sitios.
        </p>
      ),
    },
    {
      title: "12. Modificaciones de esta política",
      body: (
        <p>
          FAWALT INVESTMENT S.L podrá modificar la presente Política de Privacidad
          cuando resulte necesario para adaptarla a cambios legislativos,
          jurisprudenciales o técnicos. La versión publicada en cada momento será la
          vigente.
        </p>
      ),
    },
  ],
  en: [
    {
      title: "1. Data controller",
      body: (
        <>
          <p>
            In compliance with Regulation (EU) 2016/679, the General Data Protection
            Regulation (GDPR), and Spanish Organic Law 3/2018 on Personal Data
            Protection and guarantee of digital rights (LOPDGDD), users of this
            website are informed that the controller of personal data processing is:
          </p>
          <p>
            <strong>FAWALT INVESTMENT S.L</strong>
            <br />
            <strong>VAT number:</strong> B16870008
            <br />
            <strong>Registered office:</strong> Calle Núñez de Balboa, 118, 1º I,
            28006 Madrid, Spain.
          </p>
        </>
      ),
    },
    {
      title: "2. Personal data we collect",
      body: (
        <>
          <p>We may collect the following personal data when the user uses our website:</p>
          <ul>
            <li>Name and surname.</li>
            <li>Email address.</li>
            <li>Company or organization.</li>
            <li>Phone number.</li>
            <li>Information voluntarily provided through contact forms.</li>
            <li>Technical browsing data, such as IP address, browser used, device, operating system and pages visited.</li>
          </ul>
          <p>We do not request or process special categories of personal data.</p>
        </>
      ),
    },
    {
      title: "3. Purpose of processing",
      body: (
        <>
          <p>Personal data shall be processed for the following purposes:</p>
          <ul>
            <li>Handling queries, information requests or communications made through the website.</li>
            <li>Managing the commercial relationship with clients and suppliers.</li>
            <li>Sending information related to our products and services when there is consent or a contractual relationship that allows it.</li>
            <li>Improving the operation, security and browsing experience of the website.</li>
            <li>Complying with applicable legal obligations.</li>
          </ul>
        </>
      ),
    },
    {
      title: "4. Legal basis for processing",
      body: (
        <>
          <p>The processing of personal data is based on one or more of the following legal bases:</p>
          <ul>
            <li>The data subject's consent.</li>
            <li>The performance of a contract or the application of pre-contractual measures.</li>
            <li>Compliance with legal obligations.</li>
            <li>The controller's legitimate interest to ensure the security and correct operation of the website.</li>
          </ul>
        </>
      ),
    },
    {
      title: "5. Data retention",
      body: (
        <p>
          Personal data shall be retained only for as long as necessary to fulfill
          the purpose for which it was collected and, subsequently, for the legally
          established periods to address potential liabilities.
        </p>
      ),
    },
    {
      title: "6. Recipients of the data",
      body: (
        <>
          <p>As a general rule, FAWALT INVESTMENT S.L will not sell or transfer personal data to third parties.</p>
          <p>However, it may be disclosed when:</p>
          <ul>
            <li>It is necessary to provide a service requested by the user.</li>
            <li>There is a legal obligation.</li>
            <li>Processors are involved, under the corresponding confidentiality and data protection contracts.</li>
          </ul>
        </>
      ),
    },
    {
      title: "7. International transfers",
      body: (
        <p>
          As a general rule, no international data transfers are made. In the event
          that technology providers located outside the European Economic Area are
          used, such transfers shall only be made when they offer adequate
          guarantees under the GDPR.
        </p>
      ),
    },
    {
      title: "8. Data subject rights",
      body: (
        <>
          <p>The user may exercise the following rights at any time:</p>
          <ul>
            <li>Right of access.</li>
            <li>Right to rectification.</li>
            <li>Right to erasure.</li>
            <li>Right to object.</li>
            <li>Right to restriction of processing.</li>
            <li>Right to data portability.</li>
            <li>Right to withdraw consent at any time.</li>
          </ul>
          <p>
            To exercise these rights, a written request may be sent, accompanied by
            proof of identity, to the registered office indicated above or to the
            contact email address shown on this website.
          </p>
          <p>
            Likewise, if you consider that the processing of your data does not
            comply with current regulations, you may file a claim with the Spanish
            Data Protection Agency (AEPD).
          </p>
        </>
      ),
    },
    {
      title: "9. Information security",
      body: (
        <p>
          FAWALT INVESTMENT S.L applies appropriate technical and organizational
          measures to protect personal data against unauthorized access,
          alteration, loss or destruction, in accordance with current regulations.
        </p>
      ),
    },
    {
      title: "10. Cookies",
      body: (
        <p>
          This website may use technical cookies and, where appropriate, analytical
          or third-party cookies. Detailed information on their use can be found in
          the corresponding Cookies Policy.
        </p>
      ),
    },
    {
      title: "11. Links to third-party sites",
      body: (
        <p>
          The website may contain links to external pages. FAWALT INVESTMENT S.L is
          not responsible for the content or the privacy policies applied by such
          sites.
        </p>
      ),
    },
    {
      title: "12. Changes to this policy",
      body: (
        <p>
          FAWALT INVESTMENT S.L may modify this Privacy Policy when necessary to
          adapt it to legislative, jurisprudential or technical changes. The version
          published at any given time shall be the valid one.
        </p>
      ),
    },
  ],
};
