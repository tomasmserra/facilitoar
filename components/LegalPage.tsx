import React from 'react';
import { ArrowLeft, ExternalLink, FileText, Mail, ShieldCheck, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

type LegalPageProps = {
  type: 'privacy' | 'data-deletion' | 'terms';
};

const privacyPolicyUrl = 'https://mtdmcompany.com/politicas-privacidad/';
const privacyEmail = 'privacidad@mtdmcompany.com';
const contactEmail = 'contacto@facilito.ar';

const LegalShell: React.FC<{
  eyebrow: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}> = ({ eyebrow, title, description, icon, children }) => {
  return (
    <>
      <main className="min-h-screen bg-gray-950 pt-10">
        <section className="border-b border-gray-800 bg-gray-950">
          <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
            <Link
              to="/"
              className="mb-10 inline-flex items-center text-sm font-medium text-gray-400 transition-colors hover:text-brand-400"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                {icon}
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-400">
                  {eyebrow}
                </p>
                <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl">
                  {title}
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-900/40">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="space-y-8 text-gray-300">
              {children}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="rounded-2xl border border-gray-800 bg-gray-950/80 p-6 shadow-xl shadow-black/20 sm:p-8">
    <h2 className="mb-4 text-xl font-bold text-white">{title}</h2>
    <div className="space-y-4 leading-7 text-gray-400">{children}</div>
  </section>
);

const PrivacyContent: React.FC = () => (
  <LegalShell
    eyebrow="Legal"
    title="Política de Privacidad"
    description="Esta URL informa la política de privacidad aplicable al sitio y a las integraciones de Facilito.ar utilizadas para gestionar consultas, servicios y comunicaciones."
    icon={<ShieldCheck className="h-7 w-7" />}
  >
    <Section title="Política vigente">
      <p>
        La política de privacidad vigente se encuentra publicada por MTDM COMPANY y describe cómo se recolectan,
        almacenan, utilizan y protegen los datos personales de quienes interactúan con sus sitios, formularios,
        comunicaciones, servicios e integraciones tecnológicas.
      </p>
      <a
        href={privacyPolicyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center font-semibold text-brand-400 transition-colors hover:text-brand-300"
      >
        Ver política de privacidad completa
        <ExternalLink className="ml-2 h-4 w-4" />
      </a>
    </Section>

    <Section title="Datos tratados">
      <p>
        Podemos tratar datos que el usuario brinda voluntariamente, como nombre, empresa, email, teléfono y el
        contenido de su consulta, además de datos técnicos necesarios para operar el sitio, medir campañas,
        brindar soporte y responder solicitudes.
      </p>
      <p>
        No solicitamos datos sensibles. El sitio y los servicios no están dirigidos a menores de 13 años.
      </p>
    </Section>

    <Section title="Contacto de privacidad">
      <p>
        Para ejercer derechos de acceso, rectificación, actualización o supresión de datos personales, el usuario
        puede escribir a{' '}
        <a href={`mailto:${privacyEmail}`} className="font-semibold text-brand-400 hover:text-brand-300">
          {privacyEmail}
        </a>
        .
      </p>
    </Section>
  </LegalShell>
);

const DataDeletionContent: React.FC = () => (
  <LegalShell
    eyebrow="Meta App"
    title="Eliminación de datos de usuario"
    description="Esta página describe cómo solicitar la eliminación de datos asociados a usuarios que interactúan con Facilito.ar mediante formularios, comunicaciones o integraciones con plataformas de Meta."
    icon={<Trash2 className="h-7 w-7" />}
  >
    <Section title="Cómo solicitar la eliminación">
      <p>
        Para solicitar la eliminación de datos personales asociados a la app o a una interacción realizada mediante
        Facebook, Instagram o cualquier integración de Meta, envianos un email con el asunto
        <span className="font-semibold text-white"> "Eliminación de datos de usuario"</span>.
      </p>
      <a
        href={`mailto:${contactEmail}?subject=Eliminaci%C3%B3n%20de%20datos%20de%20usuario`}
        className="inline-flex items-center font-semibold text-brand-400 transition-colors hover:text-brand-300"
      >
        Solicitar eliminación por email
        <Mail className="ml-2 h-4 w-4" />
      </a>
    </Section>

    <Section title="Información necesaria">
      <p>Para poder identificar la información a eliminar, incluí en tu solicitud:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Nombre y apellido.</li>
        <li>Email o teléfono utilizado para contactarte con Facilito.ar.</li>
        <li>Perfil, identificador o canal de Meta utilizado, si aplica.</li>
        <li>Breve descripción de la interacción o servicio relacionado.</li>
      </ul>
    </Section>

    <Section title="Alcance y plazos">
      <p>
        Una vez recibida la solicitud, verificaremos la identidad del solicitante y eliminaremos o anonimizaremos
        los datos personales que ya no sean necesarios para prestar el servicio, cumplir obligaciones legales,
        resolver reclamos o prevenir fraude.
      </p>
      <p>
        La solicitud será procesada dentro de un plazo razonable, normalmente dentro de los 30 días corridos desde
        su recepción o desde que contemos con la información necesaria para identificar los datos.
      </p>
    </Section>

    <Section title="Contacto">
      <p>
        Email de contacto:{' '}
        <a href={`mailto:${contactEmail}`} className="font-semibold text-brand-400 hover:text-brand-300">
          {contactEmail}
        </a>
        .
      </p>
    </Section>
  </LegalShell>
);

const TermsContent: React.FC = () => (
  <LegalShell
    eyebrow="Legal"
    title="Términos y Condiciones"
    description="Estos términos regulan el acceso y uso del sitio web, formularios, comunicaciones, propuestas comerciales, servicios tecnológicos e integraciones ofrecidas por Facilito.ar."
    icon={<FileText className="h-7 w-7" />}
  >
    <Section title="Aceptación de los términos">
      <p>
        Al navegar este sitio, completar formularios, solicitar información, contratar servicios o interactuar con
        Facilito.ar mediante canales digitales, el usuario acepta estos términos y condiciones. Si no está de
        acuerdo, debe abstenerse de utilizar el sitio o los servicios.
      </p>
    </Section>

    <Section title="Servicios ofrecidos">
      <p>
        Facilito.ar brinda soluciones tecnológicas, automatización de procesos, desarrollo de software, soporte IT,
        consultoría y servicios relacionados. Las características, alcances, plazos, precios y condiciones
        particulares de cada servicio se definirán en propuestas, presupuestos, órdenes de trabajo o acuerdos
        específicos aceptados por el cliente.
      </p>
    </Section>

    <Section title="Uso del sitio y canales digitales">
      <p>
        El usuario se compromete a utilizar el sitio y los canales de contacto de forma lícita, adecuada y
        respetuosa, sin afectar su funcionamiento, vulnerar derechos de terceros, enviar información falsa o realizar
        acciones que puedan comprometer la seguridad de los sistemas.
      </p>
      <p>
        Facilito.ar podrá suspender, restringir o bloquear interacciones cuando detecte uso indebido, fraude, abuso,
        intentos de acceso no autorizado o incumplimiento de estos términos.
      </p>
    </Section>

    <Section title="Propiedad intelectual">
      <p>
        El contenido del sitio, incluyendo textos, imágenes, marcas, diseños, código, documentación, propuestas,
        materiales técnicos y recursos comerciales, pertenece a Facilito.ar o a sus respectivos titulares, salvo
        indicación expresa en contrario.
      </p>
      <p>
        No está permitida su copia, distribución, modificación, publicación o uso comercial sin autorización previa y
        por escrito.
      </p>
    </Section>

    <Section title="Responsabilidad">
      <p>
        Facilito.ar trabaja para mantener la información del sitio actualizada y los servicios disponibles, pero no
        garantiza ausencia absoluta de errores, interrupciones o fallas técnicas. El uso del sitio se realiza bajo
        responsabilidad del usuario.
      </p>
      <p>
        En servicios contratados, la responsabilidad, garantías y soporte aplicables se regirán por las condiciones
        pactadas en la propuesta o acuerdo correspondiente.
      </p>
    </Section>

    <Section title="Privacidad y datos personales">
      <p>
        El tratamiento de datos personales se rige por nuestra{' '}
        <Link to="/politicas-privacidad" className="font-semibold text-brand-400 hover:text-brand-300">
          Política de Privacidad
        </Link>
        . Para solicitar la eliminación de datos asociados a interacciones digitales o integraciones con Meta, el
        usuario puede consultar la página de{' '}
        <Link to="/eliminacion-datos" className="font-semibold text-brand-400 hover:text-brand-300">
          Eliminación de datos de usuario
        </Link>
        .
      </p>
    </Section>

    <Section title="Modificaciones">
      <p>
        Facilito.ar podrá actualizar estos términos y condiciones cuando resulte necesario por cambios operativos,
        legales, técnicos o comerciales. La versión vigente será la publicada en esta página.
      </p>
    </Section>

    <Section title="Contacto">
      <p>
        Por consultas relacionadas con estos términos, escribinos a{' '}
        <a href={`mailto:${contactEmail}`} className="font-semibold text-brand-400 hover:text-brand-300">
          {contactEmail}
        </a>
        .
      </p>
    </Section>
  </LegalShell>
);

const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  if (type === 'privacy') return <PrivacyContent />;
  if (type === 'terms') return <TermsContent />;

  return <DataDeletionContent />;
};

export default LegalPage;
