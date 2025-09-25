import React, { useState, useEffect } from 'react';
import { GraduationCap, Users, Trophy, BookOpen, ChevronRight, Star, Play, CheckCircle, ArrowRight, Menu, X, Globe, Clock, Award, Target, Heart, Lightbulb, Shield, MessageCircle, Send, Mail, Phone, MapPin, Building2, Briefcase, Brain, Users as Users2, Zap, BookOpenCheck, Scale } from 'lucide-react';

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
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const programs = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "École de Commerce & Management",
      description: "Programmes d'excellence en management, finance internationale et entrepreneuriat avec partenariats prestigieux européens et africains.",
      features: ["MBA Executive International", "Master Finance & Banking", "Commerce International", "Digital Business & Innovation"],
      color: "from-blue-600 to-blue-800",
      duration: "3-5 ans",
      accreditation: "AACSB International"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "École d'Ingénieurs & Technologies",
      description: "Formation d'élite en ingénierie avec laboratoires de recherche et partenariats industriels majeurs.",
      features: ["Intelligence Artificielle & Data Science", "Cybersécurité & Réseaux", "Génie Logiciel", "Ingénierie Industrielle"],
      color: "from-purple-600 to-indigo-700",
      duration: "5 ans",
      accreditation: "CTI France"
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "École de Droit & Sciences Politiques",
      description: "Formation juridique prestigieuse avec cliniques juridiques et stages internationaux dans les grands cabinets.",
      features: ["Droit des Affaires International", "Droit Financier & Bancaire", "Propriété Intellectuelle", "Relations Internationales"],
      color: "from-amber-600 to-orange-700",
      duration: "3-5 ans",
      accreditation: "Ordre des Avocats"
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "École de Médecine & Sciences de la Santé",
      description: "Excellence médicale avec hôpital universitaire partenaire et programmes de recherche médicale avancée.",
      features: ["Médecine Générale", "Spécialisations Médicales", "Médecine Dentaire", "Pharmacie & Biotechnologies"],
      color: "from-emerald-600 to-teal-700",
      duration: "6-8 ans",
      accreditation: "Ordre des Médecins"
    }
  ];

  const aboutStats = [
    { number: "12,500+", label: "Diplômés d'Excellence", icon: <GraduationCap className="w-6 h-6" /> },
    { number: "180+", label: "Professeurs Docteurs", icon: <Users className="w-6 h-6" /> },
    { number: "96%", label: "Taux d'Employabilité", icon: <Trophy className="w-6 h-6" /> },
    { number: "40+", label: "Partenaires Internationaux", icon: <Globe className="w-6 h-6" /> }
  ];

  const feedbacks = [
    {
      name: "Dr. Amira Ben Salem",
      role: "Directrice Générale, Banque Internationale de Tunis",
      content: "L'Université Méditerranéenne de Tunis m'a fourni une formation exceptionnelle qui m'a permis d'atteindre les plus hauts niveaux du secteur bancaire. La qualité des enseignements et le réseau professionnel sont remarquables. Cette institution prépare véritablement aux défis du leadership moderne.",
      avatar: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      program: "MBA Finance Internationale",
      year: "Promotion 2015"
    },
    {
      name: "Ing. Karim Jaziri",
      role: "CTO, Tunisia Digital Hub",
      content: "La formation en ingénierie informatique à l'UMT combine parfaitement théorie avancée et pratique industrielle. Les laboratoires high-tech et les projets avec des entreprises internationales m'ont préparé à innover dans le secteur technologique tunisien et africain.",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      program: "Ingénieur Systèmes & IA",
      year: "Promotion 2018"
    },
    {
      name: "Me. Salma Trabelsi",
      role: "Associée Senior, Cabinet International",
      content: "Les études de droit à l'UMT, avec leurs stages internationaux et leurs partenariats avec les grands cabinets européens, m'ont ouvert les portes du droit international. La rigueur académique et l'accompagnement personnalisé font toute la différence.",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      program: "Master Droit des Affaires",
      year: "Promotion 2017"
    }
  ];

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log('Demande d\'information soumise:', feedbackForm);
    alert('Merci pour votre intérêt ! Notre équipe d\'admissions vous contactera sous 48h.');
    setFeedbackForm({ name: '', email: '', message: '', rating: 5 });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                  Université codeNOSA
                </span>
                <div className="text-xs text-gray-500 font-medium">de Tunis</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#accueil" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Accueil</a>
              <a href="#apropos" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">À propos</a>
              <a href="#programmes" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Programmes</a>
              <a href="#temoignages" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Témoignages</a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Admissions 2024
              </button>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-md border-t shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a href="#accueil" className="block text-gray-700 hover:text-blue-700 font-medium py-2">Accueil</a>
              <a href="#apropos" className="block text-gray-700 hover:text-blue-700 font-medium py-2">À propos</a>
              <a href="#programmes" className="block text-gray-700 hover:text-blue-700 font-medium py-2">Programmes</a>
              <a href="#temoignages" className="block text-gray-700 hover:text-blue-700 font-medium py-2">Témoignages</a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold">
                Admissions 2024
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-indigo-50/80 rounded-3xl"></div>
            
            <div className="absolute top-20 left-10 w-24 h-24 bg-blue-200/20 rounded-full animate-float"></div>
            <div className="absolute top-40 right-16 w-20 h-20 bg-purple-200/25 rounded-full animate-float delay-75"></div>
            <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-indigo-200/20 rounded-full animate-float delay-150"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center py-24 px-8 lg:px-12">
              <div className="space-y-8">
                <div className="inline-flex items-center px-5 py-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-100">
                  <Trophy className="w-4 h-4 text-amber-500 mr-2" />
                  <span className="text-sm font-semibold text-gray-700">Excellence Universitaire depuis 2025</span>
                </div>
                
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-800 bg-clip-text text-transparent">
                      Université
                    </span>
                  </h1>
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    <span className="text-gray-900">codeNOSA</span>
                  </h1>
                  <div className="flex items-center space-x-3">
                    <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <span className="text-xl lg:text-2xl font-medium text-gray-600">de Tunis</span>
                  </div>
                </div>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Rejoignez l'université privée de référence en Tunisie et en Afrique du Nord. 
                  Nos programmes d'excellence ouvrent les portes des carrières internationales les plus prestigieuses.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    Découvrir nos programmes
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button className="group bg-white/90 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-200">
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Visite virtuelle
                  </button>
                </div>

                <div className="flex items-center space-x-8 pt-6">
                  <div className="flex -space-x-3">
                    {[
                      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60",
                      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=60",
                      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=60",
                      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=60"
                    ].map((src, i) => (
                      <img 
                        key={i} 
                        src={src} 
                        alt={Alumni ${i + 1}}
                        className="w-12 h-12 rounded-full object-cover border-3 border-white shadow-lg"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">12,500+ diplômés</p>
                    <p className="text-sm text-gray-600">dans 65 pays</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100/60 to-purple-100/60 rounded-3xl p-8">
                  <img 
                    src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Campus UMT Tunis"
                    className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700 w-full object-cover"
                  />
                  
                  {/* Floating Achievement Cards */}
                  <div className="absolute -top-6 -left-6 bg-white p-5 rounded-2xl shadow-xl animate-float border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-800">Accréditations</p>
                        <p className="text-xs text-gray-600">Internationales</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl animate-float delay-100 border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-800">Top 3 Tunisie</p>
                        <p className="text-xs text-gray-600">Universités privées</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium mb-6">
              <Building2 className="w-4 h-4 mr-2" />
              À propos de l'UMT
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              L'Excellence Universitaire 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                au Cœur de la codeNOSA
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Depuis plus de 30 ans, l'Université codeNOSA de Tunis forme l'élite intellectuelle et professionnelle 
              tunisienne, maghrébine et africaine dans un environnement d'excellence académique et d'innovation pédagogique.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Former les leaders de demain en combinant excellence académique internationale, innovation pédagogique 
                    et ouverture sur le monde codeNOSA et africain. Nous préparons nos étudiants aux défis du 21ème siècle.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Nos Valeurs</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Excellence, intégrité, innovation et diversité culturelle sont les piliers de notre identité. 
                    Nous cultivons un environnement multiculturel où chaque talent peut s'épanouir.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation Pédagogique</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Méthodes d'enseignement modernes, technologies de pointe et partenariats internationaux 
                    pour une formation en phase avec les exigences du marché global.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100/80 to-purple-100/80 rounded-3xl p-8">
                <img 
                  src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Étudiants UMT"
                  className="rounded-2xl shadow-2xl w-full object-cover h-96"
                />
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">Innovation</p>
                    <p className="text-sm text-gray-600">& Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="bg-gradient-to-br from-blue-700 via-purple-700 to-indigo-800 rounded-3xl p-12 lg:p-16 shadow-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {aboutStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white group-hover:bg-white/30 transition-all duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 font-semibold text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programmes" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium mb-6">
              <BookOpenCheck className="w-4 h-4 mr-2" />
              Nos Programmes
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Écoles d'Excellence
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                & Programmes Prestigieux
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Découvrez nos quatre écoles spécialisées, reconnues pour leur excellence académique, 
              leurs accréditations internationales et leurs débouchés prestigieux.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-gray-200"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={w-18 h-18 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300}>
                    <div className="text-white">
                      {program.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-500 mb-1">Durée</div>
                    <div className="text-lg font-bold text-gray-800">{program.duration}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {program.description}
                </p>

                <div className="space-y-3 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl mb-6">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-amber-600" />
                    <span className="text-sm font-semibold text-gray-700">Accréditation:</span>
                  </div>
                  <span className="text-sm font-bold text-amber-700">{program.accreditation}</span>
                </div>

                <button className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-50 hover:to-purple-50 text-gray-700 hover:text-blue-700 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group border hover:border-blue-200">
                  En savoir plus
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="temoignages" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Témoignages
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nos Diplômés Témoignent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les parcours exceptionnels de nos anciens étudiants et leur expérience à l'UMT
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Testimonials Carousel */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Réussites de nos Alumni</h3>
              
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
                  <div className="flex items-center mb-6">
                    <img 
                      src={feedbacks[activeFeedback].avatar}
                      alt={feedbacks[activeFeedback].name}
                      className="w-16 h-16 rounded-full object-cover mr-4 border-3 border-gray-200"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg">
                        {feedbacks[activeFeedback].name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-1">
                        {feedbacks[activeFeedback].role}
                      </p>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                          {feedbacks[activeFeedback].program}
                        </span>
                        <span className="text-xs text-gray-500">
                          {feedbacks[activeFeedback].year}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex mb-6">
                    {[...Array(feedbacks[activeFeedback].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 leading-relaxed text-lg font-medium italic">
                    "{feedbacks[activeFeedback].content}"
                  </blockquote>
                </div>
                
                <div className="flex justify-center mt-8 space-x-2">
                  {feedbacks.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFeedback(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        index === activeFeedback 
                          ? 'bg-blue-600 w-10' 
                          : 'bg-gray-300 hover:bg-gray-400 w-3'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Demande d'Information</h3>
              
              <form onSubmit={handleFeedbackSubmit} className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    value={feedbackForm.name}
                    onChange={(e) => setFeedbackForm({...feedbackForm, name: e.target.value})}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                    placeholder="Votre nom et prénom"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Adresse email *
                  </label>
                  <input
                    type="email"
                    value={feedbackForm.email}
                    onChange={(e) => setFeedbackForm({...feedbackForm, email: e.target.value})}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Programme d'intérêt
                  </label>
                  <select className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg bg-white">
                    <option>École de Commerce & Management</option>
                    <option>École d'Ingénieurs & Technologies</option>
                    <option>École de Droit & Sciences Politiques</option>
                    <option>École de Médecine & Sciences de la Santé</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Votre message
                  </label>
                  <textarea
                    value={feedbackForm.message}
                    onChange={(e) => setFeedbackForm({...feedbackForm, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-lg"
                    placeholder="Parlez-nous de votre projet académique et professionnel..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Demander des informations
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Nos conseillers d'orientation vous contacteront sous 48h
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">Université Méditerranéenne</span>
                  <div className="text-blue-300 font-medium">de Tunis</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-8 max-w-lg text-lg">
                L'Université Méditerranéenne de Tunis forme depuis plus de 30 ans l'élite académique 
                et professionnelle tunisienne, maghrébine et africaine dans un esprit d'excellence et d'innovation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>henn5722@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+216 12 123 123</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Avenue bir boutazza, 5050 monastir, moknin</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-8 text-blue-300">Nos Écoles</h4>
              <ul className="space-y-4 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors hover:pl-2">École de Commerce</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:pl-2">École d'Ingénieurs</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:pl-2">École de Droit</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:pl-2">École de Médecine</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:pl-2">Formation Continue</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-8 text-blue-300">Université</h4>
              <ul className="space-y-4 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors hover:pl-2">Admissions</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:pl-2">Campus & Résidences</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:pl-2">Recherche & Innovation</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:pl-2">Partenaires Internationaux</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:pl-2">Réseau Alumni</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0 text-center md:text-left">
                © 2024 Université Méditerranéenne de Tunis. Tous droits réservés. 
                <span className="block md:inline"> Excellence & Innovation depuis 1992.</span>
              </p>
              <div className="flex space-x-8">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  Politique de confidentialité
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  Mentions légales
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  Accréditations
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float.delay-75 {
          animation-delay: 0.75s;
        }
        .animate-float.delay-100 {
          animation-delay: 1s;
        }
        .animate-float.delay-150 {
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  );
}

export default App;