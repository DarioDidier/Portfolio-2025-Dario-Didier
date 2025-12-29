
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass p-2 rounded-2xl">
              <img 
                src="https://i.postimg.cc/MHmfbDbK/profile.png" 
                alt="Dario Didier Profile" 
                className="rounded-xl grayscale hover:grayscale-0 transition-all duration-700 w-full aspect-square object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border border-indigo-500/30 hidden lg:block">
              <span className="block text-4xl font-bold text-indigo-500">Junior</span>
              <span className="text-gray-400 text-sm font-medium">Analista Programador</span>
            </div>
          </div>
          
          <div>
            <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4">Descubre</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8">Pasión por el desarrollo y el aprendizaje continuo</h3>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Soy un estudiante de <strong>desarrollo de software</strong>, con perfil de Analista programador para brindar soluciones de desarrollo de software a empresas. Cuento con conocimientos en lenguajes de programación <strong>.NET (C#)(POO)</strong>. También manejo HTML, CSS y Javascript, combinándolo con bases de datos, teniendo un perfil BackEnd.
              </p>
              <p>
                Mi objetivo es ingresar en una empresa donde pueda capacitarme y ganar experiencia, trabajando en un ambiente de compañerismo, para lograr metas propuestas.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 mt-12">
              <div>
                <h4 className="text-white font-bold mb-1 text-sm md:text-base">Nombre</h4>
                <p className="text-gray-400 text-sm md:text-base">Dario Didier</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 text-sm md:text-base">Email</h4>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base break-all">dariodidier2014@gmail.com</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 text-sm md:text-base">Ubicación</h4>
                <p className="text-gray-400 text-sm md:text-base">Buenos Aires, Argentina</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 text-sm md:text-base">Formación</h4>
                <p className="text-gray-400 text-sm md:text-base">Desarrollo de Software</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
