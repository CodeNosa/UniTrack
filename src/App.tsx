import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Zap, 
  ChevronRight, 
  Star,
  Play,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Globe,
  Clock,
  Award,
  Target,
  Heart,
  Lightbulb,
  Shield,
  MessageCircle,
  Send,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFeedback, setActiveFeedback] = useState(0);
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    message: '',
    rating: 5
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeedback((prev) => (prev + 1) % feedbacks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Cours Interactifs",
      description: "Apprenez avec des vidéos HD, quiz dynamiques et exercices pratiques conçus par des experts pédagogiques.",
      features: ["Vidéos 4K", "Quiz adaptatifs", "Projets réels", "Suivi personnalisé"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Communauté Active",
      description: "Rejoignez une communauté de 50,000+ apprenants passionnés et bénéficiez du mentorat d'experts.",
      features: ["Forums dédiés", "Sessions live", "Mentorat 1:1", "Networking"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Certifications Reconnues",
      description: "Obtenez des certificats officiels reconnus par l'industrie pour valoriser votre profil professionnel.",
      features: ["Badges numériques", "Certificats PDF", "Validation LinkedIn", "Portfolio intégré"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "IA Personnalisée",
      description: "Notre intelligence artificielle adapte votre parcours d'apprentissage selon vos objectifs et votre rythme.",
      features: ["Recommandations IA", "Parcours adaptatif", "Analyse de progression", "Prédictions de réussite"],
      color: "from-green-500 to-teal-500"
    }
  ];

  const aboutStats = [
    { number: "50K+", label: "Étudiants Actifs", icon: <Users className="w-6 h-6" /> },
    { number: "1000+", label: "Cours Disponibles", icon: <BookOpen className="w-6 h-6" /> },
    { number: "95%", label: "Taux de Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "Support Disponible", icon: <Shield className="w-6 h-6" /> }
  ];

  const feedbacks = [
    {
      name: "Marie Dubois",
      role: "Développeuse Full-Stack chez Google",
      content: "EduInteractive a complètement transformé ma carrière. Les cours sont d'une qualité exceptionnelle et la communauté est incroyablement supportive. J'ai pu décrocher mon poste de rêve grâce aux compétences acquises.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
      course: "Développement Web Avancé"
    },
    {
      name: "Thomas Martin",
      role: "Data Scientist chez Microsoft",
      content: "L'approche pédagogique est révolutionnaire. L'IA personnalisée m'a permis d'optimiser mon temps d'apprentissage et les projets pratiques m'ont donné une expérience concrète immédiatement applicable.",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
      course: "Intelligence Artificielle"
    },
    {
      name: "Sarah Johnson",
      role: "UX Designer chez Apple",
      content: "Les mentors sont exceptionnels et les ressources proposées sont de niveau professionnel. J'ai pu créer un portfolio impressionnant qui m'a ouvert les portes des meilleures entreprises tech.",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
      course: "Design UX/UI"
    }
  ];

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // Ici vous pourriez ajouter la logique d'envoi du feedback
    console.log('Feedback soumis:', feedbackForm);
    alert('Merci pour votre feedback ! Nous vous répondrons bientôt.');
    setFeedbackForm({ name: '', email: '', message: '', rating: 5 });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduInteractive
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#introduction" className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">À propos</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#feedback" className="text-gray-700 hover:text-blue-600 transition-colors">Témoignages</a>
            <a href="/login" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
  Commencer
</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-4 py-6 space-y-4">
              <a href="#introduction" className="block text-gray-700 hover:text-blue-600">Accueil</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600">À propos</a>
              <a href="#services" className="block text-gray-700 hover:text-blue-600">Services</a>
              <a href="#feedback" className="block text-gray-700 hover:text-blue-600">Témoignages</a>
             <a 
  href="/login" 
  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-center"
  onClick={() => setIsMobileMenuOpen(false)}
>
  Commencer
</a>
            </div>
          </div>
        )}
      </nav>

      {/* Introduction Section */}
      <section id="introduction" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-bounce"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-200/30 rounded-full animate-bounce delay-75"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20 px-8">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full shadow-sm">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Plateforme #1 en France</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Révolutionnez
                  </span>
                  <br />
                  <span className="text-gray-900">votre apprentissage</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Découvrez une plateforme éducative interactive alimentée par l'IA, conçue pour transformer votre façon d'apprendre et accélérer votre réussite professionnelle.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                 <a 
  href="/login" 
  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
>
  Commencer gratuitement
  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
</a>
                  <button className="group bg-white text-gray-700 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border">
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Voir la démo
                  </button>
                </div>

                <div className="flex items-center space-x-6 pt-4">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white"></div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">50,000+ étudiants</p>
                    <p className="text-xs text-gray-600">nous font confiance</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8">
                  <img 
                    src="https://images.pexels.com/photos/5965592/pexels-photo-5965592.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Étudiants apprenant"
                    className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Cards */}
                  <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-xl animate-float">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">Cours terminé!</p>
                        <p className="text-xs text-gray-500">React Avancé</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl animate-float delay-75">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                        <Trophy className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">Nouveau badge!</p>
                        <p className="text-xs text-gray-500">Expert JavaScript</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              À propos de 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> EduInteractive</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous sommes une équipe passionnée d'éducateurs, de technologues et d'innovateurs unis par une mission : démocratiser l'accès à une éducation de qualité mondiale.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Notre Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Transformer l'éducation en ligne en créant des expériences d'apprentissage immersives, personnalisées et accessibles à tous. Nous croyons que chaque individu mérite d'avoir accès aux meilleures ressources éducatives, peu importe sa localisation ou ses moyens.
              </p>

              <div className="flex items-center space-x-4 pt-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Nos Valeurs</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Excellence pédagogique, innovation technologique, inclusivité et bienveillance guident chacune de nos décisions. Nous nous engageons à créer un environnement d'apprentissage sûr, stimulant et respectueux pour tous nos apprenants.
              </p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Équipe EduInteractive"
                  className="rounded-xl shadow-2xl w-full"
                />
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">Innovation</p>
                    <p className="text-sm text-gray-600">Au cœur de tout</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {aboutStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nos Services
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Premium</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre écosystème complet d'outils et services conçus pour maximiser votre potentiel d'apprentissage et accélérer votre réussite professionnelle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-6 w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300 flex items-center justify-center group">
                  En savoir plus
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Témoignages & Feedback
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les histoires de réussite de notre communauté et partagez votre expérience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Testimonials */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Ce que disent nos étudiants</h3>
              
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <img 
                      src={feedbacks[activeFeedback].avatar}
                      alt={feedbacks[activeFeedback].name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {feedbacks[activeFeedback].name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {feedbacks[activeFeedback].role}
                      </p>
                      <div className="flex items-center mt-1">
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                          {feedbacks[activeFeedback].course}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(feedbacks[activeFeedback].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 leading-relaxed">
                    "{feedbacks[activeFeedback].content}"
                  </blockquote>
                </div>
                
                <div className="flex justify-center mt-6 space-x-2">
                  {feedbacks.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFeedback(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeFeedback 
                          ? 'bg-blue-600 w-8' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Feedback Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Partagez votre expérience</h3>
              
              <form onSubmit={handleFeedbackSubmit} className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    value={feedbackForm.name}
                    onChange={(e) => setFeedbackForm({...feedbackForm, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Entrez votre nom"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={feedbackForm.email}
                    onChange={(e) => setFeedbackForm({...feedbackForm, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Évaluation
                  </label>
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFeedbackForm({...feedbackForm, rating: star})}
                        className={`w-8 h-8 ${star <= feedbackForm.rating ? 'text-yellow-500' : 'text-gray-300'} hover:text-yellow-500 transition-colors`}
                      >
                        <Star className="w-full h-full fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Votre message
                  </label>
                  <textarea
                    value={feedbackForm.message}
                    onChange={(e) => setFeedbackForm({...feedbackForm, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Partagez votre expérience avec EduInteractive..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer mon feedback
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">EduInteractive</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                La plateforme d'apprentissage interactif qui révolutionne l'éducation en ligne. Rejoignez des milliers d'apprenants qui transforment leur carrière chaque jour.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">contact@eduinteractive.fr</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 mt-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+33 1 23 45 67 89</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Plateforme</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Cours</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Certifications</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Communauté</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentorat</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Entreprises</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Centre d'aide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Statut</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 EduInteractive. Tous droits réservés. Fait avec ❤️ en France.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Politique de confidentialité
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Conditions d'utilisation
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;