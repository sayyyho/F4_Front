// Router.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Create from "@pages/create/Create";
import Test from "@pages/test/Test";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="test/:page" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
