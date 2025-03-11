import { Outlet } from "react-router-dom";
import AppBar from "./Header/AppBar";

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default Layout;
