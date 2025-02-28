
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Globe, User, Play } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2"
              >
                <Globe className="w-8 h-8 text-primary" />
                <span className="text-xl font-bold text-foreground">Nomade Digital Coaching</span>
              </motion.div>
            </div>
            <div className="flex items-center gap-6">
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                onClick={() => navigate("/about")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Qui sommes-nous ?
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onClick={() => navigate("/coaches")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Nos coachs
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onClick={() => navigate("/formations")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Nos formations
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onClick={() => navigate("/activities")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Nos activités
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                onClick={() => navigate("/testimonials")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Témoignages
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                onClick={() => navigate("/contact")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/auth")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <User className="w-4 h-4" />
                Connexion
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header avec photo d'école numérique */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <img 
          src="images/digital.jpeg" 
          alt="École numérique" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/70 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              École du Numérique
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-md">
              Formez-vous aux métiers d'avenir avec les meilleurs experts du domaine
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/formations")}
              className="px-8 py-4 bg-white text-primary rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Découvrir nos formations
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <motion.div
              animate={{ 
                rotate: isHovering ? [0, -10, 10, -10, 10, 0] : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-6 text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
              >
                Transformez votre avenir numérique
              </motion.h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                                    Nomade Digital Coaching est une startup innovante
                      spécialisée dans la formation numérique accessible à
                      tous , où que vous soyez au Sénégal et dans le reste
                      du monde. Nous sommes un accélérateur de
                      compétences numériques , basé au Sénégal, dédié à
                      la formation de la prochaine génération de
                      professionnels du numérique .
              </p>
            </motion.div>
          </div>

          <div className="space-y-6 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <motion.button
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/formations")}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-primary text-primary-foreground rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Découvrir nos formations
              </span>
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-colors duration-300"
            >
              Contactez-nous
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-br from-[#fdc91d]  to-accent/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pourquoi choisir Nomade Digital Coaching ?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Notre approche unique combine expertise technique, pédagogie innovante et accompagnement personnalisé.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise reconnue",
                description: "Des formateurs professionnels actifs dans leurs domaines, partageant leur expérience concrète."
              },
              {
                title: "Pédagogie innovante",
                description: "Apprentissage par la pratique et projets concrets pour une meilleure assimilation des compétences."
              },
              {
                title: "Accompagnement sur mesure",
                description: "Suivi personnalisé et adaptation à votre rythme pour garantir votre réussite."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-foreground/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-6 h-6 text-primary" />
                <span className="text-lg font-bold">Nomade Digital Coaching</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Des formations d'excellence pour propulser votre carrière numérique.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">Qui sommes-nous ?</a></li>
                <li><a href="/coaches" className="text-sm text-muted-foreground hover:text-primary transition-colors">Nos coachs</a></li>
                <li><a href="/formations" className="text-sm text-muted-foreground hover:text-primary transition-colors">Nos formations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Plus d'infos</h4>
              <ul className="space-y-2">
                <li><a href="/activities" className="text-sm text-muted-foreground hover:text-primary transition-colors">Nos activités</a></li>
                <li><a href="/testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">Témoignages</a></li>
                <li><a href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
              <address className="not-italic text-sm text-muted-foreground">
                <p>Email: contact@nomade-digital.com</p>
                <p>Téléphone: +33 1 23 45 67 89</p>
              </address>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-center text-muted-foreground">
              &copy; {new Date().getFullYear()} Nomade Digital Coaching. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
