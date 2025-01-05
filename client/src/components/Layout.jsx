import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

function Layout() {
  return (
    <>
      <div className="container-fluid mb-3 sticky-top">
        <Navbar />
      </div>
      <div className="container-md">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
