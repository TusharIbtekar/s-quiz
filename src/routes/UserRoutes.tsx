import NotFoundPage from "@/components/notfound/NotFound";
import Home from "@/pages/home";
import Quiz from "@/pages/quiz";
import Result from "@/pages/result";
import SignIn from "@/pages/signin";
import { Route, Routes } from "react-router-dom";

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz/:id" element={<Quiz />} />
      <Route path="/result/:id" element={<Result />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default UserRoutes;
