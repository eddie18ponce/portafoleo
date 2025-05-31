// === Frontend con React + TailwindCSS ===
// Puedes usar este machote como base para tu portafolio profesional

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Eddie Ponce Alpízar</h1>
          <nav className="space-x-4">
            <a href="#projects" className="hover:underline">Proyectos</a>
            <a href="#skills" className="hover:underline">Habilidades</a>
            <a href="#certificates" className="hover:underline">Certificados</a>
            <a href="#contact" className="hover:underline">Contacto</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h2 className="text-4xl font-bold mb-4">Hola, soy Eddie Ponce</h2>
          <p className="text-xl mb-6">Desarrollador Full Stack especializado en React, Flutter y Firebase</p>
          <div className="flex justify-center space-x-4 text-2xl">
            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:tuemail@dominio.com"><FaEnvelope /></a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-10">
          <h3 className="text-2xl font-semibold mb-6">Proyectos destacados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1,2].map(i => (
              <div key={i} className="bg-white shadow rounded-xl p-4">
                <img src={`https://via.placeholder.com/600x300?text=Proyecto+${i}`} alt="Proyecto" className="rounded-lg mb-4" />
                <h4 className="text-xl font-bold mb-2">Nombre del Proyecto {i}</h4>
                <p className="mb-2">Descripción breve del proyecto y tecnologías utilizadas.</p>
                <div className="flex justify-between">
                  <a href="#" className="text-blue-500 hover:underline">Repositorio</a>
                  <a href="#" className="text-blue-500 hover:underline">Demo</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-10">
          <h3 className="text-2xl font-semibold mb-6">Habilidades técnicas</h3>
          <div className="flex flex-wrap gap-4">
            {["React", "Flutter", "Firebase", "Node.js", "TailwindCSS"].map(skill => (
              <span key={skill} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-xl text-sm font-semibold">{skill}</span>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-10">
          <h3 className="text-2xl font-semibold mb-6">Certificados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1,2].map(c => (
              <div key={c} className="bg-white shadow rounded-xl p-4">
                <h4 className="text-lg font-bold">Certificado {c}</h4>
                <p className="text-sm text-gray-600">Nombre del curso • Plataforma • Fecha</p>
                <a href="#" className="text-blue-500 text-sm hover:underline">Ver certificado</a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-10">
          <h3 className="text-2xl font-semibold mb-6">Contacto</h3>
          <form className="max-w-xl mx-auto space-y-4">
            <input type="text" placeholder="Tu nombre" className="w-full border rounded-xl p-2" />
            <input type="email" placeholder="Tu correo" className="w-full border rounded-xl p-2" />
            <textarea placeholder="Mensaje" className="w-full border rounded-xl p-2 h-32"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-xl">Enviar mensaje</button>
          </form>
        </section>
      </main>

      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Eddie Ponce. Todos los derechos reservados.
      </footer>
    </div>
  );
}
