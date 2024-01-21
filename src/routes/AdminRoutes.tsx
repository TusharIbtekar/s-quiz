import NotFoundPage from "@/components/notfound/NotFound";
import Admin from "@/pages/admin";
import CreateQuiz from "@/pages/quiz/create";
import EditQuiz from "@/pages/quiz/edit";
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
