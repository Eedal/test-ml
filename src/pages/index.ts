import { lazy } from "react";
import Home from "./Home";

export { Home };

export const Items = lazy(() => import("./Items/Items"));
export const ItemDetail = lazy(() => import("./ItemsDetail/ItemDetail"));
