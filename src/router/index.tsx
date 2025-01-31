import App from "@/App";
import { ProtectedRoutes } from "@/components/protectedRoutes";
import { Login } from "@/main/auth/login";
import { Register } from "@/main/auth/register";
import { Dashboard } from "@/main/dashboard";
import { Books } from "@/main/dashboard/pages/books";
import { AddEditBook } from "@/main/dashboard/pages/books/components/add-edit-book";
import { BookDetails } from "@/main/dashboard/pages/books/details";
import { Overview } from "@/main/dashboard/pages/overview";
import { Subscribers } from "@/main/dashboard/pages/subcribers";
import { AddEditSubscriber } from "@/main/dashboard/pages/subcribers/components/add-edit-subscriber";
import { createBrowserRouter, Outlet } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
        <Outlet />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
        <ProtectedRoutes>
          <Dashboard />
        </ProtectedRoutes>
    ),
    children: [
      {
        path: '/dashboard',
        element: <Overview />
      },
      {
        path: '/dashboard/books',
        element: <Books />
      },
      {
        path: '/dashboard/books/:id',
        element: <BookDetails />
      },
      {
        path: '/dashboard/books/add',
        element: <AddEditBook />
      },
      {
        path: '/dashboard/subcribers',
        element: <Subscribers />
      },
      {
        path: '/dashboard/subcribers/add',
        element: <AddEditSubscriber />
      },

    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
