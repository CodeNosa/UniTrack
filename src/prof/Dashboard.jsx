import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

// Single-file React app containing professor pages: Dashboard, CoursePage, StudentList, GradeEntry,
// AbsenceManagement, Messaging, PlanningRequest. Uses Tailwind CSS for rapid styling.

// Mock data (replace with API / Firebase calls in real app)
const mockCourses = [
  { id: 'c1', title: 'Systèmes Distribués', nextSession: '2025-10-02 10:00', students: 42 },
  { id: 'c2', title: 'Réseaux', nextSession: '2025-10-03 08:30', students: 36 },
];

const mockStudents = [
  { id: 's1', name: 'Amine Ben', presence: true, avg: 14.2 },
  { id: 's2', name: 'Lina Trabelsi', presence: false, avg: 12.5 },
  { id: 's3', name: 'Sofia Gharbi', presence: true, avg: 16.0 },
];

// --- Layout ---
function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4">
      <h2 className="text-xl font-semibold mb-6">Prof Dashboard</h2>
      <nav className="space-y-2">
        <Link to="/" className="block py-2 px-3 rounded hover:bg-gray-100">Dashboard</Link>
        <Link to="/courses" className="block py-2 px-3 rounded hover:bg-gray-100">Cours</Link>
        <Link to="/students" className="block py-2 px-3 rounded hover:bg-gray-100">Étudiants</Link>
        <Link to="/grades" className="block py-2 px-3 rounded hover:bg-gray-100">Saisie des notes</Link>
        <Link to="/absences" className="block py-2 px-3 rounded hover:bg-gray-100">Gestion des absences</Link>
        <Link to="/messages" className="block py-2 px-3 rounded hover:bg-gray-100">Messagerie</Link>
        <Link to="/planning" className="block py-2 px-3 rounded hover:bg-gray-100">Planning</Link>
      </nav>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-white">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">Espace Prof</h1>
        <div className="text-sm text-gray-500">Université - Année 2025</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm">Prof. Sami</div>
        <div className="w-8 h-8 rounded-full bg-gray-200" />
      </div>
    </header>
  );
}

// --- Pages ---
function DashboardPage() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Tableau de bord</h2>
      <div className="grid grid-cols-3 gap-4">
        {mockCourses.map((c) => (
          <div key={c.id} className="p-4 border rounded bg-white">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm text-gray-500">Prochaine séance: <strong>{c.nextSession}</strong></p>
            <p className="mt-2">Nombre d'étudiants: <strong>{c.students}</strong></p>
            <Link to={`/courses/${c.id}`} className="inline-block mt-3 text-sm text-indigo-600">Voir le cours</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function CoursesPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold mb-4">Cours</h2>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">Ajouter un cours</button>
      </div>

      <div className="space-y-4">
        {mockCourses.map((c) => (
          <div key={c.id} className="p-4 border rounded bg-white flex justify-between items-center">
            <div>
              <h3 className="font-medium">{c.title}</h3>
              <p className="text-sm text-gray-500">Prochaine séance: {c.nextSession}</p>
            </div>
            <div className="flex gap-2">
              <Link to={`/courses/${c.id}`} className="px-3 py-1 border rounded">Ouvrir</Link>
              <button className="px-3 py-1 border rounded">Éditer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CoursePage({ courseId }) {
  const course = mockCourses.find((c) => c.id === courseId) || mockCourses[0];
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">{course.title}</h2>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="col-span-2 p-4 border rounded bg-white">
          <h3 className="font-medium mb-2">Contenus</h3>
          <ul className="space-y-2">
            <li className="p-2 border rounded">PDF: Chapitre 1 <button className="ml-3 text-sm text-indigo-600">Télécharger</button></li>
            <li className="p-2 border rounded">Vidéo: Introduction <button className="ml-3 text-sm text-indigo-600">Voir</button></li>
          </ul>

          <div className="mt-6">
            <h4 className="font-medium mb-2">Devoirs</h4>
            <div className="p-3 border rounded">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">Devoir 1 — Réseaux</div>
                  <div className="text-sm text-gray-500">Date de rendu: 2025-10-10</div>
                </div>
                <button className="px-3 py-1 border rounded">Voir les rendus</button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border rounded bg-white">
          <h3 className="font-medium mb-2">Discussions</h3>
          <div className="text-sm text-gray-600">Aucun fil actif — encourager les étudiants à poser des questions ici.</div>
        </div>
      </div>
    </div>
  );
}

function StudentsPage() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Liste des étudiants</h2>
      <div className="bg-white border rounded p-4">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left">
              <th className="p-2">Nom</th>
              <th className="p-2">Présence</th>
              <th className="p-2">Moyenne</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockStudents.map((s) => (
              <tr key={s.id} className="border-t">
                <td className="p-2">{s.name}</td>
                <td className="p-2">{s.presence ? 'Présent' : 'Absent'}</td>
                <td className="p-2">{s.avg}</td>
                <td className="p-2">
                  <button className="px-2 py-1 border rounded mr-2">Profil</button>
                  <button className="px-2 py-1 border rounded">Marquer présence</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function GradesPage() {
  const [grades, setGrades] = React.useState(
    mockStudents.map((s) => ({ studentId: s.id, name: s.name, grade: 0 }))
  );

  const updateGrade = (idx, value) => {
    const copy = [...grades];
    copy[idx].grade = Number(value);
    setGrades(copy);
  };

  const computeAverage = () => {
    if (!grades.length) return 0;
    const sum = grades.reduce((acc, g) => acc + (g.grade || 0), 0);
    return (sum / grades.length).toFixed(2);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Saisie des notes</h2>
      <div className="bg-white border rounded p-4">
        <div className="mb-4">Barème: <strong>20</strong> — Coef (exemple): <strong>1</strong></div>
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left">
              <th className="p-2">Étudiant</th>
              <th className="p-2">Note</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((g, i) => (
              <tr key={g.studentId} className="border-t">
                <td className="p-2">{g.name}</td>
                <td className="p-2">
                  <input type="number" min="0" max="20" value={g.grade} onChange={(e) => updateGrade(i, e.target.value)} className="border p-1 w-24" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">Moyenne calculée: <strong>{computeAverage()}</strong></div>
        <div className="mt-4">
          <button className="px-4 py-2 bg-green-600 text-white rounded">Enregistrer les notes</button>
        </div>
      </div>
    </div>
  );
}

function AbsencesPage() {
  const [students, setStudents] = React.useState(mockStudents.map((s) => ({ ...s })));

  const togglePresence = (id) => {
    setStudents((prev) => prev.map((p) => (p.id === id ? { ...p, presence: !p.presence } : p)));
  };

  const markAllAbsent = () => {
    setStudents((prev) => prev.map((p) => ({ ...p, presence: false })));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Gestion des absences</h2>
      <div className="mb-4">
        <button className="px-3 py-1 border rounded mr-2" onClick={markAllAbsent}>Marquer tous absents</button>
        <button className="px-3 py-1 border rounded">Exporter CSV</button>
      </div>
      <div className="bg-white border rounded p-4">
        {students.map((s) => (
          <div key={s.id} className="flex items-center justify-between border-b py-2">
            <div>
              <div className="font-medium">{s.name}</div>
              <div className="text-sm text-gray-500">Commentaires: <em>—</em></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm">{s.presence ? 'Présent' : 'Absent'}</div>
              <button className="px-2 py-1 border rounded" onClick={() => togglePresence(s.id)}>Basculer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MessagesPage() {
  const [to, setTo] = React.useState('course');
  const [message, setMessage] = React.useState('');

  const send = () => {
    alert(`Message envoyé à ${to}: ${message}`);
    setMessage('');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Messagerie</h2>
      <div className="bg-white border rounded p-4">
        <div className="mb-3">
          <label className="block text-sm">Envoyer à</label>
          <select value={to} onChange={(e) => setTo(e.target.value)} className="border p-2 w-64">
            <option value="course">Tous les étudiants du cours</option>
            <option value="groupA">Groupe A</option>
            <option value="student_s1">Étudiant individuel</option>
          </select>
        </div>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border p-2 h-28" placeholder="Écrire le message..." />
        <div className="mt-3">
          <button onClick={send} className="px-4 py-2 bg-indigo-600 text-white rounded">Envoyer</button>
        </div>
      </div>
    </div>
  );
}

function PlanningPage() {
  const navigate = useNavigate();
  const [request, setRequest] = React.useState({ date: '', reason: '' });

  const submitRequest = () => {
    // In a real app: POST to admin API
    alert('Demande envoyée au service administratif');
    navigate('/');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Planning — Demande de modification</h2>
      <div className="bg-white border rounded p-4 max-w-xl">
        <label className="block text-sm mb-2">Date souhaitée</label>
        <input type="datetime-local" value={request.date} onChange={(e) => setRequest({ ...request, date: e.target.value })} className="border p-2 w-full mb-3" />
        <label className="block text-sm mb-2">Motif</label>
        <textarea value={request.reason} onChange={(e) => setRequest({ ...request, reason: e.target.value })} className="border p-2 w-full mb-3" />
        <div className="flex gap-2">
          <button onClick={submitRequest} className="px-4 py-2 bg-indigo-600 text-white rounded">Soumettre au Admin</button>
          <button className="px-4 py-2 border rounded" onClick={() => navigate(-1)}>Annuler</button>
        </div>
      </div>
    </div>
  );
}

// --- Router wrapper that matches course id param to component props ---
function CourseRouteWrapper() {
  // extract id from path using window.location (simple approach since this is single-file demo)
  const id = window.location.pathname.split('/').pop();
  return <CoursePage courseId={id} />;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar />
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/:id" element={<CourseRouteWrapper />} />
              <Route path="/students" element={<StudentsPage />} />
              <Route path="/grades" element={<GradesPage />} />
              <Route path="/absences" element={<AbsencesPage />} />
              <Route path="/messages" element={<MessagesPage />} />
              <Route path="/planning" element={<PlanningPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

// Usage notes (copy to project README):
// - This file expects Tailwind CSS to be configured in the project.
// - Replace mock data with real API/Firebase calls in useEffect hooks.
// - Add form validation and error handling for production.
// - The app uses react-router; install it via `npm i react-router-dom`.
