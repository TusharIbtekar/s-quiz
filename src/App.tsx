import { Route, Routes, BrowserRouter } from "react-router-dom";
import NotFound from "./components/notfound/not-found";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Admin from "./pages/Admin";
import CreateQuiz from "./pages/CreateQuiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/result/:id" element={<Result />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/create" element={<CreateQuiz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
