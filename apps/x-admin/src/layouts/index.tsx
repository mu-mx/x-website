import { useLocation, Outlet } from "umi";

export default function Layout() {
  const location = useLocation();
  if (location.pathname === "/login") {
    return (
      <div>
        <Outlet />
      </div>
    );
  }

  return <Outlet />;
}
