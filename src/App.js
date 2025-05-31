import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPython, FaReact, FaNodeJs, FaFire } from 'react-icons/fa'
import { SiFlutter, SiSupabase } from 'react-icons/si'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gray-800 dark:text-white">Eddie Antonio Ponce Alpizar</div>
            <div className="flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Estudiante de Ingeniería & Desarrollador
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Estudiante de ingeniería apasionado por el desarrollo de software y la tecnología. 
              En mi tiempo libre trabajo como técnico en radiología, combinando mi pasión por la tecnología 
              con el campo de la salud.
            </p>
            <div className="flex space-x-4">
              <a href="#proyectos" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Ver Proyectos
              </a>
              <a href="#contacto" className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition">
                Contactar
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative w-64 h-64 mx-auto">
              <img
                src="/tu-foto.jpg"
                alt="Eddie Ponce"
                className="rounded-full w-full h-full object-cover border-4 border-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-12 px-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Mis Proyectos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PocketRad Project */}
            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <img src="/pocketrad.jpg" alt="PocketRad" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">PocketRad</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Aplicación móvil para técnicos en radiología, desarrollada con Flutter y Firebase.
                </p>
                <div className="flex justify-between items-center">
                  <a href="https://github.com/J-E-Creations/PocketRad.git" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Ver Repositorio</a>
                  <a href="https://github.com/J-E-Creations/PocketRad.git" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
            {/* Add more project cards here */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Habilidades
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center justify-center space-x-2">
                  <FaReact className="text-blue-500" />
                  <span>React</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <SiFlutter className="text-blue-400" />
                  <span>Flutter</span>
                </li>
              </ul>
            </div>
            {/* Backend Skills */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center justify-center space-x-2">
                  <FaPython className="text-yellow-500" />
                  <span>Python</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <FaNodeJs className="text-green-500" />
                  <span>Node.js</span>
                </li>
              </ul>
            </div>
            {/* Database Skills */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Bases de Datos</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center justify-center space-x-2">
                  <FaFire className="text-orange-500" />
                  <span>Firebase</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <SiSupabase className="text-green-500" />
                  <span>Supabase</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificados" className="py-12 px-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Certificados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Certificate Card */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Nombre del Certificado
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Plataforma - Fecha
              </p>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                Ver Certificado
              </a>
            </div>
            {/* Add more certificate cards */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Contacto
          </h2>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/eddie18ponce" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <FaGithub size={32} />
            </a>
            <a href="mailto:eddie18ponce@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <FaEnvelope size={32} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App 