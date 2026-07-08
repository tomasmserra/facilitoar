import React from 'react';
import { ArrowRight, Boxes, Building2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const PorteLaunchSection: React.FC = () => {
  return (
    <section id="productos" className="py-24 bg-gray-950 border-t border-gray-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-300">
              <Sparkles className="mr-2 h-4 w-4" />
              Lanzamiento de producto
            </div>

            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Presentamos PORTE, el sistema de gestión de Facilito
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Una plataforma pensada para comercios argentinos que necesitan ordenar ventas, stock,
              clientes, cuentas corrientes, compras, caja y reportes en un solo lugar.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/porte"
                className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-6 py-3 text-base font-bold text-white shadow-lg shadow-brand-900/40 transition-all hover:-translate-y-0.5 hover:bg-brand-500"
              >
                Conocer PORTE
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-gray-700 bg-gray-900 px-6 py-3 text-base font-semibold text-gray-200 transition-all hover:border-brand-500/60 hover:text-white"
              >
                Consultar lanzamiento
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-6 shadow-2xl shadow-black/20">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-800 bg-gray-950 p-5">
                <Building2 className="h-7 w-7 text-brand-400" />
                <h3 className="mt-4 text-lg font-bold text-white">Para negocios que crecieron</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Cuando Excel, anotadores o sistemas viejos empiezan a quedar chicos.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-gray-950 p-5">
                <Boxes className="h-7 w-7 text-brand-400" />
                <h3 className="mt-4 text-lg font-bold text-white">Planes por escala</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Lite, Bronce, Plata y Oro, con el mismo core de gestión y límites por cantidad de artículos.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-brand-500/20 bg-brand-500/10 p-5">
              <p className="text-sm font-semibold leading-6 text-brand-100">
                CRM, WhatsApp e inteligencia artificial se pueden sumar como módulos opcionales, sin obligar al cliente a pagar herramientas que no necesita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorteLaunchSection;
