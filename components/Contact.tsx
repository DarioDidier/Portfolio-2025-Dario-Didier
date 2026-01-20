
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ nombre: '', mail: '', mensaje: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('¡Mensaje enviado con éxito!');
    setFormData({ nombre: '', mail: '', mensaje: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-indigo-600 p-8 md:p-12 text-white">
              <h3 className="text-4xl font-extrabold mb-8">Contacto</h3>
              <p className="text-indigo-100 text-lg mb-12">
                ¿Tienes un proyecto en mente? ¡Escríbeme! Siempre estoy abierto a nuevas oportunidades y colaboraciones emocionantes.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-indigo-500/50 p-3 rounded-xl mr-3 md:mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-lg md:text-xl">Email</h4>
                    <p className="text-indigo-100 text-sm md:text-base break-all">dariodidier2014@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-500/50 p-3 rounded-xl mr-3 md:mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-lg md:text-xl">Teléfono</h4>
                    <p className="text-indigo-100 text-sm md:text-base">+54 1133728915</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-500/50 p-3 rounded-xl mr-3 md:mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-lg md:text-xl">Ubicación</h4>
                    <p className="text-indigo-100 text-sm md:text-base">Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-8 md:p-12">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Nombre</label>
                    <input 
                      type="text" 
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre" 
                      required
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Mail</label>
                    <input 
                      type="email" 
                      name="mail"
                      value={formData.mail}
                      onChange={handleChange}
                      placeholder="tu@email.com" 
                      required
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Mensaje</label>
                  <textarea 
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={4} 
                    placeholder="Hola Dario, me gustaría..." 
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-5 rounded-2xl font-bold transition-all shadow-xl hover:shadow-indigo-500/40 flex items-center justify-center"
                >
                  Enviar Mensaje
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
