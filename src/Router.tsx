// Router.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
