'use client'
import Navbar from './components/navbar';
import Homes from './components/homes';
import Footer from './components/footer';
import About from './components/about';
import Projects from './components/projects';
import Certificates from './components/certificate';
import Journal from './components/journal';
import ContactMe from './components/contact';

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
        <section id="project" className="h-screen mb-2 flex justify-center items-center">
        <Projects/>
        </section>
        <section id="certificates" className="h-auto flex justify-center items-center">
        <Certificates/>
        </section>
        <section id="journal" className="h-screen flex justify-center items-center">
          <Journal/>
        </section>
        <section id="contact" className="h-auto ">
    
        <ContactMe/>
        </section>
        </main>
      <Footer/>
    </>
  );
}