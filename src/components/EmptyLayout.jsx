import { Outlet } from "react-router-dom";

const EmptyLayout = () => {
  return (
    <>
      <div className="container h-100">
        <Outlet />
      </div>
    </>
  );
};

export default EmptyLayout;
