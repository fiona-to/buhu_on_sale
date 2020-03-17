import React from "react";
import Dashboard from "../dashboard/dashboard.component";
import CategoryAdmin from "../category-admin/category-admin.component";
import ProductAdmin from "../product-admin/product-admin.component";
import Logout from "../logout/logout.component";

export const Routes = [
  {
    path: "/admin",
    exact: true,
    name: "Dashboard",
    childContent: () => <Dashboard />
  },
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    childContent: () => <Dashboard />
  },
  {
    path: "/admin/category",
    name: "Category",
    childContent: () => <CategoryAdmin />
  },
  {
    path: "/admin/product",
    name: "Product",
    childContent: () => <ProductAdmin />
  },
  {
    path: "/admin/logout",
    name: "Log Out",
    childContent: () => <Logout />
  }
];
