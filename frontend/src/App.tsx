import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import HomePage from "./pages/HomePage.tsx";
import ProblemsPage from "./pages/ProblemsPage.tsx";
import Navbar from "./components/Navbar.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import ProblemDetailPage from "./pages/ProblemDetailPage.tsx";
import TopicProblemsPage from "./pages/TopicProblemsPage.tsx";

function App() {
  const location = useLocation();


  const isProblemPage = location.pathname.startsWith("/problem/");

  return (
    <div>
      
      {!isProblemPage && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/topics" element={<ProblemsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/problems/:topic" element={<TopicProblemsPage />} />
        <Route path="/problem/:id" element={<ProblemDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;