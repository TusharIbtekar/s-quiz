import { BrowserRouter } from "react-router-dom";
import { useAuthStore } from "./stores/user";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import SignIn from "./pages/SignIn";

function App() {
  const { currentUser } = useAuthStore();
  return (
    <BrowserRouter>
      {currentUser ? (
        currentUser.role === "admin" ? (
          <AdminRoutes />
        ) : (
          <UserRoutes />
        )
      ) : (
        <SignIn />
      )}
    </BrowserRouter>
  );
}
export default App;
