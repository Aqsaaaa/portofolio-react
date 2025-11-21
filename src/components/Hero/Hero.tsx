import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import RotatingText from '../RotatingText';
import Lanyard from '../Lanyard';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
        {/* Kolom kiri - konten teks */}
        <div className="flex flex-col items-center justify-center text-center py-12 lg:py-0 order-2 lg:order-1">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Muhammad Cendekia Rayhan
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-large sm:text-xl text-gray-300 mb-8 max-w-lg"
          >
            Full Stack Developer passionate about creating amazing digital experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Learn More
            </button>
            <button
              onClick={() => {
                const contactElement = document.querySelector('#contact');
                if (contactElement) {
                  contactElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-3 border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>

        {/* Kolom kanan - Lanyard */}
        <div className="flex items-center justify-center lg:justify-start lg:py-0 order-1 lg:order-2">
          <div className="w-full h-full max-w-lg max-h-[70vh]">
            <Lanyard position={[0, 0, 10]} gravity={[0, -40, 0]} />      
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-8 h-8 text-gray-400 hover:text-white transition-colors animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
