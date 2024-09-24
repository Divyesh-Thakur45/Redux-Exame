import { Route, Routes } from "react-router-dom";
import { Homepage } from "../Pages/Homepage";
import { WatchListPage } from "../Pages/WatchListPage";
import { Login } from "../Pages/Login";
import { PrivateRoute } from "../Components/PrivateRoute";
// import { MatchList } from "../Components/MatchList";
export const MainRoutes = () => {
  return (
    <Routes>
      {/* Provide all Routes here */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Homepage />
          </PrivateRoute>
        }
      />
      {/* <Route path="/WatchListPage" element={<WatchListPage />} /> */}
      <Route path="/WatchListPage/:id" element={<WatchListPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};
