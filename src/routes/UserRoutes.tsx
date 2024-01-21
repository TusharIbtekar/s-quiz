import NotFoundPage from "@/components/notfound/NotFound";
import Home from "@/pages/Home";
import Quiz from "@/pages/Quiz";
import Result from "@/pages/Result";
import SignIn from "@/pages/SignIn";
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
