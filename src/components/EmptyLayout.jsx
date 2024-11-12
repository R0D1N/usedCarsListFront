import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

const EmptyLayout = () => {
  return (
    <>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default EmptyLayout;
