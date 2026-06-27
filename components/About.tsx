import React from 'react';
import { MapPin, Target, Users, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-sm font-bold text-brand-500 tracking-wider uppercase">Sobre Facilito.ar</h2>
          <p className="mt-2 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Innovación desde el interior, para el interior
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 h-96 group">
                 <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Reunión de equipo" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white z-10">
                    <p className="text-2xl font-bold mb-2">Igualdad tecnológica</p>
                    <p className="text-gray-300">La innovación no depende de estar en una gran ciudad.</p>
                </div>
            </div>

            <div className="space-y-10">
                <p className="text-lg text-gray-300 leading-relaxed">
                    Facilito nació para demostrar que una empresa no debería tener menos oportunidades por estar lejos de una gran ciudad. Nuestra misión es acercar <strong className="text-brand-400">software, automatización e inteligencia artificial de primer nivel</strong> a comercios, empresas y municipios del interior argentino.
                </p>

                <div className="space-y-8">
                    <div className="flex group">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gray-800 text-brand-500 border border-gray-700 group-hover:border-brand-500/50 transition-colors">
                                <MapPin className="h-6 w-6" />
                            </div>
                        </div>
                        <div className="ml-5">
                            <h4 className="text-lg leading-6 font-bold text-white group-hover:text-brand-400 transition-colors">Visión federal</h4>
                            <p className="mt-2 text-base text-gray-400">
                                Queremos ser la empresa tecnológica referente del interior argentino, mostrando que la innovación también nace lejos de los grandes centros urbanos.
                            </p>
                        </div>
                    </div>

                    <div className="flex group">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gray-800 text-brand-500 border border-gray-700 group-hover:border-brand-500/50 transition-colors">
                                <Target className="h-6 w-6" />
                            </div>
                        </div>
                        <div className="ml-5">
                            <h4 className="text-lg leading-6 font-bold text-white group-hover:text-brand-400 transition-colors">Digitalización real</h4>
                            <p className="mt-2 text-base text-gray-400">
                                No implementamos tecnología por moda. Ordenamos procesos, datos y sistemas para que cada mejora impacte en la operación diaria.
                            </p>
                        </div>
                    </div>

                    <div className="flex group">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gray-800 text-brand-500 border border-gray-700 group-hover:border-brand-500/50 transition-colors">
                                <Users className="h-6 w-6" />
                            </div>
                        </div>
                        <div className="ml-5">
                            <h4 className="text-lg leading-6 font-bold text-white group-hover:text-brand-400 transition-colors">Cercanía operativa</h4>
                            <p className="mt-2 text-base text-gray-400">
                                Hablamos el idioma de las empresas del interior: presupuestos concretos, equipos chicos, sistemas heredados y necesidades urgentes.
                            </p>
                        </div>
                    </div>
                    <div className="flex group">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gray-800 text-brand-500 border border-gray-700 group-hover:border-brand-500/50 transition-colors">
                                <Shield className="h-6 w-6" />
                            </div>
                        </div>
                        <div className="ml-5">
                            <h4 className="text-lg leading-6 font-bold text-white group-hover:text-brand-400 transition-colors">Seguridad y Confianza</h4>
                            <p className="mt-2 text-base text-gray-400">
                                Tratamos datos, procesos y sistemas críticos con confidencialidad, criterio técnico y acompañamiento responsable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-20 rounded-2xl border border-brand-500/20 bg-gray-900/70 p-8 shadow-2xl shadow-black/20 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-brand-400">Manifiesto</p>
              <h3 className="mt-3 text-2xl font-extrabold text-white md:text-3xl">
                Facilito no vende software. Facilito digitaliza empresas del interior.
              </h3>
            </div>
            <div className="space-y-5 text-lg leading-8 text-gray-300">
              <p>
                Creemos que la inteligencia artificial, la automatización y el software de calidad ya no son privilegios de unos pocos.
              </p>
              <p>
                Vivimos un momento histórico: hoy la tecnología permite que lo que antes era inaccesible para una empresa del interior, sea posible.
              </p>
              <p className="font-semibold text-white">
                No desarrollamos software solamente. Ayudamos a que las empresas del interior compitan de igual a igual con cualquiera.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
