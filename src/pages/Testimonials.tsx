
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Globe } from "lucide-react";

const Testimonials = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      name: "Marie D.",
      role: "Ancienne étudiante, Marketing Digital",
      content: "La formation en Marketing Digital de Nomade Digital Coaching a complètement transformé ma carrière. Les cours sont pratiques, actualisés et pertinents. J'ai trouvé un emploi dans une agence reconnue avant même la fin de ma formation !",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Thomas L.",
      role: "Entrepreneur",
      content: "L'accompagnement de Nomade Digital Coaching a été déterminant dans le lancement de ma startup. Les conseils personnalisés et l'expertise technique m'ont permis d'éviter de nombreux pièges et d'accélérer notre croissance.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Sarah B.",
      role: "Développeuse Web",
      content: "Après 10 ans dans un autre secteur, j'ai suivi la formation en développement web pour me reconvertir. L'approche pédagogique et le soutien des formateurs ont rendu cette transition possible et même agréable. Aujourd'hui, je travaille comme développeuse front-end dans une entreprise internationale.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Jean-Marc P.",
      role: "Directeur Marketing, Entreprise partenaire",
      content: "Nous collaborons avec Nomade Digital Coaching pour la formation continue de nos équipes. La qualité des interventions et la flexibilité des formats proposés nous permettent d'améliorer constamment les compétences de nos collaborateurs.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Léa M.",
      role: "Designer UI/UX",
      content: "La formation en UI/UX Design était exactement ce qu'il me fallait pour compléter mon profil de graphiste. Les projets concrets et les retours personnalisés m'ont permis de constituer un portfolio impressionnant qui a convaincu mon employeur actuel.",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Karim A.",
      role: "Étudiant en intelligence artificielle",
      content: "Les cours sur l'intelligence artificielle sont à la pointe de la technologie. J'apprécie particulièrement l'équilibre entre théorie et applications pratiques, ainsi que la disponibilité des formateurs pour répondre à toutes nos questions.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

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
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => navigate("/")}
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
                className="text-primary font-medium transition-colors"
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
                Connexion
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-secondary/40 to-accent/30 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Témoignages</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez ce que nos anciens étudiants et partenaires disent de nos formations et de notre accompagnement.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 relative"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-20 h-20 rounded-full object-cover border-4 border-secondary"
                    />
                  </div>
                  <div>
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground">{testimonial.name}</h3>
                      <p className="text-primary">{testimonial.role}</p>
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  </div>
                </div>
                <div className="absolute top-6 right-8 text-6xl text-secondary/20 font-serif">"</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 bg-gradient-to-br from-secondary/30 to-accent/20 rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Vous êtes un ancien étudiant ?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Partagez votre expérience avec Nomade Digital Coaching et aidez de futurs étudiants à faire leur choix !
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Partager mon témoignage
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Nos partenaires</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "https://via.placeholder.com/150x80/e0e0e0/808080/?text=Entreprise+1",
                "https://via.placeholder.com/150x80/e0e0e0/808080/?text=Entreprise+2",
                "https://via.placeholder.com/150x80/e0e0e0/808080/?text=Entreprise+3", 
                "https://via.placeholder.com/150x80/e0e0e0/808080/?text=Entreprise+4"
              ].map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  className="bg-white rounded-lg p-4 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <img 
                    src={logo} 
                    alt={`Logo partenaire ${index + 1}`} 
                    className="max-h-16" 
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-foreground/5 py-12 mt-auto">
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

export default Testimonials;
