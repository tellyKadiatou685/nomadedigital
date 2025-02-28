import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Globe, Smile, Star } from "lucide-react";

const Coaches = () => {
  const navigate = useNavigate();

  const coaches = [
    {
      name: "Mamadou Coly",
      role: "Experte en Marketing Digital",
      bio: "Avec 5ans d'expérience dans le marketing digital, Coly a travaillé avec des marques internationales pour développer leurs stratégies digitales.",
      image: "/images/coly3.jpeg"
    },
    {
      name: "Dienaba Mandiang",
      role: "Développeuse Web & Coach",
      bio: "Développeur full-stack avec une expertise en React et Node.js, Telly a créé plusieurs applications web à succès et contribue régulièrement à des projets open-source.",
      image: "/images/diang23.jpeg"
    },
    {
      name: "Jean Mamady Cisse",
      role: "Designer UI/UX",
      bio: "Designer UI/UX primée avec une passion pour créer des expériences utilisateur intuitives et esthétiques, Mr Cisse a travaillé sur des projets pour des startups et des entreprises établies.",
      image: "/images/cisse4.jpeg"
    },
    {
      name: "Ibrahime Dia",
      role: "Spécialiste en Intelligence Artificielle",
      bio: "Docteur en intelligence artificielle avec une expérience pratique dans l'implémentation de solutions d'IA pour des entreprises de différents secteurs.",
      image: "/images/ibrahima-dia.jpeg"
    },
    {
      name: "Mouhamede Sambe",
     role: "Designer UI/UX",
     bio: "Designer UI/UX primée avec une passion pour créer des expériences utilisateur intuitives et esthétiques, Mr Sambe a travaillé sur des projets pour des startups et des entreprises établies.",
      image: "/images/mouh.jpeg"
    },
    {
      name: "Kadiatou Telly Diallo",
      role: "Développeuse Web & Coach",
      bio: "Développeuse full-stack avec une expertise en React et Node.js, Telly a créé plusieurs applications web à succès et contribue régulièrement à des projets open-source.",
      image: "/images/telly23.jpeg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      }
    },
    hover: { 
      y: -10, 
      scale: 1.03, 
      boxShadow: "0px 10px 30px rgba(0, 120, 255, 0.2)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => navigate("/")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-8 h-8 text-primary" />
                <span className="text-xl font-bold text-foreground">Nomade Digital Coaching</span>
              </motion.div>
            </div>
            <div className="flex items-center gap-6">
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
                onClick={() => navigate("/about")}
                className="text-foreground hover:text-primary transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
              >
                Qui sommes-nous ?
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                onClick={() => navigate("/coaches")}
                className="text-primary font-medium transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
              >
                Nos coachs
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                onClick={() => navigate("/formations")}
                className="text-foreground hover:text-primary transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
              >
                Nos formations
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                onClick={() => navigate("/activities")}
                className="text-foreground hover:text-primary transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
              >
                Nos activités
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                onClick={() => navigate("/testimonials")}
                className="text-foreground hover:text-primary transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
              >
                Témoignages
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                onClick={() => navigate("/contact")}
                className="text-foreground hover:text-primary transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
              >
                Contact
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => navigate("/auth")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg transition-all"
              >
                Connexion
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
        className="bg-gradient-to-r from-blue-200 to-purple-200 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex justify-center mb-4"
            >
              <Smile className="w-16 h-16 text-yellow-400" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Nos Coachs Passionnés
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Découvrez notre équipe d'experts enthousiastes, prêts à vous accompagner vers votre réussite digitale !
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Coaches Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mb-16 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex justify-center items-center gap-2 mb-4"
            >
              <Star className="w-6 h-6 text-yellow-400" />
              <Star className="w-8 h-8 text-yellow-400" />
              <Star className="w-6 h-6 text-yellow-400" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl font-bold text-foreground mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
            >
              Une équipe d'experts passionnés
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              Nos coachs sont des professionnels reconnus dans leurs domaines, avec une riche expérience 
              et une passion pour l'enseignement. Ils sont là pour vous guider à chaque étape de votre parcours.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {coaches.map((coach, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-blue-300 transition-all"
              >
                <div className="flex flex-col h-full">
                  <motion.div 
                    className="h-72 overflow-hidden relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={coach.image} 
                      alt={coach.name} 
                      className="w-full h-full object-cover object-center object-top transition-transform duration-500 hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                  <div className="p-6 flex-grow">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                      className="text-xl font-bold text-foreground mb-2"
                    >
                      {coach.name}
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                      className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-3 py-1 text-sm font-medium mb-4"
                    >
                      {coach.role}
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                      className="text-muted-foreground"
                    >
                      {coach.bio}
                    </motion.p>
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      whileHover={{ x: 5, color: "#0055FF" }}
                      className="mt-6 text-primary font-medium transition-all duration-300 flex items-center"
                    >
                      En savoir plus
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        &nbsp;→
                      </motion.span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8 text-center border border-blue-200"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1, rotate: [0, 10, -10, 0] }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center mb-4"
            >
              <Star className="w-12 h-12 text-yellow-400" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-foreground mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Vous êtes expert et passionné par la formation ?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Nous sommes toujours à la recherche de nouveaux talents pour rejoindre notre équipe. 
              Si vous êtes expert dans votre domaine et passionné par le partage de connaissances, 
              nous serions ravis d'échanger avec vous.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg transition-all duration-300"
            >
              Rejoindre notre équipe
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12 mt-auto border-t border-blue-100">
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
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-blue-500">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">Qui sommes-nous ?</a></li>
                <li><a href="/coaches" className="text-sm text-muted-foreground hover:text-primary transition-colors">Nos coachs</a></li>
                <li><a href="/formations" className="text-sm text-muted-foreground hover:text-primary transition-colors">Nos formations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-blue-500">Plus d'infos</h4>
              <ul className="space-y-2">
                <li><a href="/activities" className="text-sm text-muted-foreground hover:text-primary transition-colors">Nos activités</a></li>
                <li><a href="/testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">Témoignages</a></li>
                <li><a href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-blue-500">Contact</h4>
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

export default Coaches;