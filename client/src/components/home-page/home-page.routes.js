import React from "react";
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
    path: "/category/:id",
    title: "Product",
    childContent: () => <ProductRoutes />
  }
];
