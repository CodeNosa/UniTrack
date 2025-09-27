// src/pages/prof/Cours.jsx
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// ========== TOAST ==========
const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success'
    ? 'bg-emerald-500/90'
    : type === 'error'
      ? 'bg-rose-500/90'
      : 'bg-amber-500/90';

  const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.9 }}
      className={`${bgColor} text-gray-900 px-5 py-3 rounded-xl shadow-xl backdrop-blur-md z-50 fixed bottom-6 right-6 max-w-xs border border-white/20 font-medium`}
      role="alert"
    >
      <div className="flex items-center gap-2">
        <span aria-hidden="true">{icon}</span>
        <span>{message}</span>
      </div>
    </motion.div>
  );
};

// ========== EXPORT CSV ==========
const exportToCSV = (data, filename) => {
  if (!data?.length) return;
  const csvContent = [
    ['ID', 'Titre', 'Type', 'Contenu', 'Date'],
    ...data.map(item => [
      `"${item.id}"`,
      `"${item.titre}"`,
      `"${item.type}"`,
      `"${item.contenu}"`,
      `"${new Date(item.date).toLocaleString('fr-FR')}"`
    ])
  ]
    .map(row => row.join(';'))
    .join('\n');

  const blob = new Blob(['\uFEFF', csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

const Cours = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '',
    titre: '',
    type: 'pdf',
    contenu: '',
  });

  const [coursList, setCoursList] = useState([]);
  const [selectedCours, setSelectedCours] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [toast, setToast] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type });
  }, []);

  const closeToast = () => setToast(null);

  // Charger depuis localStorage
  useEffect(() => {
    const saved = localStorage.getItem('profCoursList');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setCoursList(parsed);
        }
      } catch (e) {
        console.error('Erreur de parsing', e);
        showToast('Erreur lors du chargement.', 'error');
      }
    }
  }, [showToast]);

  useEffect(() => {
    if (coursList.length > 0) {
      localStorage.setItem('profCoursList', JSON.stringify(coursList));
    } else {
      localStorage.removeItem('profCoursList');
    }
  }, [coursList]);

  const filteredCours = useMemo(() => {
    if (!searchTerm) return coursList;
    const term = searchTerm.toLowerCase();
    return coursList.filter(c =>
      cours.titre.toLowerCase().includes(term) ||
      cours.id.toLowerCase().includes(term) ||
      cours.type.toLowerCase().includes(term)
    );
  }, [coursList, searchTerm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.contenu.trim() || !formData.id.trim() || !formData.titre.trim()) {
      showToast('Veuillez remplir tous les champs requis.', 'error');
      return;
    }

    const newCours = {
      ...formData,
      date: new Date().toISOString(),
    };

    setCoursList([newCours, ...coursList]);
    setFormData({ id: '', titre: '', type: 'pdf', contenu: '' });
    showToast(`Cours "${newCours.titre}" partagé !`);
  };

  const handleCancel = () => {
    setFormData({ id: '', titre: '', type: 'pdf', contenu: '' });
  };

  const handleDelete = (coursId, event) => {
    event.stopPropagation();
    if (window.confirm('Supprimer ce cours ? Cette action est irréversible.')) {
      setCoursList(prev => {
        const updated = prev.filter(c => c.id !== coursId);
        showToast('Cours supprimé.', 'info');
        return updated;
      });
    }
  };

  const handleExport = () => {
    if (coursList.length === 0) {
      showToast('Aucun cours à exporter.', 'info');
      return;
    }
    exportToCSV(coursList, 'cours_prof.csv');
    showToast('Export CSV réussi !', 'success');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleViewCours = (cours) => {
    setSelectedCours(cours);
  };

  const handleBackToList = () => {
    setSelectedCours(null);
  };

  // ========== IMPORTATION ==========
  const handleFileImport = (files) => {
    if (files.length === 0) return;
    const file = files[0];
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain'
    ];
    if (!allowedTypes.includes(file.type)) {
      showToast('Format non supporté. Utilisez PDF, DOC, DOCX ou TXT.', 'error');
      return;
    }

    const message = `📄 ${file.name}`;
    setFormData(prev => ({ ...prev, type: 'pdf', contenu: message }));
    showToast('Fichier prêt à être partagé !', 'info');
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileImport(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'video': return '🎥 Vidéo';
      case 'lien': return '🔗 Lien';
      default: return '📄 Document';
    }
  };

  // === VUE DÉTAIL ===
  if (selectedCours) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100 py-8 px-4 print:bg-white print:text-black relative overflow-hidden">
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="hidden print:hidden mb-8 flex gap-3">
            <motion.button
              onClick={handleBackToList}
              className="flex items-center gap-2 text-amber-400 hover:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
              aria-label="Retour"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(251, 191, 36, 0.15)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrint}
              className="px-4 py-2 bg-amber-500/10 text-amber-400 rounded-lg border border-amber-500/30 hover:bg-amber-500/20 transition"
            >
              🖨️ Imprimer
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/60 backdrop-blur-2xl border border-amber-700/30 rounded-2xl p-7 shadow-2xl print:bg-white"
          >
            <div className="text-center mb-7 print:text-left">
              <div className="inline-block px-5 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm font-mono mb-4 print:bg-amber-100 print:text-amber-800">
                ID : {selectedCours.id}
              </div>
              <h1 className="text-2xl font-bold text-white mb-2 print:text-black">{selectedCours.titre}</h1>
              <p className="text-gray-400 print:text-gray-700">{getTypeLabel(selectedCours.type)}</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-amber-400 mb-2">Contenu</h3>
                <p className="text-gray-200 break-words bg-gray-800/40 p-3 rounded-lg">
                  {selectedCours.contenu}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-amber-400 mb-2">Date de partage</h3>
                <p className="text-gray-300">
                  {new Date(selectedCours.date).toLocaleDateString('fr-FR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // === VUE PRINCIPALE ===
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100 relative overflow-hidden">
      {/* Arrière-plan décoratif animé (sans librairie) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-60 h-60 bg-amber-500/5 rounded-full blur-3xl animate-float animation-delay-4000"></div>
      </div>

      <div className="relative z-10 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent"
            >
              Bibliothèque de Cours
            </motion.h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
              Partagez vos ressources pédagogiques en un clic.
            </p>
          </motion.div>

          <LayoutGroup>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Formulaire */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-gray-900/50 backdrop-blur-xl border border-amber-800/30 rounded-2xl p-7 shadow-2xl"
              >
                <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-2">
                  <span>📚</span> Nouveau Cours
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="id" className="block text-sm font-medium text-amber-400 mb-2">
                      ID du cours <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="id"
                      name="id"
                      type="text"
                      value={formData.id}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/60 focus:border-transparent transition font-mono"
                      placeholder="Ex: ALGO-S3-01"
                    />
                  </div>

                  <div>
                    <label htmlFor="titre" className="block text-sm font-medium text-amber-400 mb-2">
                      Titre <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="titre"
                      name="titre"
                      type="text"
                      value={formData.titre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/60 focus:border-transparent"
                      placeholder="Algorithmes avancés"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-amber-400 mb-2">
                      Document <span className="text-rose-400">*</span>
                    </label>
                    <div
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      className={`border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 ${
                        isDragging
                          ? 'border-amber-400 bg-amber-500/10 scale-[1.02]'
                          : 'border-gray-700 bg-gray-900/40'
                      }`}
                    >
                      <div className="text-3xl mb-3">📤</div>
                      <p className="text-gray-300 mb-4 min-h-[24px]">
                        {formData.contenu ? (
                          <motion.span
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-emerald-400 font-medium flex items-center justify-center gap-2"
                          >
                            ✅ {formData.contenu}
                          </motion.span>
                        ) : (
                          'Glissez un fichier ici ou cliquez pour importer'
                        )}
                      </p>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.txt"
                        onChange={(e) => handleFileImport(e.target.files)}
                        className="hidden"
                        id="file-import"
                      />
                      <label
                        htmlFor="file-import"
                        className="inline-block px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 rounded-xl cursor-pointer transition hover:opacity-90 shadow-md font-semibold"
                      >
                        Choisir un fichier
                      </label>
                      <p className="text-xs text-gray-500 mt-3">
                        Formats : PDF, DOC, DOCX, TXT
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <motion.button
                      whileHover={{ scale: 1.03, boxShadow: '0 6px 20px rgba(251, 191, 36, 0.4)' }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={!formData.contenu.trim()}
                      className={`flex-1 py-3.5 font-semibold rounded-xl shadow-lg ${
                        formData.contenu.trim()
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900'
                          : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      🚀 Partager le cours
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={handleCancel}
                      className="px-5 py-3.5 border border-gray-600 text-gray-200 font-medium rounded-xl hover:bg-gray-800/50 transition"
                    >
                      Annuler
                    </motion.button>
                  </div>
                </form>
              </motion.div>

              {/* Liste */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-gray-900/50 backdrop-blur-xl border border-amber-800/30 rounded-2xl p-7 shadow-2xl"
              >
                <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-amber-400 flex items-center gap-2">
                    <span>📚</span> Cours partagés
                  </h2>
                  <div className="flex gap-3 items-center">
                    <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1.5 rounded-full">
                      {filteredCours.length} / {coursList.length}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(251, 191, 36, 0.15)' }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleExport}
                      className="px-4 py-2 bg-amber-500/10 text-amber-400 rounded-lg border border-amber-500/30 hover:bg-amber-500/20 transition"
                    >
                      📥 Export CSV
                    </motion.button>
                  </div>
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Rechercher par titre, ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-5 py-3 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>

                {filteredCours.length === 0 ? (
                  <div className="text-center py-16 text-gray-500">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="text-5xl mb-4"
                    >
                      📭
                    </motion.div>
                    <p className="text-lg">
                      {searchTerm ? 'Aucun résultat.' : 'Aucun cours publié.'}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 max-h-[480px] overflow-y-auto pr-2 custom-scrollbar">
                    <AnimatePresence>
                      {filteredCours.map((cours) => (
                        <motion.div
                          key={cours.id}
                          layout
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          whileHover={{ 
                            x: 8, 
                            backgroundColor: 'rgba(251, 191, 36, 0.08)',
                            borderColor: 'rgba(251, 191, 36, 0.4)'
                          }}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => handleViewCours(cours)}
                          className="p-5 bg-gray-800/40 rounded-xl border border-gray-700/50 cursor-pointer transition-all duration-200 relative hover:border-amber-600/50"
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => e.key === 'Enter' && handleViewCours(cours)}
                        >
                          <div className="flex justify-between items-start">
                            <div className="max-w-[65%]">
                              <div className="font-semibold text-white truncate">{cours.titre}</div>
                              <div className="text-xs text-amber-400 mt-1.5 flex items-center gap-1">
                                {getTypeLabel(cours.type)}
                              </div>
                            </div>
                            <div className="text-right min-w-[30%]">
                              <div className="font-mono text-sm font-medium text-amber-300 truncate">
                                {cours.id}
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                {new Date(cours.date).toLocaleDateString('fr-FR')}
                              </div>
                            </div>
                          </div>
                          <motion.button
                            onClick={(e) => handleDelete(cours.id, e)}
                            whileHover={{ 
                              scale: 1.1,
                              backgroundColor: 'rgba(239, 68, 68, 0.25)',
                              boxShadow: '0 0 12px rgba(239, 68, 68, 0.5)'
                            }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center"
                            aria-label="Supprimer"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </motion.button>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                )}
              </motion.div>
            </div>
          </LayoutGroup>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <Toast
            key="toast"
            message={toast.message}
            type={toast.type}
            onClose={closeToast}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cours;