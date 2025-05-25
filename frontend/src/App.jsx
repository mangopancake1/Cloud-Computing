import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HomePage from "./components/HomePage";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" replace />} />  {/* Redirect */}
        <Route path="/welcome" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route
          path="/notes"
          element={isAuthenticated ? <PostList /> : <Navigate to="/" />}
        />
        <Route path="/add" element={<AddPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
