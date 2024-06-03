import { Suspense } from "react";
import { Outlet, useParams } from "react-router-dom";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { BreadcrumbProvider } from "../../context/BreadcrumbContext";
import "./ItemResultLayout.scss";
import { HelmetItemResult } from "./ItemResultLayout.constant";
import Helmet from "../../components/page/Helmet";

function ItemsResultLayout() {
  const { id } = useParams();

  const HelmetValue = id
    ? HelmetItemResult.itemDetail
    : HelmetItemResult.itemsResult;

  return (
    <>
      <Helmet {...HelmetValue} />
      <BreadcrumbProvider>
        <div className="results-layout grid">
          <Breadcrumbs />
          <Suspense fallback={<h1>Cargando...</h1>}>
            <Outlet />
          </Suspense>
        </div>
      </BreadcrumbProvider>
    </>
  );
}

export default ItemsResultLayout;
