import NotFoundPage from "@/components/notfound/NotFound";
import Admin from "@/pages/Admin";
import CreateQuiz from "@/pages/CreateQuiz";
import EditQuiz from "@/pages/EditQuiz";
import { Navigate, Route, Routes } from "react-router-dom";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin" />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/create" element={<CreateQuiz />} />
      <Route path="/admin/edit/:id" element={<EditQuiz />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default AdminRoutes;
