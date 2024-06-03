import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { Suspense } from "react";

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<h1>Cargando...</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default MainLayout;
