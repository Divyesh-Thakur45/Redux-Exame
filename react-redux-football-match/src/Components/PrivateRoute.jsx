import { useSelector } from "react-redux";
import { Login } from "../Pages/Login";
// import { WatchListPage } from "../Pages/WatchListPage";
// import { Homepage } from "../Pages/Homepage";

export const PrivateRoute = ({ children }) => {
  const { token } = useSelector((store) => store.Authreducer);
  // if (token == null) {
  //   alert("Login First")
  //   return <Login />;
  // } else {
    return children;
  // }
  return <>{/* Complete this higher order component  */}</>;
};
