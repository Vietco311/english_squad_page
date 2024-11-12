import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from './StudentList';
import StudentProfile from './StudentProfile';
import MyProfile from './MyProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentList />} /> {/* Page d'accueil avec la liste */}
        <Route path="/profile/:id" element={<StudentProfile />} />
        <Route path="/my_profile" element={<MyProfile />} /> {/* Page profil */}
      </Routes>
    </Router>
  );
}

export default App;
