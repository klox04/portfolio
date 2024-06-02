
const Footer = () => {
    return (
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto text-center">
          <p className="mb-4 text-gray-400">&copy;2024 Daniel Caralos. All rights reserved.</p>
          <div className="space-x-4">
          <a href="#home" className="py-2 lg:py-0 text-gray-400 hover:text-white hover:font-bold">Home</a>
          <a href="#about" className="py-2 lg:py-0 text-gray-400 hover:text-white hover:font-bold">About</a>
          <a href="#project" className="py-2 lg:py-0 text-gray-400 hover:text-white hover:font-bold">Projects</a>
          <a href="#certificates" className="py-2 lg:py-0 text-gray-400 hover:text-white hover:font-bold">Certificates</a>
          <a href="#journal" className="py-2 lg:py-0 text-gray-400 hover:text-white hover:font-bold">Journal</a>
          <a href="#contact" className="py-2 lg:py-0 text-gray-400 hover:text-white hover:font-bold">Contact</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  