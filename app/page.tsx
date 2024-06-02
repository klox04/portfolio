'use client'
import Navbar from './components/navbar';
import Homes from './components/homes';
import Footer from './components/footer';
import About from './components/about';
import Projects from './components/projects';

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    AOS.init({})
  },[])
  return (
    <> 
    <Navbar/>
    <main className="p-4">
        <section id="home" className="h-auto mb-2 flex justify-center items-center">
        <Homes/>
        </section>
        <section id="about" className="h-screen mb-2 flex justify-center items-center">
          <About/>
        </section>
        <section id="project" className="h-auto mb-2 flex justify-center items-center">
        <Projects/>
        </section>
        <section id="certificates" className="h-auto flex justify-center items-center">
          <h1 className="text-red-500">Certificates</h1>
        </section>
        <section id="journal" className="h-auto flex justify-center items-center">
          <h1 className="text-red-500">Journal</h1>
        </section>
        <section id="contact" className="h-auto flex justify-center items-center">
          <h1 className="text-red-500">Contact</h1>
        </section>
        </main>
      <Footer/>
    </>
  );
}