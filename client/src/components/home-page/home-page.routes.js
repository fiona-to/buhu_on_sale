import React from "react";
import CategoryPage from "../category-page/category-page.component";
import Admin from "../admin/admin.component";
import ProductRoutes from "../product-page/product-page.routes";
/*--------------------------------------------------------
  CONFIGURATION: HOME ROUTES
--------------------------------------------------------*/
export const Routes = [
  {
    path: "/admin",
    title: "Admin",
    childContent: () => <Admin />
  },
  {
    path: "/product",
    title: "Product",
    childContent: () => <ProductRoutes />
  }
];
