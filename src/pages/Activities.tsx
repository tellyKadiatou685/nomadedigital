
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Globe } from "lucide-react";

const Activities = () => {
  const navigate = useNavigate();

  const activities = [
    {
      title: "Masterclass: Les dernières tendances en marketing digital",
      type: "Masterclass",
      date: "15 juillet 2023",
      description: "Découvrez les dernières tendances et innovations en marketing digital avec nos experts.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
    },
    {
      title: "Webinaire: Introduction à React 18",
      type: "Webinaire",
      date: "22 juillet 2023",
      description: "Un webinaire complet pour découvrir les nouvelles fonctionnalités de React 18 et améliorer vos compétences.",
      image: "https://images.unsplash.com/photo-1612296727716-d6c69d7ea3c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
    },
    {
      title: "Atelier pratique: Créer une identité visuelle forte",
      type: "Atelier",
      date: "5 août 2023",
      description: "Un atelier pratique pour apprendre à créer une identité visuelle cohérente et impactante pour votre marque.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
    },
    {
      title: "Conférence: L'IA et l'avenir du travail",
      type: "Conférence",
      date: "18 août 2023",
      description: "Une conférence passionnante sur l'impact de l'intelligence artificielle sur le monde du travail de demain.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
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
                className="text-primary font-medium transition-colors"
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Nos Activités</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Participez à nos événements, webinaires et ateliers pour enrichir vos connaissances et élargir votre réseau.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Activities Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Événements à venir</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Rejoignez-nous lors de nos prochains événements pour approfondir vos connaissances, 
              échanger avec des experts et développer votre réseau professionnel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-accent/30 text-accent-foreground text-sm py-1 px-3 rounded-full">
                      {activity.type}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {activity.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{activity.title}</h3>
                  <p className="text-muted-foreground mb-6">{activity.description}</p>
                  <div className="flex justify-between items-center">
                    <button className="text-primary hover:text-primary/70 font-medium transition-colors">
                      En savoir plus
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all"
                    >
                      S'inscrire
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 bg-gradient-to-br from-secondary/30 to-accent/20 rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Vous avez manqué un événement ?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Retrouvez les enregistrements de nos webinaires et conférences passés dans notre médiathèque.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Accéder à la médiathèque
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Galerie de nos événements passés</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1560523159-6cd9d6a31d23?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1509315703195-529879416223?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
              ].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.0 + index * 0.05 }}
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <img 
                    src={image} 
                    alt={`Event gallery ${index + 1}`} 
                    className="w-full h-full object-cover aspect-square cursor-pointer transition-transform duration-500 hover:scale-110" 
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

export default Activities;
