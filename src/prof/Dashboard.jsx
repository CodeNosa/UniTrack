// src/prof/DashboardProf.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from './contexts/ThemeContext'; // 👈 import du contexte

export default function DashboardProf() {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme(); // 👈 récupère l'état et la fonction

  const stats = {
    tauxPresence: 87,
    nbEtudiants: 42,
    coursEnCours: 'Algorithmes avancés',
    heure: '10h30 - 12h00',
  };

  const profile = {
    nom: 'Dr. Sami Ben Ali',
    role: 'Enseignant - Informatique',
    avatarInitials: 'SB',
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 16 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
    }),
  };

  const buttonHover = {
    scale: 1.03,
    boxShadow: '0 4px 12px rgba(255, 215, 0, 0.25)',
    transition: { duration: 0.25 },
  };

  const annonces = [
    {
      id: 1,
      title: "Pas de cours lundi prochain",
      date: "12 avr. 2025",
      content: "En raison d’un événement national, tous les cours sont suspendus lundi.",
      type: "important",
    },
    {
      id: 2,
      title: "Eid Mubarak !",
      date: "10 avr. 2025",
      content: "L’équipe de codeNOSA vous souhaite une excellente fête de l’Aïd.",
      type: "info",
    },
    {
      id: 3,
      title: "Mise à jour du système de notes",
      date: "8 avr. 2025",
      content: "Nouvelle interface disponible à partir de lundi. Formation obligatoire.",
      type: "update",
    },
    {
      id: 4,
      title: "Réunion pédagogique",
      date: "5 avr. 2025",
      content: "Réunion obligatoire vendredi à 14h en salle A203.",
      type: "meeting",
    },
    {
      id: 5,
      title: "Nouveau serveur de documents",
      date: "1 avr. 2025",
      content: "Le partage de cours se fait désormais via la plateforme centralisée.",
      type: "info",
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'important': return 'bg-red-500/20 border-red-500/40 text-red-300 dark:bg-red-900/30 dark:border-red-700/50 dark:text-red-200';
      case 'update': return 'bg-blue-500/20 border-blue-500/40 text-blue-300 dark:bg-blue-900/30 dark:border-blue-700/50 dark:text-blue-200';
      case 'meeting': return 'bg-purple-500/20 border-purple-500/40 text-purple-300 dark:bg-purple-900/30 dark:border-purple-700/50 dark:text-purple-200';
      default: return 'bg-amber-500/20 border-amber-500/40 text-amber-300 dark:bg-amber-900/30 dark:border-amber-700/50 dark:text-amber-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black dark:from-white dark:via-gray-50 dark:to-gray-100 text-gray-100 dark:text-gray-900 p-4 sm:p-6 md:p-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* === HEADER === */}
        <motion.header
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10"
        >
          <motion.h1
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent"
          >
            Bonjour, Professeur !
          </motion.h1>

          <div className="flex items-center gap-4">
            {/* Bouton Thème */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.15, backgroundColor: 'rgba(255,215,0,0.12)' }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl bg-white/5 dark:bg-gray-800/50 backdrop-blur-md border border-white/10 dark:border-gray-700 shadow-sm"
              aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
            >
              {isDark ? (
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.15, backgroundColor: 'rgba(255,215,0,0.12)' }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl bg-white/5 dark:bg-gray-800/50 backdrop-blur-md border border-white/10 dark:border-gray-700 shadow-sm"
              aria-label="Notifications"
            >
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </motion.button>

            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 bg-white/5 dark:bg-gray-800/50 backdrop-blur-md border border-white/10 dark:border-gray-700 rounded-xl px-4 py-2"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-bold text-black text-sm shadow-md">
                {profile.avatarInitials}
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold dark:text-gray-800">{profile.nom}</div>
                <div className="text-xs text-gray-400 dark:text-gray-600">{profile.role}</div>
              </div>
            </motion.div>
          </div>
        </motion.header>

        {/* === GRID PRINCIPAL === */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* SIDEBAR */}
          <aside className="lg:col-span-1 space-y-6">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.5}
              variants={cardVariant}
              className="bg-gradient-to-b from-gray-900/70 to-black/50 dark:from-white dark:to-gray-100 backdrop-blur-xl p-6 rounded-2xl border border-amber-700/20 dark:border-amber-300/30 shadow-xl"
            >
              <div className="flex flex-col items-center text-center gap-5">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.05 }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-xl font-bold text-black shadow-lg"
                >
                  {profile.avatarInitials}
                </motion.div>
                <div>
                  <div className="text-lg font-bold text-white dark:text-gray-900">{profile.nom}</div>
                  <div className="text-sm text-gray-400 dark:text-gray-600">{profile.role}</div>
                </div>
                <Link
                  to="/prof/profile"
                  className="w-full mt-1 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold text-sm shadow-md hover:shadow-amber-500/40 transition-all duration-300"
                >
                  Voir le profil
                </Link>
                <div className="w-full mt-3 grid grid-cols-2 gap-3">
                  <Link
                    to="/prof/parametres"
                    className="text-center py-2.5 rounded-lg bg-white/5 dark:bg-gray-200 text-sm border border-white/10 dark:border-gray-300 hover:bg-white/10 dark:hover:bg-gray-300 transition"
                  >
                    Paramètres
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-center py-2.5 rounded-lg bg-gradient-to-r from-red-900/40 to-red-800/40 dark:from-red-700/30 dark:to-red-600/30 text-red-300 dark:text-red-100 text-sm border border-red-700/40 dark:border-red-600/50 hover:bg-red-900/60 dark:hover:bg-red-700/50 transition"
                  >
                    Déconnexion
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="p-5 rounded-2xl bg-gray-900/50 dark:bg-gray-100/80 backdrop-blur border border-amber-700/15 dark:border-amber-300/20"
            >
              <h3 className="text-sm font-bold text-amber-400 dark:text-amber-600 mb-4 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Actions rapides
              </h3>
              <nav className="space-y-2.5">
                {[
                  { to: '/prof/appel', label: '📝 Faire l’appel' },
                  { to: '/prof/cours', label: '📚 Partager un cours' },
                  { to: '/prof/emploi', label: '📅 Emploi du temps' },
                  { to: '/prof/notes', label: '📊 Saisir des notes' },
                  { to: '/prof/chat', label: '💬 Chat ' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 6, backgroundColor: 'rgba(255,215,0,0.1)' }}
                    whileTap={{ scale: 0.99 }}
                    className="rounded-xl overflow-hidden"
                  >
                    <Link
                      to={item.to}
                      className="block w-full px-4 py-3 text-sm font-medium text-gray-200 dark:text-gray-800 hover:text-amber-300 dark:hover:text-amber-700 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </aside>

          {/* CONTENU PRINCIPAL */}
          <main className="lg:col-span-3 space-y-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <motion.div
                custom={1}
                variants={cardVariant}
                initial="hidden"
                animate="visible"
                whileHover={buttonHover}
                className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/8 to-amber-900/15 dark:from-amber-200/60 dark:to-amber-100 border border-amber-600/30 dark:border-amber-400/40 backdrop-blur-sm"
              >
                <div className="text-sm text-gray-300 dark:text-gray-700 mb-2">Taux de présence</div>
                <div className="flex items-end gap-2">
                  <div className="text-3xl font-extrabold text-amber-400 dark:text-amber-800">{stats.tauxPresence}%</div>
                  <div className="text-xs text-gray-500 dark:text-gray-600">(ce semestre)</div>
                </div>
                <div className="mt-4 h-2.5 w-full bg-gray-800 dark:bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stats.tauxPresence}%` }}
                    transition={{ duration: 1.3, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-400 dark:from-amber-600 dark:to-amber-500"
                  />
                </div>
              </motion.div>

              <motion.div
                custom={1.2}
                variants={cardVariant}
                initial="hidden"
                animate="visible"
                whileHover={buttonHover}
                className="p-6 rounded-2xl bg-gray-900/60 dark:bg-gray-100/80 border border-gray-700/40 dark:border-gray-300/50 backdrop-blur-sm"
              >
                <div className="text-sm text-gray-300 dark:text-gray-700 mb-2">Nombre d’étudiants</div>
                <div className="text-3xl font-bold text-white dark:text-gray-900">{stats.nbEtudiants}</div>
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-600">Inscrits à vos cours</div>
              </motion.div>

              <motion.div
                custom={1.4}
                variants={cardVariant}
                initial="hidden"
                animate="visible"
                whileHover={buttonHover}
                className="p-6 rounded-2xl bg-gray-900/60 dark:bg-gray-100/80 border border-gray-700/40 dark:border-gray-300/50 backdrop-blur-sm"
              >
                <div className="text-sm text-gray-300 dark:text-gray-700 mb-2">Cours en cours</div>
                <div className="text-lg font-semibold text-amber-300 dark:text-amber-700">{stats.coursEnCours}</div>
                <div className="text-sm text-gray-400 dark:text-gray-600 mt-1">{stats.heure}</div>
              </motion.div>
            </div>

            {/* Section activité */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="rounded-2xl bg-gray-900/50 dark:bg-gray-100/80 backdrop-blur border border-gray-700/30 dark:border-gray-300/40 p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-amber-400 dark:text-amber-600">Prochaine séance</h2>
                  <p className="text-gray-400 dark:text-gray-600">{stats.coursEnCours} — {stats.heure}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <motion.button
                    whileHover={buttonHover}
                    whileTap={{ scale: 0.97 }}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black text-sm font-medium shadow-md"
                  >
                    Gérer le cours
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.04, borderColor: 'rgba(255,215,0,0.5)' }}
                    whileTap={{ scale: 0.98 }}
                    className="px-5 py-2.5 rounded-xl border border-gray-600 dark:border-gray-400 text-gray-200 dark:text-gray-800 text-sm font-medium hover:border-amber-500/60 hover:text-amber-300 dark:hover:text-amber-700 transition"
                  >
                    Emploi du temps
                  </motion.button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  { title: 'Présences récentes', value: '38 / 42 présents', color: 'text-emerald-400 dark:text-emerald-700' },
                  { title: 'Devoirs à corriger', value: '3 en attente', color: 'text-amber-400 dark:text-amber-700' },
                  { title: 'Messages non lus', value: '2 messages', color: 'text-sky-400 dark:text-sky-700' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4, borderColor: 'rgba(255,215,0,0.3)' }}
                    className="p-5 rounded-xl bg-black/30 dark:bg-white/50 border border-gray-800/70 dark:border-gray-300/60"
                  >
                    <div className="text-xs text-gray-500 dark:text-gray-600">{item.title}</div>
                    <div className={`mt-1.5 text-sm font-semibold ${item.color}`}>{item.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* === ANNONCES SECTION === */}
            <motion.section
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mb-10"
            >
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold text-amber-400 dark:text-amber-600 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3.216A2.98 2.98 0 0121 6v7.5" />
                  </svg>
                  Annonces officielles
                </h2>
                <span className="text-sm text-gray-500 dark:text-gray-600 hidden sm:block">Pour tous les enseignants</span>
              </div>

              <div className="relative">
                <div className="absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-l from-gray-950 to-transparent dark:from-white pointer-events-none z-10 hidden md:block"></div>
                <div className="flex overflow-x-auto pb-3 -mx-2 px-2 scrollbar-hide">
                  {annonces.map((annonce, idx) => (
                    <motion.article
                      key={annonce.id}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.06 }}
                      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.5)' }}
                      className={`flex-shrink-0 w-80 mx-2 p-5 rounded-2xl border backdrop-blur-sm shadow-lg ${getTypeColor(annonce.type)}`}
                    >
                      <div className="space-y-2">
                        <h3 className="font-bold text-white dark:text-gray-900">{annonce.title}</h3>
                        <p className="text-sm text-gray-200 dark:text-gray-700 leading-relaxed">{annonce.content}</p>
                        <div className="text-xs text-gray-300 dark:text-gray-600 mt-2">{annonce.date}</div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </motion.section>
          </main>
        </div>
      </div>
    </div>
  );
}