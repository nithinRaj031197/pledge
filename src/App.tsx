import { GoogleOAuthProvider } from "@react-oauth/google";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./screens/LoginPage";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <GoogleOAuthProvider clientId="your-client-id">
            <Navbar />
            <Intro />
          </GoogleOAuthProvider>
        }
      />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
