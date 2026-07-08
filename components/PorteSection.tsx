import React from 'react';
import {
  ArrowRight,
  BarChart3,
  Boxes,
  BrainCircuit,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  ClipboardList,
  CreditCard,
  FileText,
  MessageCircle,
  ReceiptText,
  Server,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Users,
  WalletCards,
} from 'lucide-react';

const modules = [
  { label: 'Clientes', Icon: Users },
  { label: 'Artículos y stock', Icon: Boxes },
  { label: 'Ventas', Icon: ShoppingCart },
  { label: 'Presupuestos', Icon: FileText },
  { label: 'Notas de pedido', Icon: ClipboardList },
  { label: 'Cuentas corrientes', Icon: ReceiptText },
  { label: 'Proveedores y compras', Icon: Building2 },
  { label: 'Tesorería y caja', Icon: WalletCards },
  { label: 'Bancos y cheques', Icon: CreditCard },
  { label: 'Reportes', Icon: BarChart3 },
  { label: 'Roles y permisos', Icon: ShieldCheck },
  { label: 'Configuración fiscal', Icon: Settings2 },
];

const differentiators = [
  'Pensado para la operación diaria de comercios argentinos.',
  'Implementación cercana, configurable y acompañada.',
  'Gestión comercial completa sin obligar a contratar módulos que no se necesitan.',
  'Modalidad flexible: nube administrada, VPS o servidor propio.',
];

const plans = [
  {
    name: 'Porte Lite',
    limit: 'Hasta 300 artículos',
    description: 'Para negocios muy chicos que quieren dejar de manejarse con anotadores o planillas y empezar a ordenar lo básico.',
    badge: 'Entrada',
  },
  {
    name: 'Porte Bronce',
    limit: 'Hasta 1.000 artículos',
    description: 'Para negocios chicos que necesitan ordenar ventas, stock, clientes, compras, caja y cuentas corrientes.',
    highlighted: true,
    badge: 'Recomendado',
  },
  {
    name: 'Porte Plata',
    limit: 'Hasta 10.000 artículos',
    description: 'Para comercios con más movimiento y mayor volumen de productos.',
  },
  {
    name: 'Porte Oro',
    limit: 'Hasta 30.000 artículos',
    description: 'Para negocios grandes que necesitan más capacidad, soporte más cercano e importaciones más frecuentes.',
  },
];

const PorteSection: React.FC = () => {
  return (
    <section id="porte" className="py-24 bg-gray-950 border-t border-gray-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="inline-flex items-center rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-300">
              Sistema de gestión comercial
            </div>

            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              PORTE ordena la operación completa de tu negocio
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              PORTE es una plataforma de gestión comercial y administrativa para negocios que necesitan
              ordenar ventas, stock, clientes, cuentas corrientes, compras, caja y reportes en un solo sistema.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-400">
              Nació desde Facilito, a partir del trabajo con comercios reales que usaban sistemas antiguos,
              difíciles de mantener y poco adaptados a la forma actual de vender y administrar. Es una alternativa
              moderna, flexible y cercana, pensada para negocios argentinos y para la operación diaria real.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5">
                <CircleDollarSign className="h-7 w-7 text-brand-400" />
                <h3 className="mt-4 text-lg font-bold text-white">Control operativo</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Permite saber qué se vendió, qué se cobró, qué se debe, qué stock hay y cuánto hay en caja.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5">
                <Server className="h-7 w-7 text-brand-400" />
                <h3 className="mt-4 text-lg font-bold text-white">Instalación flexible</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Puede funcionar como SaaS administrado o instalarse en un servidor propio, VPS o infraestructura local.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-6 py-3 text-base font-bold text-white shadow-lg shadow-brand-900/40 transition-all hover:-translate-y-0.5 hover:bg-brand-500"
              >
                Consultar por PORTE
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/#services"
                className="inline-flex items-center justify-center rounded-xl border border-gray-700 bg-gray-900 px-6 py-3 text-base font-semibold text-gray-200 transition-all hover:border-brand-500/60 hover:text-white"
              >
                Ver servicios de Facilito
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900/80 p-6 shadow-2xl shadow-black/20">
            <div className="flex items-start justify-between gap-6 border-b border-gray-800 pb-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-brand-400">Para comercios que crecieron</p>
                <h3 className="mt-2 text-2xl font-extrabold text-white">Cuando Excel, anotadores o sistemas viejos quedan chicos</h3>
              </div>
              <div className="hidden rounded-2xl border border-brand-500/20 bg-brand-500/10 p-4 text-brand-300 sm:block">
                <Building2 className="h-8 w-8" />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {differentiators.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-400" />
                  <p className="text-sm leading-6 text-gray-300">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-950 p-5">
              <h4 className="text-base font-bold text-white">Módulos opcionales</h4>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-gray-800 bg-gray-900 p-4">
                  <MessageCircle className="h-5 w-5 text-brand-400" />
                  <p className="mt-3 text-sm font-semibold text-white">CRM y WhatsApp</p>
                </div>
                <div className="rounded-xl border border-gray-800 bg-gray-900 p-4">
                  <BrainCircuit className="h-5 w-5 text-brand-400" />
                  <p className="mt-3 text-sm font-semibold text-white">Inteligencia artificial</p>
                </div>
                <div className="rounded-xl border border-gray-800 bg-gray-900 p-4">
                  <Settings2 className="h-5 w-5 text-brand-400" />
                  <p className="mt-3 text-sm font-semibold text-white">Adaptaciones</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-500">
                El sistema de gestión puede usarse sin IA. CRM, WhatsApp e IA se suman solo cuando el negocio los necesita.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-brand-500">Módulos principales</p>
              <h3 className="mt-2 text-2xl font-extrabold text-white">Una sola base para administrar el día a día</h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-gray-500">
              Clientes, artículos, ventas, compras, caja, bancos, reportes y configuración operativa dentro de un mismo entorno.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {modules.map(({ label, Icon }) => (
              <div
                key={label}
                className="min-h-28 rounded-2xl border border-gray-800 bg-gray-900/60 p-4 transition-colors hover:border-brand-500/50 hover:bg-gray-900"
              >
                <Icon className="h-5 w-5 text-brand-400" />
                <p className="mt-4 text-sm font-semibold leading-5 text-gray-100">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-gray-800 bg-gray-900/40 p-6 lg:p-8">
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-brand-500">Planes mensuales</p>
              <h3 className="mt-2 text-2xl font-extrabold text-white">Mismo sistema, distinta capacidad operativa</h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-gray-400">
              Todos los planes incluyen el core de gestión de PORTE. La diferencia principal está en la escala de artículos, el volumen operativo y el acompañamiento necesario.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-6 ${
                  plan.highlighted
                    ? 'border-brand-500/60 bg-gray-950 shadow-xl shadow-brand-950/30'
                    : 'border-gray-800 bg-gray-950/70'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-extrabold text-white">{plan.name}</h4>
                    <p className="mt-2 text-sm font-semibold text-brand-400">{plan.limit}</p>
                  </div>
                  {plan.badge && (
                    <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-300">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="mt-6 rounded-xl border border-gray-800 bg-gray-900 px-4 py-3">
                  <p className="text-sm font-bold text-white">Cotización mensual</p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">Según modalidad, implementación y necesidades del negocio.</p>
                </div>

                <p className="mt-5 min-h-20 text-sm leading-6 text-gray-400">{plan.description}</p>

                <a
                  href="#contact"
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-bold transition-all ${
                    plan.highlighted
                      ? 'bg-brand-600 text-white hover:bg-brand-500'
                      : 'border border-gray-700 bg-gray-900 text-gray-200 hover:border-brand-500/60 hover:text-white'
                  }`}
                >
                  Consultar este plan
                </a>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm leading-6 text-gray-500">
            CRM, WhatsApp, inteligencia artificial, migraciones especiales e implementaciones a medida pueden cotizarse como adicionales según la necesidad del negocio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PorteSection;
